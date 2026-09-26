import sys
import json
import os
import warnings
import time

t0_start = time.perf_counter()

# Suppress warnings
warnings.filterwarnings("ignore")
os.environ["TOKENIZERS_PARALLELISM"] = "false"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

t1_imports_start = time.perf_counter()

def main():
    if len(sys.argv) < 2:
        queries = ["What are Sujan's technical skills, education, and project experience?"]
    else:
        arg = sys.argv[1]
        if arg.startswith("["):
            queries = json.loads(arg)
        else:
            queries = [arg]

    from sentence_transformers import SentenceTransformer
    t2_after_lib_import = time.perf_counter()

    model = SentenceTransformer("BAAI/bge-m3")
    t3_after_model_load = time.perf_counter()

    embeddings = model.encode(queries, normalize_embeddings=True).tolist()
    t4_after_inference = time.perf_counter()
    
    outputs = []
    for q, emb in zip(queries, embeddings):
        outputs.append({
            "query": q,
            "dimension": len(emb),
            "embedding": emb
        })

    result_payload = outputs if len(queries) > 1 else outputs[0]
    
    telemetry = {
        "python_init_duration_ms": round((t1_imports_start - t0_start) * 1000, 2),
        "sentence_transformers_import_ms": round((t2_after_lib_import - t1_imports_start) * 1000, 2),
        "model_loading_ms": round((t3_after_model_load - t2_after_lib_import) * 1000, 2),
        "inference_ms": round((t4_after_inference - t3_after_model_load) * 1000, 2),
        "total_embed_script_ms": round((t4_after_inference - t0_start) * 1000, 2),
        "model_name": "BAAI/bge-m3",
        "dimension": 1024,
        "execution_location": "local_cpu_python_process"
    }

    if isinstance(result_payload, dict):
        result_payload["_telemetry"] = telemetry
    
    sys.stdout.write(json.dumps(result_payload))
    sys.stdout.flush()

if __name__ == "__main__":
    main()
