import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.data_loader import load_newsgroups

docs, labels = load_newsgroups("data/raw/20_newsgroups")

print("Total documents:", len(docs))
print("First label:", labels[0])
print("Sample text:", docs[0][:200])