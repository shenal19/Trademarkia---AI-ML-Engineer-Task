import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

print("Script started")

from src.data_loader import load_newsgroups
from src.embeddings import embed_documents
from src.vector_store import VectorStore
from src.embeddings import model

print("Loading dataset...")
docs, labels = load_newsgroups("data/raw/20_newsgroups")

print("Documents loaded:", len(docs))

print("Creating embeddings...")
embeddings = embed_documents(docs[:200])  # smaller test first

print("Embeddings created")

print("Building vector index...")
store = VectorStore(embeddings.shape[1])
store.add_documents(embeddings, docs[:200])

print("Index built successfully")

query = "discussion about space missions"

query_embedding = model.encode(query, normalize_embeddings=True)

results = store.search(query_embedding, k=3)

print("\nTop results:\n")

for r in results:
    print(r["score"])
    print(r["document"][:200])
    print()