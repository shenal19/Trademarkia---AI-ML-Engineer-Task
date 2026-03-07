import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.data_loader import load_newsgroups
from src.embeddings import embed_documents

docs, labels = load_newsgroups("data/raw/20_newsgroups")


docs = docs[:10]

embeddings = embed_documents(docs)

print("Embedding shape:", embeddings.shape)