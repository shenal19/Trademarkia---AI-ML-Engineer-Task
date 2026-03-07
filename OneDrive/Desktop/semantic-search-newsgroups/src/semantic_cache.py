import numpy as np


def cosine_similarity(a, b):
    return np.dot(a, b)


class SemanticCache:

    def __init__(self, threshold=0.85):

        self.threshold = threshold

        self.entries = []

        self.hit_count = 0
        self.miss_count = 0

    def lookup(self, query_embedding, cluster_id):

        best_sim = 0
        best_entry = None

        for entry in self.entries:

            # search only same cluster
            if entry["cluster"] != cluster_id:
                continue

            sim = cosine_similarity(query_embedding, entry["embedding"])

            if sim > best_sim:
                best_sim = sim
                best_entry = entry

        if best_sim >= self.threshold:
            self.hit_count += 1
            return best_entry, best_sim

        self.miss_count += 1
        return None, best_sim

    def store(self, query, embedding, cluster_id, result):

        entry = {
            "query": query,
            "embedding": embedding,
            "cluster": cluster_id,
            "result": result
        }

        self.entries.append(entry)

    def stats(self):

        total = len(self.entries)

        hit_rate = 0

        if (self.hit_count + self.miss_count) > 0:
            hit_rate = self.hit_count / (self.hit_count + self.miss_count)

        return {
            "total_entries": total,
            "hit_count": self.hit_count,
            "miss_count": self.miss_count,
            "hit_rate": hit_rate
        }

    def clear(self):

        self.entries = []
        self.hit_count = 0
        self.miss_count = 0