# Trademarkia---AI-ML-Engineer-Task

git clone https://github.com/shenal19/semantic-newsgroups-search

cd semantic-newsgroups-search

docker-compose up --build

**Problem Statement**

The goal of this project is to build a semantic search system for the 20 Newsgroups dataset. Traditional keyword search retrieves documents based on exact word matches, which often fails to capture the true meaning of a query.

For example, a user searching for “space missions” may miss relevant documents containing “NASA launch” because the exact keywords differ.

This project solves that limitation by implementing embedding-based semantic search, where both documents and user queries are converted into numerical vector representations. Documents are then retrieved based on semantic similarity rather than exact keyword matching.

**Approach**
The system follows these steps:

**Dataset Preparation**
The 20 Newsgroups dataset is loaded and cleaned to obtain a corpus of text documents.

**Text Embedding Generation**
Each document is converted into a vector embedding using a pre-trained transformer model.

**Vector Storage**
All document embeddings are stored so that similarity comparisons can be performed efficiently.

**Query Processing**
When a user sends a query, the query text is converted into its embedding.

**Similarity Search**
Cosine similarity is calculated between the query embedding and document embeddings.

**Top Results Retrieval**
The most semantically similar documents are returned as the search results.

This pipeline enables the system to retrieve documents that are conceptually related to the query, even when they do not share exact words.

**Model Used**

The project uses a Sentence Transformer model to generate semantic embeddings.

Sentence Transformers are transformer-based neural networks designed to convert sentences or documents into dense vector representations. These embeddings capture contextual meaning and allow similarity comparisons between pieces of text.

**Key characteristics:**

Produces high-quality semantic embeddings

Efficient for similarity search tasks

Pretrained on large text corpora

Similarity between vectors is calculated using cosine similarity, which measures how closely two vectors point in the same direction in the embedding space.


The project exposes a FastAPI endpoint to perform semantic search.


The API converts the query into an embedding, compares it against the stored document embeddings, and returns the most relevant documents.

**Future Improvements**

Several enhancements can further improve the system:

**Vector Databases**
Integrate FAISS or Pinecone for faster large-scale similarity search.

**Result Ranking Optimization**
Implement hybrid search combining keyword search and semantic similarity.

**Caching Embeddings**
Store embeddings efficiently to improve query performance.

**User Interface**
Build a simple frontend to interact with the semantic search API.

Scalability
Deploy the API using Docker and cloud services for production usage.

Example request:
