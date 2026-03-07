import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.data_loader import load_newsgroups
from src.embeddings import embed_documents
from src.clustering import FuzzyClusterer


print("Loading dataset...")
docs, labels = load_newsgroups("data/raw/20_newsgroups")

docs = docs[:500]  

print("Embedding documents...")
embeddings = embed_documents(docs)

print("Running fuzzy clustering...")

clusterer = FuzzyClusterer(n_clusters=10)

membership = clusterer.fit(embeddings)

print("Membership shape:", membership.shape)

print("\nExample distribution for first document:")

print(membership[0])