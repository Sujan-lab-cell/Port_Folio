import sys
import os
import json
import time

def main():
    if len(sys.argv) < 3:
        print("Usage: python embed_bge_m3.py <input_chunks_json> <output_embeddings_json>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not os.path.exists(input_file):
        print(f"Error: Input file {input_file} not found.")
        sys.exit(1)

    print(f"Loading chunks from: {input_file}")
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    chunks = data.get("chunks", [])
    print(f"Loaded {len(chunks)} chunks.")

    print("Loading SentenceTransformer model 'BAAI/bge-m3'...")
    t0 = time.time()
    from sentence_transformers import SentenceTransformer
    model = SentenceTransformer("BAAI/bge-m3")
    print(f"Model loaded successfully in {time.time() - t0:.2f} seconds.")

    texts = [chunk["content"] for chunk in chunks]
    print(f"Generating embeddings for {len(texts)} chunks (Language breakdown: {data.get('en_count', 0)} English, {data.get('ja_count', 0)} Japanese)...")
    
    t_start = time.time()
    embeddings = model.encode(texts, batch_size=16, show_progress_bar=True, normalize_embeddings=True)
    duration = time.time() - t_start
    print(f"Embeddings generated successfully in {duration:.2f} seconds!")

    # Attach 1024D embeddings to chunk objects
    output_chunks = []
    for chunk, emb in zip(chunks, embeddings):
        chunk_copy = dict(chunk)
        chunk_copy["embedding"] = emb.tolist()
        output_chunks.append(chunk_copy)

    dim = len(embeddings[0]) if len(embeddings) > 0 else 0
    result = {
        "model": "BAAI/bge-m3",
        "embedding_dimension": dim,
        "total_chunks": len(output_chunks),
        "en_chunks": data.get("en_count", 0),
        "ja_chunks": data.get("ja_count", 0),
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "chunks": output_chunks
    }

    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"Saved {len(output_chunks)} embeddings (Dimension: {dim}) to {output_file}")

if __name__ == "__main__":
    main()
