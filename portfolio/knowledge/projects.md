# Featured Projects

## 1. Colorectal Polyp Temporal Validation
- Category: Computer Vision | Deep Learning | Medical AI | Research
- Project Status: Final Year Project • Currently In Progress
- Research Status: Research-oriented project. Sujan is currently actively working on this project and preparing a research paper for submission. The research paper is currently in progress and has NOT yet been published, accepted, or completed.
- GitHub Repository: https://github.com/Sujan-lab-cell/Colrectal_Polyp_Temporal_validation.git
- Description: A research-focused computer vision project investigating temporal validation of colorectal polyp detection and tracking across continuous video/endoscopic frames. The objective is to build a robust temporal evaluation benchmark pipeline for video-based medical AI systems.
- Key Problem: Static per-frame metrics (precision, recall, mAP) fail to account for inter-frame camera motion, momentary occlusions, specular highlights, and detection flickering in real-time colonoscopy video streams.
- System Architecture:
  1. Endoscopic video frame sequence ingestion
  2. Frame-level object detection and tracking layer
  3. Temporal consistency evaluation layer (measuring persistence, trajectory smooth loss, and inter-frame jitter)
  4. Temporal validation metrics pipeline
- Focus Areas & Challenges: Resolving frame-to-frame temporal inconsistency, handling camera motion artifacts, balancing spatial precision with temporal stability.
- Technologies: Computer Vision, Deep Learning, Object Detection, Object Tracking, Image Segmentation, Temporal Validation, Python.

---

## 2. GeoSentinel — AI Landslide Detection System
- Category: AI | Computer Vision | Deep Learning
- Project Type: Terrain Monitoring & Risk Classification System
- GitHub Repository: https://github.com/Sujan-lab-cell/GeoSentinel-Landslide-Detection-System
- Live Demo: Available via Contact (#contact)
- Description: A real-time computer vision system utilizing YOLOv8 instance segmentation to detect landslide-affected terrain, delineate irregular hazard boundaries with pixel-wise polygon masks, and classify risk levels.
- Key Metrics & Results:
  - Achieved a mAP@0.50 of 0.731 on landslide terrain segmentation.
  - Developed an interactive Streamlit monitoring dashboard for real-time terrain inspection and hazard scoring.
- System Architecture: Image stream -> YOLOv8 instance segmentation -> Hazard scoring engine -> Streamlit monitoring dashboard -> Alert layer.
- Technologies: YOLOv8 Segmentation, Python, OpenCV, Streamlit, Risk Scoring Models.

---

## 3. SmartQ Generator
- Category: NLP | Deep Learning | AI | Multimodal
- Project Type: Multilingual Educational Question Generation Pipeline
- GitHub Repository: https://github.com/Sujan-lab-cell/Question-Generation-from-Multilingual-Text-and-Speech
- Live Demo: Available via Contact (#contact)
- Description: An automated question-generation pipeline powered by sequence-to-sequence T5 transformers, Speech-to-Text (STT), translation modules, and Text-to-Speech (TTS) for generating questions from text and spoken audio inputs.
- Key Features & Results:
  - Generates syntactically and semantically coherent questions from context passages.
  - Supports voice input conversion (STT), multilingual text translation, and audio question rendering (TTS).
  - Deployed on interactive Streamlit dashboard interface.
- System Architecture: Input text or audio stream -> Speech-to-Text (STT) -> T5 transformer question generation (`valhalla/t5-base-qg-hl`) -> Language translation -> Text-to-Speech (TTS) export.
- Technologies: T5 Transformer, Hugging Face Transformers, Speech-to-Text (STT), Text-to-Speech (TTS), Streamlit, Python.

---

## 4. AI Human Face Generation (WGAN-GP)
- Category: GANs | Deep Learning | AI | Generative AI
- Project Type: Synthetic Image Synthesis & Generative Adversarial Network
- GitHub Repository: https://github.com/Sujan-lab-cell/Human_Face_Generator.git
- Live Demo: Available via Contact (#contact)
- Description: A generative AI project implementing Wasserstein GAN with Gradient Penalty (WGAN-GP) in TensorFlow to generate realistic synthetic human face images from a custom-curated dataset while preventing mode collapse.
- Key Metrics & Results:
  - Fréchet Inception Distance (FID): 60.816
  - Inception Score (IS): 1.522
  - Demonstrated stable training dynamics and smooth loss convergence using gradient penalty instead of weight clipping.
- System Architecture: Custom face dataset -> Generator network -> Critic network -> Gradient penalty computation (`tf.GradientTape`) -> Synthetic face output.
- Technologies: WGAN-GP, TensorFlow, Python, Deep Learning, Custom Datasets.

---

## 5. AI Invoice Data to JSON Parser
- Category: AI | NLP | Backend | Microservices
- Project Type: Production Document Parsing API & Internship Output
- GitHub Repository: https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git
- Live API Documentation / Demo: https://invoice-data-to-json.onrender.com/docs
- Description: A hybrid AI document extraction system that parses unstructured PDF, image, Excel, and CSV invoices and extracts key fields into standardized JSON format. Built during the ISIRI Technologies (AyusLab) internship.
- Key Metrics & Results:
  - Multi-format file ingestion (PDF, JPG/PNG scans, XLSX, CSV).
  - Tiered fallback architecture combining EasyOCR, regex rules, Pydantic schema validation, and LLM fallback parsing.
  - Fully containerized with Docker and deployed as a REST API microservice on Render with interactive Swagger docs.
- System Architecture: Document ingestion -> EasyOCR & regex preprocessing -> LLM fallback engine -> Pydantic validation -> FastAPI REST endpoint on Docker.
- Technologies: Python, EasyOCR, NLP, Regex, FastAPI, Pydantic, LLM Fallback Engine, Docker, Render.

---

## 6. Text Anomaly Detection — AI-Based Text Anomaly Detection System
- Category: AI | NLP | LLM | Agentic AI
- Project Type: Automated Text Pattern Analysis & Risk Assessment
- GitHub Repository: https://github.com/Sujan-lab-cell/text-anomaly-detection.git
- Live Demo: Available via Contact (#contact)
- Description: An intelligent text analysis system leveraging LangChain, LangGraph, and Large Language Models (LLMs) to scan text streams, detect suspicious or anomalous patterns, and output structured risk assessments.
- Key Features & Results:
  - Structured agent workflow created using LangChain and LangGraph.
  - Generates contextual explanations and qualitative risk scoring for anomalous text inputs.
- System Architecture: Text preprocessing -> LangChain / LangGraph execution graph -> LLM pattern analysis engine -> Structured explanation & risk score output.
- Technologies: Python, LangChain, LangGraph, LLMs, NLP, Anomaly Detection.

---

## 7. FlyRank — Search Performance Decline Prediction & SEO Prioritization
- Category: Machine Learning | Data Analytics | Ranking | Industry ML
- Project Type: Large-Scale Industry ML System & Internship Project
- Research Paper / Web URL: https://sujan-lab-cell.github.io/flyrank-ml-internship/
- GitHub Repository: https://github.com/Sujan-lab-cell/flyrank-ml-internship
- Live Demo / Project Site: https://sujan-lab-cell.github.io/flyrank-ml-internship/
- Description: Built and evaluated a machine-learning framework to prioritize webpages at risk of Google Search performance decline for human review. Analyzed an underlying search dataset scale of ~78.8M daily records, aggregated into 407,121 content pages across 70 clients, and focused the ML-CAP-01 capstone model on an eligible population of 16,513 content pages across 36 distinct clients.
- Key Metrics & Results:
  - Dataset Scale Levels: ~78.8M underlying daily search records → 407,121 aggregated content pages (70 clients) → 16,513 eligible modeling pages (36 clients).
  - Primary Capstone Result: Random Forest achieved Precision@50 of 0.444 compared with a baseline of 0.392, improving precision by +5.2 percentage points.
  - Precision@K Evaluation: Random Forest (P@10=0.460, P@20=0.430, P@50=0.444, P@100=0.448) vs Baseline (P@10=0.400, P@20=0.370, P@50=0.392, P@100=0.388).
  - Controlled Model Ranking (P@50): Random Forest (0.444), XGBoost (0.442), CatBoost (0.440), LightGBM (0.438), HistGradientBoosting (0.436), Logistic Regression (0.424), Decision Tree (0.324), Baseline (0.392).
  - Leakage-Free Validation: 5-fold client-grouped GroupKFold cross-validation with zero client overlap across folds (`[0, 0, 0, 0, 0]`) and deterministic tie-breaking.
- System Architecture: Search data ingestion -> Leakage-safe pre-May feature engineering -> 5-fold client-grouped GroupKFold validation -> Model benchmark evaluation -> Human-in-the-loop SEO review queue ("Where to look" -> "What to do").
- Technologies: Python, Pandas, DuckDB, NumPy, Scikit-learn, Random Forest, XGBoost, LightGBM, CatBoost, Matplotlib, Jupyter, Git, GitHub.

---

## 8. E-Commerce Sales Dashboard
- Category: Data Analytics | Business Intelligence
- Project Type: Business Performance & KPI Analytics Report
- GitHub Repository: https://github.com/Sujan-lab-cell/Power_Bi_lab_cell.git
- Live Demo: Available via Contact (#contact)
- Description: An interactive Power BI analytics dashboard designed for monitoring e-commerce sales metrics, customer purchasing patterns, seasonal trends, and executive KPIs.
- Key Metrics & Results:
  - Tracks 12 core business KPIs.
  - Built using Power Query for ETL and DAX for custom measures and analytical modeling.
- System Architecture: Raw sales data ingestion -> Power Query ETL -> DAX analytical modeling -> Interactive Power BI report.
- Technologies: Power BI, Power Query, DAX, Data Analytics, KPI Modeling.

---

## 9. Car & Pedestrian Detection
- Category: Computer Vision | Deep Learning
- Project Type: Urban Autonomous Driving Perception System
- GitHub Repository: https://github.com/Sujan-lab-cell/YOLO-Pedestrian-Car-Detection.git
- Live Demo: Available via Contact (#contact)
- Description: A real-time object detection model trained with YOLOv8 to identify and track cars and pedestrians in complex urban traffic video streams.
- Key Metrics & Results:
  - Precision: 0.777
  - Recall: 0.751
  - mAP@0.5: 0.769
- System Architecture: Roboflow annotated dataset -> YOLOv8 model training -> Validation evaluation -> Real-time video inference.
- Technologies: YOLOv8, OpenCV, Roboflow, Python, Computer Vision.

---

## 10. Banking Management System
- Category: Java | DBMS | Desktop Software
- Project Type: Relational Database Application
- GitHub Repository: https://github.com/Sujan-lab-cell/Banking-Management--System-Java-based-DBMS-project.git
- Live Demo: Available via Contact (#contact)
- Description: A Java desktop application built with Swing/AWT GUI and MySQL relational database to manage core banking operations including account opening, user authentication, deposit, withdrawal, PIN changes, and transaction audit trails.
- Key Features & Results:
  - Full CRUD operations with thread-safe MySQL transaction execution.
  - Relational integrity enforcement for user account ledgers and transaction history.
- System Architecture: Java Swing/AWT desktop interface -> JDBC connector layer -> MySQL relational database engine.
- Technologies: Java, Swing, AWT, MySQL, SQL, Database Management Systems (DBMS).
