import sys
import os
import time
import json
import warnings
import uvicorn
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Union

warnings.filterwarnings("ignore")
os.environ["TOKENIZERS_PARALLELISM"] = "false"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

model = None
model_load_time_ms = 0.0

@asynccontextmanager
async def lifespan(app: FastAPI):
    global model, model_load_time_ms
    print("\n=======================================================================")
    print("[EMBEDDING SERVICE] Starting BAAI/bge-m3 Persistent Embedding Service...")
    print("=======================================================================")
    print("[EMBEDDING SERVICE] Loading BAAI/bge-m3 SentenceTransformer into RAM...")
    
    t0 = time.perf_counter()
    from sentence_transformers import SentenceTransformer
    model = SentenceTransformer("BAAI/bge-m3")
    t1 = time.perf_counter()
    model_load_time_ms = round((t1 - t0) * 1000, 2)
    
    print(f"[EMBEDDING SERVICE] [OK] BAAI/bge-m3 loaded successfully in {model_load_time_ms} ms!")
    print(f"[EMBEDDING SERVICE] [OK] Server ready for embedding requests on http://127.0.0.1:8000")
    print("=======================================================================\n")
    yield
    print("\n[EMBEDDING SERVICE] Shutting down embedding service and releasing memory...")

app = FastAPI(title="BGE-M3 Persistent Embedding Service", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmbedRequest(BaseModel):
    text: Union[str, List[str]]

@app.get("/health")
def health():
    if model is None:
        raise HTTPException(status_code=503, detail="Embedding model is still loading...")
    return {
        "status": "healthy",
        "model": "BAAI/bge-m3",
        "dimension": 1024,
        "model_load_time_ms": model_load_time_ms,
        "cached_in_memory": True
    }

@app.post("/embed")
def embed(req: EmbedRequest):
    if model is None:
        raise HTTPException(status_code=503, detail="Embedding model is still initializing.")
    
    if isinstance(req.text, list):
        queries = req.text
    else:
        queries = [req.text]
    
    t0 = time.perf_counter()
    embeddings = model.encode(queries, normalize_embeddings=True).tolist()
    t1 = time.perf_counter()
    inference_ms = round((t1 - t0) * 1000, 2)
    
    if isinstance(req.text, str):
        return {
            "embedding": embeddings[0],
            "dimension": len(embeddings[0]),
            "inference_ms": inference_ms,
            "cached_in_memory": True
        }
    
    return {
        "embeddings": embeddings,
        "dimension": len(embeddings[0]) if embeddings else 1024,
        "inference_ms": inference_ms,
        "cached_in_memory": True
    }

if __name__ == "__main__":
    port = int(os.environ.get("EMBEDDING_SERVICE_PORT", 8000))
    uvicorn.run(app, host="127.0.0.1", port=port)
