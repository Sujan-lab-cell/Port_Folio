import sys
import json
import os
import urllib.request
import urllib.parse
import re

# Suppress warnings
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

SYSTEM_PROMPT = """You are Sujan K S's Portfolio AI Assistant.
Your task is to answer user questions about Sujan's work, experience, projects, education, and skills accurately and concisely using ONLY the provided portfolio context.

CRITICAL RULES:
1. Grounding: Rely strictly on the provided context chunks. Do NOT invent, hallucinate, or assume facts not present in the context. Always preserve exact facts like CGPA 8.56.
2. Synthesis: Synthesize context into a natural, conversational AI response. Never directly output raw key-value pairs or verbatim Markdown dumps from the knowledge base (e.g. do not dump "**Company:** ... \\n **Location:** ...").
3. Missing Information: If the query cannot be answered using the provided context, clearly state: "The requested information is not available in Sujan's portfolio knowledge base."
4. Proposed / Planned Status: If a project status is marked as "Proposed / Planned — Not Started" (e.g. final-year colorectal polyp detection project), clearly state that it is a proposed/planned research project and NOT yet fully implemented or completed.
5. Factual Distinctions: Keep clear distinctions between internships (FlyRank AI, ISIRI Technologies / AyusLab), projects (GeoSentinel, SmartQ, Invoice Parser, etc.), education (B.Tech at NMAMIT Nitte, CGPA 8.56), and technical skills.
6. Language: Answer in the same language as the user's query (English for English queries, Japanese for Japanese queries).
7. Conciseness: Keep answers concise, factual, and direct to the point.
"""

def generate_via_groq(query, context, api_key):
  url = "https://api.groq.com/openai/v1/chat/completions"
  headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
  }
  payload = {
    "model": "llama-3.3-70b-versatile",
    "messages": [
      {"role": "system", "content": SYSTEM_PROMPT},
      {"role": "user", "content": f"PORTFOLIO CONTEXT:\n{context}\n\nUSER QUESTION: {query}"}
    ],
    "temperature": 0.2,
    "max_tokens": 600
  }
  req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
  with urllib.request.urlopen(req) as resp:
    res_data = json.loads(resp.read().decode('utf-8'))
    return res_data['choices'][0]['message']['content'].strip()

def generate_via_gemini(query, context, api_key):
  url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
  headers = {"Content-Type": "application/json"}
  prompt_text = f"{SYSTEM_PROMPT}\n\nPORTFOLIO CONTEXT:\n{context}\n\nUSER QUESTION: {query}"
  payload = {
    "contents": [{"parts": [{"text": prompt_text}]}],
    "generationConfig": {"temperature": 0.2, "maxOutputTokens": 600}
  }
  req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
  with urllib.request.urlopen(req) as resp:
    res_data = json.loads(resp.read().decode('utf-8'))
    return res_data['candidates'][0]['content']['parts'][0]['text'].strip()

def generate_via_openai(query, context, api_key):
  url = "https://api.openai.com/v1/chat/completions"
  headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
  }
  payload = {
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "system", "content": SYSTEM_PROMPT},
      {"role": "user", "content": f"PORTFOLIO CONTEXT:\n{context}\n\nUSER QUESTION: {query}"}
    ],
    "temperature": 0.2,
    "max_tokens": 600
  }
  req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
  with urllib.request.urlopen(req) as resp:
    res_data = json.loads(resp.read().decode('utf-8'))
    return res_data['choices'][0]['message']['content'].strip()

def grounded_rule_based_synthesis(query, context):
  """
  Deterministic grounded context extraction & synthesis engine.
  Synthesizes portfolio knowledge into clean natural-language answers
  without outputting raw chunk headers, metadata, or unformatted raw key-value dumps.
  """
  is_ja = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]', query))
  q_lower = query.lower().strip()

  # Clean context text (strip metadata and chunk headers)
  cleaned_text = re.sub(r'\[Document:[^\]]*\]', '', context)
  cleaned_text = re.sub(r'\[Chunk[^\]]*\]', '', cleaned_text)
  cleaned_text = re.sub(r'Source:[^\n]*', '', cleaned_text)
  cleaned_text = re.sub(r'Language:[^\n]*', '', cleaned_text)
  cleaned_text = re.sub(r'Section:[^\n]*', '', cleaned_text)
  cleaned_text = re.sub(r'#{1,6}\s*', '', cleaned_text)

  # 1. "Tell me about Sujan" / Profile / Bio / Background queries
  is_tell_about_sujan = (
    "tell me about sujan" in q_lower or
    "who is sujan" in q_lower or
    "about sujan" in q_lower or
    "sujan's background" in q_lower or
    ("sujan" in q_lower and ("tell" in q_lower or "who" in q_lower or "profile" in q_lower or "bio" in q_lower or "overview" in q_lower)) or
    (is_ja and ("スジャンについて" in q_lower or "スジャンとは" in q_lower or "概要" in q_lower or "プロフィール" in q_lower))
  )

  if is_tell_about_sujan:
    if is_ja:
      return (
        "スジャン K S (Sujan K S) は、NMAM Institute of Technology (NMAMIT) にて人工知能 & 機械学習 (AI & ML) を専攻する最終学年 (B.Tech) の学生 (CGPA 8.56) であり、AI/ML エンジニアです。\n\n"
        "コンピュータビジョン (YOLOv8, OpenCV)、ディープラーニング (PyTorch, TensorFlow)、自然言語処理 (T5, LayoutLMv3)、およびロボティクス OS (ROS 2) を得意としています。"
        "これまでに FlyRank AI（検索ランキング予測最適化）および ISIRI Technologies / AyusLab（医療パース AI）でのインターン経験があり、GeoSentinel（AI地滑り検出）や SmartQ Generator などの知能システムを開発しています。"
      )
    return (
      "Sujan K S is an AI & Machine Learning Engineer and a final-year B.Tech Artificial Intelligence & Machine Learning student at NMAM Institute of Technology (NMAMIT), Nitte (CGPA 8.56).\n\n"
      "He specializes in Computer Vision (YOLOv8, OpenCV), Deep Learning (PyTorch, TensorFlow), Natural Language Processing (T5, LayoutLMv3), and Robotics OS (ROS 2). "
      "He has completed engineering internships at FlyRank AI (search ranking model optimization) and ISIRI Technologies / AyusLab (medical document OCR & NLP parsing), and has built practical intelligent systems including GeoSentinel (AI landslide detection) and SmartQ Generator."
    )

  # 2. "How many internships did he do?" / Internship count query
  is_how_many_internships = (
    ("how many" in q_lower and "internship" in q_lower) or
    ("number of internship" in q_lower) or
    ("count" in q_lower and "internship" in q_lower) or
    (is_ja and ("何回" in q_lower and "インターン" in q_lower or "いくつ" in q_lower and "インターン" in q_lower))
  )

  if is_how_many_internships:
    if is_ja:
      return (
        "スジャンはこれまでに**2つのエンジニアリング・インターンシップ**を修了しています:\n\n"
        "1. **FlyRank AI** — 機械学習エンジニアリング・インターン（2026年1月〜3月 | 検索ランキング予測モデル最適化、Precision@50: 0.444）\n"
        "2. **ISIRI Technologies / AyusLab** — AI/MLエンジニアリング・インターン（2026年6月〜8月 | 医療請求書・診断レポートパースAI開発、精度96.8%）"
      )
    return (
      "Sujan has completed **2 engineering internships**:\n\n"
      "1. **FlyRank AI** — Machine Learning Engineering Intern (January 2026 – March 2026) focusing on search ranking model optimization (Precision@50: 0.444).\n"
      "2. **ISIRI Technologies Pvt. Ltd. / AyusLab** — AI / ML Engineering Intern (June 2026 – August 2026) developing a hybrid AI medical document parser (96.8% extraction precision)."
    )

  # 3. "Tell me about his internship" / Internship details
  is_internship_query = (
    "internship" in q_lower or "internships" in q_lower or "work experience" in q_lower or
    (is_ja and ("インターン" in q_lower or "職歴" in q_lower or "実務経験" in q_lower))
  )

  if is_internship_query:
    if is_ja:
      return (
        "スジャンはこれまでに2つのエンジニアリング・インターンシップを経験しています:\n\n"
        "1. **ISIRI Technologies / AyusLab**（AI/MLエンジニアリング・インターン | 2026年6月〜8月）:\n"
        "   • Tesseract OCR、LayoutLMv3、正規表現を統合したハイブリッド医療請求書パースAIを開発。\n"
        "   • 主要診断フィールド抽出精度 96.8% を達成。\n\n"
        "2. **FlyRank AI**（機械学習エンジニアリング・インターン | 2026年1月〜3月）:\n"
        "   • 検索ランキング予測モデルを評価し、Precision@50スコアを 0.392 から 0.444 に改善。\n"
        "   • 100万件の検索クエリを用いたデータリークのない検証パイプラインを構築。"
      )
    return (
      "Sujan has completed 2 engineering internships:\n\n"
      "1. **ISIRI Technologies Pvt. Ltd. / AyusLab** (AI / ML Engineering Intern | June 2026 – August 2026):\n"
      "   • Developed a Hybrid AI Medical Invoice & Diagnostic Report Parser combining Tesseract OCR, LayoutLMv3, and Regular Expressions.\n"
      "   • Achieved 96.8% precision in extracting key diagnostic fields.\n\n"
      "2. **FlyRank AI** (Machine Learning Engineering Intern | January 2026 – March 2026):\n"
      "   • Evaluated search ranking algorithms and optimized Precision@50 from a 0.392 baseline to 0.444.\n"
      "   • Built a leak-prevention validation pipeline and analyzed over 1,000,000 search query data points."
    )

  # 4. "Show resume" / CV / Education & Overall background
  is_resume_query = (
    "resume" in q_lower or "cv" in q_lower or "show resume" in q_lower or
    (is_ja and ("履歴書" in q_lower or "職務経歴書" in q_lower or "レジュメ" in q_lower))
  )

  if is_resume_query:
    if is_ja:
      return (
        "スジャン K S の履歴書サマリーは以下の通りです:\n\n"
        "• **学歴**: NMAM Institute of Technology (NMAMIT), Nitte — AI & ML 専攻 B.Tech 最終学年 (CGPA: **8.56**)\n"
        "• **インターン経験**:\n"
        "  1. **ISIRI Technologies / AyusLab**: AI/ML インターン（医療AIパース開発、精度 96.8%）\n"
        "  2. **FlyRank AI**: ML インターン（検索ランキング最適化、Precision@50: 0.444）\n"
        "• **コアスキル**: コンピュータビジョン (YOLOv8, OpenCV)、ディープラーニング (PyTorch, TensorFlow)、NLP (T5, LayoutLMv3)、ROS 2、Python、C++、Java、SQL\n"
        "• **代表プロジェクト**: GeoSentinel（地滑り検出AI）、SmartQ Generator（試験問題自動生成AI）、WGAN-GP 顔画像生成"
      )
    return (
      "Here is a concise summary of Sujan K S's background and resume:\n\n"
      "• **Education**: B.Tech in Artificial Intelligence & Machine Learning at NMAM Institute of Technology (NMAMIT), Nitte — **CGPA: 8.56** (Final-year student).\n"
      "• **Experience**:\n"
      "  1. **ISIRI Technologies / AyusLab**: AI / ML Engineering Intern — Built hybrid medical document parser achieving 96.8% extraction precision.\n"
      "  2. **FlyRank AI**: Machine Learning Engineering Intern — Optimized search ranking algorithms, boosting Precision@50 from 0.392 to 0.444.\n"
      "• **Core Skills**: Computer Vision (YOLOv8, OpenCV), Deep Learning (PyTorch, TensorFlow), NLP (T5, LayoutLMv3), ROS 2, Python, C++, Java, SQL.\n"
      "• **Featured Projects**: GeoSentinel (AI Landslide Detection), SmartQ Generator (Multilingual Question Gen), WGAN-GP Face Generation."
    )

  # 5. "What are his skills?" / Skills queries
  is_skills_query = (
    "skills" in q_lower or "skill" in q_lower or "stack" in q_lower or "technologies" in q_lower or
    (is_ja and ("スキル" in q_lower or "技術" in q_lower or "得意" in q_lower))
  )

  if is_skills_query:
    if is_ja:
      return (
        "スジャンの主要な技術スキルセットは以下の通りです:\n\n"
        "• **プログラミング言語**: Python, C, C++, Java, SQL, DAX, Bash\n"
        "• **AI / 機械学習 & フレームワーク**: PyTorch, TensorFlow, YOLOv8, OpenCV, Scikit-learn, Hugging Face (T5, LayoutLMv3), Roboflow, EasyOCR\n"
        "• **ロボティクス & バックエンド**: ROS 2 (Robot Operating System), 強化学習, FastAPI, Docker, Git/GitHub\n"
        "• **データ & アナリティクス**: Power BI, MySQL, PostgreSQL, Pandas, NumPy, Matplotlib"
      )
    return (
      "Sujan's technical skill set includes:\n\n"
      "• **Programming Languages**: Python, C, C++, Java, SQL, DAX, Bash\n"
      "• **AI/ML & Deep Learning**: PyTorch, TensorFlow, YOLOv8, OpenCV, Scikit-learn, Hugging Face Transformers (T5, LayoutLMv3), Roboflow, EasyOCR\n"
      "• **Robotics & Systems**: ROS 2 (Robot Operating System), Reinforcement Learning, FastAPI, Docker, Git/GitHub\n"
      "• **Data & Analytics**: Power BI, MySQL, PostgreSQL, Pandas, NumPy, Matplotlib"
    )

  # 6. "What projects has he built?" / Projects queries
  is_projects_query = (
    "projects" in q_lower or "project" in q_lower or "built" in q_lower or
    (is_ja and ("プロジェクト" in q_lower or "開発" in q_lower or "構築" in q_lower))
  )

  if is_projects_query and not ("final year" in q_lower or "colorectal" in q_lower or "polyp" in q_lower):
    if is_ja:
      return (
        "スジャンが構築した主なプロジェクトは以下の通りです:\n\n"
        "1. **GeoSentinel**: YOLOv8、衛星画像処理、自動アラートを統合したAI地滑り検出システム。\n"
        "2. **SmartQ Generator**: T5 トランスフォーマーと Streamlit を活用した多言語 AI 試験問題自動生成システム。\n"
        "3. **WGAN-GP 顔画像生成**: Deep Convolutional GAN と Wasserstein 損失を用いた高精度人間顔画像合成モデル。\n"
        "4. **YOLOv8 車両・歩行者検出**: リアルタイム自動運転および都市監視向け物体検出システム。\n"
        "5. **Eコマース売上分析ダッシュボード**: 10,000件以上のトランザクションを分析する Power BI & DAX ダッシュボード。\n"
        "6. **銀行管理システム**: ACID トランザクションとリレーショナルデータベースを実装した Java & MySQL アプリケーション。"
      )
    return (
      "Sujan has built several practical AI and software engineering projects, including:\n\n"
      "1. **GeoSentinel**: AI-powered landslide detection system integrating YOLOv8, satellite imagery processing, and automated alerts.\n"
      "2. **SmartQ Generator**: Multilingual AI Question Paper Generator built using T5 transformers and Streamlit.\n"
      "3. **WGAN-GP Human Face Generation**: High-fidelity face synthesis model built with Deep Convolutional GANs and Wasserstein GP loss.\n"
      "4. **YOLOv8 Urban Computer Vision**: Real-time car and pedestrian detection for autonomous navigation and surveillance.\n"
      "5. **E-Commerce Analytics Dashboard**: Power BI & DAX dashboard analyzing 10,000+ sales transactions.\n"
      "6. **Bank Management System**: Java & MySQL relational database application with strict ACID transaction management."
    )

  # 7. Final-year project specifically
  is_final_year_query = (
    "final-year" in q_lower or "final year" in q_lower or
    "colorectal" in q_lower or "polyp" in q_lower or
    (is_ja and ("卒業研究" in q_lower or "ポリープ" in q_lower))
  )

  if is_final_year_query:
    if is_ja:
      return (
        "スジャンの現在の卒業研究プロジェクトは「大腸ポリープ検出のための時系列検証適応フレームワーク (Adaptive Temporal Validation Framework for Colorectal Polyp Detection)」です。\n\n"
        "**注意**: このプロジェクトのステータスは現在 **提案・計画段階 — 未着手 (Proposed / Planned — Not Started)** です。"
        "連続内視鏡ビデオにおいて空間的検出、オブジェクトトラッキング、および時系列持続性を活用し、大腸ポリープ検出の信頼性を向上させることを目的とした研究提案です。"
      )
    return (
      "Sujan's final-year project is the 'Adaptive Temporal Validation Framework for Colorectal Polyp Detection'.\n\n"
      "**Note**: The current status of this project is **Proposed / Planned — Not Started**.\n"
      "It is a proposed research project aiming to improve the reliability of colorectal polyp detection in continuous colonoscopy video using spatial detection, object tracking, and temporal persistence models."
    )

  # 8. FlyRank Internship
  if "flyrank" in q_lower:
    if is_ja:
      return "スジャンはFlyRank AIの機械学習エンジニアリング・インターンとして、検索ランキング予測モデルの評価および精度向上を担当しました。特にPrecision@50を0.392から0.444に向上させ、100万件の検索クエリデータを用いたデータリークのない厳密な検証パイプラインを構築しました。"
    return "During his Machine Learning Engineering internship at FlyRank AI, Sujan evaluated search ranking algorithms, optimized Precision@50 from a 0.392 baseline to 0.444, built a leak-prevention pipeline, and analyzed over 1,000,000 search query data points."

  # 9. AyusLab / ISIRI Technologies
  if "ayuslab" in q_lower or "isiri" in q_lower:
    if is_ja:
      return "スジャンはISIRI Technologies (AyusLab)にてAI/MLインターンとして勤務し、医療請求書・診断レポート向けのハイブリッドAIパースパイプラインを開発しました。Tesseract OCR、LayoutLMv3、Regular Expressionsを統合し、主要フィールド抽出精度96.8%を達成しました。"
    return "At ISIRI Technologies (AyusLab), Sujan developed a Hybrid AI Medical Invoice & Diagnostic Report Parser combining Tesseract OCR, LayoutLMv3, and Regex rules, achieving 96.8% precision in extracting key diagnostic fields."

  # 10. Precision@50
  if "precision@50" in q_lower or "p@50" in q_lower:
    if is_ja:
      return "スジャンのFlyRank AIでのPrecision@50スコアは0.444です（初期ベースライン0.392からの向上を達成しました）。"
    return "Sujan achieved a Precision@50 score of 0.444 at FlyRank AI, improving upon the baseline model score of 0.392."

  # 11. CGPA query
  if "cgpa" in q_lower or "gpa" in q_lower:
    if is_ja:
      return "スジャンのB.Tech (AI & ML, NMAMIT Nitte) における累積CGPAは **8.56** です。"
    return "Sujan's current CGPA in B.Tech Artificial Intelligence & Machine Learning at NMAMIT Nitte is **8.56**."

  # Fallback for arbitrary queries: Convert raw key-value / context chunks into clean synthesized natural language sentences
  lines = [line.strip() for line in cleaned_text.split('\n') if line.strip()]
  clean_sentences = []
  for line in lines:
    # Skip chunk metadata lines
    if line.startswith('[') or line.startswith('Source:') or line.startswith('Language:') or line.startswith('Section:'):
      continue
    
    # Format raw key-value pairs cleanly (e.g. **Company:** ISIRI -> Company: ISIRI)
    formatted = re.sub(r'^\*\*([^:]+):\*\*\s*', r'\1: ', line)
    formatted = re.sub(r'^[-\*\d\.\s]+', '', formatted).strip()
    
    if len(formatted) > 20 and formatted not in clean_sentences:
      clean_sentences.append(formatted)
    if len(clean_sentences) >= 4:
      break

  if clean_sentences:
    return " ".join(clean_sentences[:4])

  return "The requested information is not available in Sujan's portfolio knowledge base."

import time

t0_start = time.perf_counter()

def main():
  if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
  if hasattr(sys.stdin, 'reconfigure'):
    sys.stdin.reconfigure(encoding='utf-8')

  t1_ready = time.perf_counter()

  if not sys.stdin.isatty():
    raw_input = sys.stdin.read()
  elif len(sys.argv) > 1:
    raw_input = sys.argv[1]
  else:
    sys.stdout.write(json.dumps({"error": "Missing input JSON payload"}, ensure_ascii=False) + "\n")
    return

  if not raw_input or not raw_input.strip():
    sys.stdout.write(json.dumps({"error": "Empty input JSON payload"}, ensure_ascii=False) + "\n")
    return

  payload = json.loads(raw_input)
  query = payload.get("query", "")
  context = payload.get("context", "")

  groq_key = os.environ.get("GROQ_API_KEY")
  gemini_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
  openai_key = os.environ.get("OPENAI_API_KEY")

  answer = None
  provider_used = "rule_based_synthesis"
  api_attempt_duration_ms = 0.0

  t2_before_gen = time.perf_counter()

  if groq_key:
    t_api_start = time.perf_counter()
    try:
      answer = generate_via_groq(query, context, groq_key)
      provider_used = "groq_api (llama-3.3-70b-versatile)"
      api_attempt_duration_ms = round((time.perf_counter() - t_api_start) * 1000, 2)
    except Exception as e:
      pass

  if not answer and gemini_key:
    t_api_start = time.perf_counter()
    try:
      answer = generate_via_gemini(query, context, gemini_key)
      provider_used = "gemini_api (gemini-1.5-flash)"
      api_attempt_duration_ms = round((time.perf_counter() - t_api_start) * 1000, 2)
    except Exception as e:
      pass

  if not answer and openai_key:
    t_api_start = time.perf_counter()
    try:
      answer = generate_via_openai(query, context, openai_key)
      provider_used = "openai_api (gpt-4o-mini)"
      api_attempt_duration_ms = round((time.perf_counter() - t_api_start) * 1000, 2)
    except Exception as e:
      pass

  t3_before_synthesis = time.perf_counter()
  if not answer:
    answer = grounded_rule_based_synthesis(query, context)
    synthesis_duration_ms = round((time.perf_counter() - t3_before_synthesis) * 1000, 2)
  else:
    synthesis_duration_ms = 0.0

  t4_finish = time.perf_counter()

  telemetry = {
    "python_startup_ms": round((t1_ready - t0_start) * 1000, 2),
    "provider_used": provider_used,
    "api_call_duration_ms": api_attempt_duration_ms,
    "rule_synthesis_duration_ms": synthesis_duration_ms,
    "total_llm_script_ms": round((t4_finish - t0_start) * 1000, 2),
    "execution_location": "local_python_process" if provider_used == "rule_based_synthesis" else "external_api"
  }

  sys.stdout.write(json.dumps({"answer": answer, "_telemetry": telemetry}, ensure_ascii=False) + "\n")
  sys.stdout.flush()

if __name__ == "__main__":
  main()
