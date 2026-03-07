import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.semantic_cache import SemanticCache
from src.embeddings import model


cache = SemanticCache(threshold=0.85)

query1 = "discussion about gun control"

query1_emb = model.encode(query1, normalize_embeddings=True)

cluster_id = 3

cache.store(query1, query1_emb, cluster_id, "Result about gun laws")


query2 = "debate on firearm regulation"

query2_emb = model.encode(query2, normalize_embeddings=True)

result, sim = cache.lookup(query2_emb, cluster_id)

print("Cache result:", result)
print("Similarity:", sim)

print("Cache stats:", cache.stats())