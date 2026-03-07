from fastapi import FastAPI
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.embeddings import model
from src.semantic_cache import SemanticCache
from src.vector_store import VectorStore
from src.data_loader import load_newsgroups
from src.embeddings import embed_documents
from api.models import QueryRequest


app = FastAPI()

cache = SemanticCache(threshold=0.85)

print("Loading dataset...")

docs, labels = load_newsgroups("data/raw/20_newsgroups")

print("Creating embeddings...")

embeddings = embed_documents(docs[:2000])  # smaller set for now

vector_store = VectorStore(embeddings.shape[1])
vector_store.add_documents(embeddings, docs[:2000])

print("System ready")


@app.post("/query")
def query(request: QueryRequest):

    query_text = request.query

    query_embedding = model.encode(query_text, normalize_embeddings=True)

    cluster_id = 0

    cached, sim = cache.lookup(query_embedding, cluster_id)

    if cached:

        return {
            "query": query_text,
            "cache_hit": True,
            "matched_query": cached["query"],
            "similarity_score": float(sim),
            "result": cached["result"],
            "dominant_cluster": cluster_id
        }

    results = vector_store.search(query_embedding, k=3)

    result_text = results[0]["document"] if results else "No result"

    cache.store(query_text, query_embedding, cluster_id, result_text)

    return {
        "query": query_text,
        "cache_hit": False,
        "result": result_text,
        "dominant_cluster": cluster_id
    }


@app.get("/cache/stats")
def cache_stats():
    return cache.stats()


@app.delete("/cache")
def clear_cache():
    cache.clear()
    return {"message": "Cache cleared"}