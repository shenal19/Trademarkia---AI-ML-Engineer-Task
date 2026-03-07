from fcmeans import FCM
import numpy as np


class FuzzyClusterer:

    def __init__(self, n_clusters=15):

        self.n_clusters = n_clusters
        self.model = FCM(n_clusters=n_clusters)

    def fit(self, embeddings):

        self.model.fit(embeddings)

        # membership matrix
        self.membership = self.model.u

        return self.membership

    def predict(self, embedding):

        probs = self.model.predict_proba(embedding.reshape(1, -1))

        return probs[0]

    def dominant_cluster(self, embedding):

        probs = self.predict(embedding)

        return int(np.argmax(probs))