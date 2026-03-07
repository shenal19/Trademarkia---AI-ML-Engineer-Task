import faiss
import numpy as np


class VectorStore:

    def __init__(self, dimension):

        # Inner product index (works with normalized embeddings)
        self.index = faiss.IndexFlatIP(dimension)

        self.documents = []

    def add_documents(self, embeddings, docs):

        embeddings = np.array(embeddings).astype("float32")

        self.index.add(embeddings)

        self.documents.extend(docs)

    def search(self, query_embedding, k=5):

        query_embedding = np.array([query_embedding]).astype("float32")

        scores, indices = self.index.search(query_embedding, k)

        results = []

        for i, score in zip(indices[0], scores[0]):

            results.append({
                "document": self.documents[i],
                "score": float(score)
            })

        return results


