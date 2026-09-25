import sys
import json
import os
import warnings

# Suppress warnings
warnings.filterwarnings("ignore")
os.environ["TOKENIZERS_PARALLELISM"] = "false"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

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
    model = SentenceTransformer("BAAI/bge-m3")
    embeddings = model.encode(queries, normalize_embeddings=True).tolist()
    
    outputs = []
    for q, emb in zip(queries, embeddings):
        outputs.append({
            "query": q,
            "dimension": len(emb),
            "embedding": emb
        })

    sys.stdout.write(json.dumps(outputs if len(queries) > 1 else outputs[0]))
    sys.stdout.flush()

if __name__ == "__main__":
    main()
