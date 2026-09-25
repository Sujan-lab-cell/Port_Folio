export interface RAGChunkMetadata {
  source: string;          // Relative filepath, e.g., "en/projects.md" or "ja/projects.md"
  language: "en" | "ja";   // Language code ("en" or "ja")
  document_type: string;   // Category, e.g., "project", "experience", "skill", "education"
  section: string;         // Top heading or section title, e.g., "GeoSentinel — AI Landslide Detection System"
  heading: string;         // Root document title, e.g., "Portfolio Projects"
  chunk_index: number;     // Order index within the document
  total_chunks: number;    // Total number of chunks produced from the file
  char_count: number;      // Character count of chunk text
}

export interface RAGChunk {
  id: string;              // Unique identifier e.g., "en_projects_md_chunk_0"
  content: string;         // Clean text content suitable for vector embedding
  metadata: RAGChunkMetadata;
  embedding?: number[];    // 1024-dimensional BAAI/bge-m3 embedding vector
}

export interface DocumentIngestionResult {
  source: string;
  document_type: string;
  chunk_count: number;
  chunks: RAGChunk[];
}
