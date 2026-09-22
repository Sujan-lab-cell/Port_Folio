export interface RAGChunkMetadata {
  source: string;          // Filename, e.g., "projects.md"
  document_type: string;   // Category, e.g., "project", "experience", "skill", "education"
  section: string;         // Top heading or section title, e.g., "GeoSentinel — AI Landslide Detection System"
  heading: string;         // Root document title, e.g., "Portfolio Projects"
  chunk_index: number;     // Order index within the document
  total_chunks: number;    // Total number of chunks produced from the file
  char_count: number;      // Character count of chunk text
}

export interface RAGChunk {
  id: string;              // Unique identifier e.g., "projects_md_chunk_0"
  content: string;         // Clean text content suitable for vector embedding
  metadata: RAGChunkMetadata;
}

export interface DocumentIngestionResult {
  source: string;
  document_type: string;
  chunk_count: number;
  chunks: RAGChunk[];
}
