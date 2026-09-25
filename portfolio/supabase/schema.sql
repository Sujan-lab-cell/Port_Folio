-- Enable the pgvector extension for vector embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Create table to store knowledge chunks and their BGE-M3 1024D embeddings
CREATE TABLE IF NOT EXISTS knowledge_embeddings (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB NOT NULL,
  embedding VECTOR(1024) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create HNSW index for high-performance cosine similarity vector search
CREATE INDEX IF NOT EXISTS knowledge_embeddings_embedding_hnsw_idx 
ON knowledge_embeddings 
USING hnsw (embedding vector_cosine_ops);

-- Index language inside metadata for fast filtering (en vs ja)
CREATE INDEX IF NOT EXISTS knowledge_embeddings_language_idx 
ON knowledge_embeddings ((metadata->>'language'));

-- Similarity Search Function (RPC) - match_knowledge_embeddings
CREATE OR REPLACE FUNCTION match_knowledge_embeddings (
  query_embedding VECTOR(1024),
  match_count INT DEFAULT 5,
  match_threshold FLOAT DEFAULT 0.0,
  filter_language TEXT DEFAULT NULL
)
RETURNS TABLE (
  id TEXT,
  content TEXT,
  source TEXT,
  section TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ke.id,
    ke.content,
    (ke.metadata->>'source')::TEXT AS source,
    (ke.metadata->>'section')::TEXT AS section,
    ke.metadata,
    (1 - (ke.embedding <=> query_embedding))::FLOAT AS similarity
  FROM knowledge_embeddings ke
  WHERE (filter_language IS NULL OR ke.metadata->>'language' = filter_language)
    AND (1 - (ke.embedding <=> query_embedding)) >= match_threshold
  ORDER BY ke.embedding <=> query_embedding ASC
  LIMIT match_count;
END;
$$;

-- Alias Similarity Search Function (RPC) - match_knowledge
CREATE OR REPLACE FUNCTION match_knowledge (
  query_embedding VECTOR(1024),
  match_threshold FLOAT DEFAULT 0.0,
  match_count INT DEFAULT 5,
  filter_language TEXT DEFAULT NULL
)
RETURNS TABLE (
  id TEXT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ke.id,
    ke.content,
    ke.metadata,
    (1 - (ke.embedding <=> query_embedding))::FLOAT AS similarity
  FROM knowledge_embeddings ke
  WHERE (filter_language IS NULL OR ke.metadata->>'language' = filter_language)
    AND (1 - (ke.embedding <=> query_embedding)) >= match_threshold
  ORDER BY ke.embedding <=> query_embedding ASC
  LIMIT match_count;
END;
$$;

