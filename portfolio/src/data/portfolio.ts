export const portfolioData = {
  name: "Sujan K S",
  title: "AI/ML Engineer | Computer Vision | NLP | Robotics",
  tagline:
    "Building intelligent systems using AI, Computer Vision, Deep Learning, and NLP — while exploring ROS2, robotics, and reinforcement learning to solve real-world problems.",

  email: "sujankswork@gmail.com",
  phone: "+91-9108262847",
  location: "Mangalore, India",
  social: {
    github: "https://github.com/Sujan-lab-cell",
    linkedin: "https://www.linkedin.com/in/sujan-k-s-a41261321/",
    kaggle: "https://www.kaggle.com/sujanksgowdas",
  },
  stats: [
    { label: "Projects Built", value: "10+", detail: "AI, CV, NLP, ML & Research" },
    { label: "Tools & Technologies", value: "30+", detail: "AI/ML, CV, NLP, Robotics & Backend" },
    { label: "Credentials", value: "15+", detail: "Awards, Courses & Certifications" },
    { label: "Featured Repositories", value: "10+", detail: "Projects & research" },
  ],
  about: {
    education: {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "N.M.A.M. Institute of Technology",
      years: "2023-2027",
      cgpa: "8.56",
    },
    careerObjective:
      "AI/ML enthusiast with hands-on experience in Computer Vision and NLP, skilled in Python and deep learning frameworks, focused on building scalable AI solutions.",
    currentFocus: ["Deep Learning", "Computer Vision", "ROS 2 (Robotic OS 2)", "Automation Systems", "Reinforcement Learning", "LLM Applications", "NLP Systems", "MLOps"],
    journey: [
      { year: "2023", title: "Started AIML Degree", text: "Built the academic base in programming, mathematics, and core CS." },
      { year: "2024", title: "Built ML Projects", text: "Shipped prediction, analytics, and early computer vision systems." },
      { year: "2025", title: "GeoSentinel & SmartQ", text: "Focused on impact-driven CV, ROS 2, reinforcement learning, and multilingual NLP." },
      { year: "Future", title: "Production AI Systems", text: "Aiming at robust LLM, robotics automation, MLOps, and applied research workflows." },
    ],
  },
  skills: [
    {
      group: "Programming",
      icon: "Code2",
      description: "Core languages for algorithm implementation and system development",
      items: ["Python", "C++", "C", "Java", "SQL"],
    },
    {
      group: "AI / Machine Learning",
      icon: "BrainCircuit",
      description: "Deep learning, generative models, and intelligent agent architectures",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Generative Adversarial Networks (GANs)",
        "WGAN (Wasserstein GAN)",
        "NLP",
        "Transformers",
        "LLMs",
        "RAG",
        "Reinforcement Learning",
      ],
    },
    {
      group: "Computer Vision",
      icon: "Eye",
      description: "Real-time object detection, segmentation, and visual processing models",
      items: ["Computer Vision", "Object Detection", "Image Classification", "Image Segmentation", "Image Processing", "CNNs", "Transfer Learning", "Model Optimization", "YOLO", "OpenCV"],
    },
    {
      group: "Speech / Multimodal AI",
      icon: "Mic",
      description: "Audio processing, speech synthesis, and cross-modal translation",
      items: ["Speech Processing", "Text-to-Speech", "Multilingual AI"],
    },
    {
      group: "Data Science",
      icon: "BarChart3",
      description: "Exploratory data analysis, statistical visualization, and feature engineering",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Power BI"],
    },
    {
      group: "Frameworks / Libraries",
      icon: "Boxes",
      description: "Deep learning libraries, neural network APIs, and detection toolkits",
      items: ["TensorFlow", "Keras", "PyTorch", "Transformers", "OpenCV", "YOLOv8"],
    },
    {
      group: "Backend / APIs / Deployment",
      icon: "Server",
      description: "API microservices, containerization, and cloud deployment pipelines",
      items: ["FastAPI", "REST APIs", "Docker", "Cloud Deployment", "Render"],
    },
    {
      group: "Databases",
      icon: "Database",
      description: "Relational, document, vector, and cloud database engines for application data",
      items: ["MongoDB", "Supabase", "pgvector", "MySQL", "SQLite"],
    },
    {
      group: "Robotics & Automation",
      icon: "Bot",
      description: "ROS2 communication nodes, sensor fusion, and autonomous systems",
      items: ["ROS2", "Robotics", "Automation", "IMU", "LDR", "IoT"],
    },
    {
      group: "Tools / Platforms",
      icon: "Wrench",
      description: "Developer tooling, model training platforms, and BI dashboards",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Kaggle", "Roboflow", "Streamlit", "Power BI"],
    },
    {
      group: "CS Foundations",
      icon: "Cpu",
      description: "Core computer science principles, system architecture, and network theory",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
  ],
  projects: [
    {
      slug: "colorectal-polyp-temporal-validation",
      title: "Colorectal Polyp Temporal Validation",
      short: "Research-focused computer vision project investigating temporal validation of colorectal polyp detection across video/endoscopic frames, with the goal of developing a robust temporal evaluation pipeline for medical AI.",
      statusBadge: "Final Year Project • In Progress",
      statusMention: "Currently working on this project and preparing a research paper.",
      category: ["Computer Vision", "Deep Learning", "Medical AI", "Research"],
      tech: ["Computer Vision", "Deep Learning", "Object Detection", "Object Tracking", "Segmentation", "Temporal Validation"],
      metrics: ["Final Year Project", "In Progress", "Research Paper Prep"],
      github: "https://github.com/Sujan-lab-cell/Colrectal_Polyp_Temporal_validation.git",
      demo: "#contact",
      accent: "from-rose-500 to-indigo-500",
      architecture: [
        "Endoscopic video frame sequence",
        "Frame-level object detection & tracking",
        "Temporal consistency evaluation layer",
        "Temporal validation metrics pipeline",
      ],
      results: [
        "Currently actively working on this project and preparing a research paper.",
        "Developing a benchmark evaluation methodology for video-based temporal polyp validation.",
      ],
      challenges: [
        "Frame-to-frame temporal inconsistency in video inference",
        "Inter-frame motion artifacts in endoscopic camera streams",
        "Balancing spatial precision with temporal stability across frames",
      ],
      future: [
        "Completing research paper submission",
        "Comprehensive video benchmark evaluation",
        "Integration with real-time clinical video streams",
      ],
    },
    {
      slug: "geosentinel",
      title: "GeoSentinel — AI Landslide Detection System",
      short: "YOLOv8 segmentation system for terrain monitoring, risk classification, and real-time visual alerts.",
      category: ["AI", "Computer Vision", "Deep Learning"],
      tech: ["YOLOv8 Segmentation", "Python", "OpenCV", "Streamlit", "Risk Models"],
      metrics: ["mAP@0.50: 0.731", "Real-time dashboard", "Risk classification"],
      github: "https://github.com/Sujan-lab-cell/GeoSentinel-Landslide-Detection-System",
      demo: "#contact",
      accent: "from-cyan-400 to-emerald-300",
      architecture: ["Image stream", "YOLOv8 segmentation", "Risk scoring", "Monitoring dashboard", "Alert layer"],
      results: ["Detected landslide-prone regions with mAP of 0.731.", "Designed dashboard workflow for real-time inspection."],
      challenges: ["Terrain variability", "Small object boundaries", "Balancing precision with fast inference"],
      future: ["Satellite data fusion", "Edge deployment", "Weather-aware forecasting"],
    },
    {
      slug: "smartq-generator",
      title: "SmartQ Generator",
      short: "Multilingual NLP + T5 question-generation system with speech-to-text, translation, and text-to-speech.",
      category: ["NLP", "Deep Learning", "AI"],
      tech: ["T5 Transformer", "Hugging Face", "Streamlit", "STT", "TTS"],
      metrics: ["Multilingual NLP", "Speech pipeline", "Streamlit deployed"],
      github: "https://github.com/Sujan-lab-cell/Question-Generation-from-Multilingual-Text-and-Speech",
      demo: "#contact",
      accent: "from-sky-400 to-violet-400",
      architecture: ["Input text/audio", "Speech-to-text", "T5 question generation", "Translation", "TTS/export"],
      results: ["Generated educational questions from text and speech inputs.", "Supported translation and audio output workflows."],
      challenges: ["Maintaining question quality across languages", "Coordinating multiple NLP services"],
      future: ["Teacher review dashboard", "Question difficulty scoring", "LMS integrations"],
    },
    {
      slug: "ai-face-generation",
      title: "AI Human Face Generation",
      short: "WGAN-GP model trained in TensorFlow to generate realistic human face samples from a custom dataset.",
      category: ["GANs", "Deep Learning", "AI"],
      tech: ["WGAN-GP", "TensorFlow", "Python", "GAN Architecture", "Custom Dataset"],
      metrics: ["FID: 60.816", "Inception Score: 1.522", "Stable training"],
      github: "https://github.com/Sujan-lab-cell/Human_Face_Generator.git",
      demo: "#contact",
      accent: "from-fuchsia-400 to-rose-300",
      architecture: ["Custom dataset", "Generator", "Critic", "Gradient penalty", "Generated samples"],
      results: ["Reduced training instability using WGAN-GP.", "Validated outputs with loss curves and generative metrics."],
      challenges: ["Mode collapse prevention", "Dataset quality", "Hyperparameter sensitivity"],
      future: ["Higher resolution synthesis", "FID improvement", "Conditional generation"],
    },
    {
      slug: "invoice-data-to-json-parser",
      title: "AI-Based Invoice Data to JSON Parser",
      short: "Hybrid AI-based invoice parsing system that extracts structured information from PDF, image, Excel, and CSV invoices and converts it into standardized JSON.",
      category: ["AI", "NLP", "Backend"],
      tech: ["Python", "EasyOCR", "NLP", "Regex", "FastAPI", "Pydantic", "LLM", "Docker"],
      metrics: ["Multi-format Parsing", "FastAPI & Docker", "Structured JSON"],
      github: "https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git",
      demo: "https://invoice-data-to-json.onrender.com/docs",
      accent: "from-emerald-400 to-teal-300",
      architecture: [
        "Multi-format document ingestion (PDF, Image, Excel, CSV)",
        "OCR, regex, and NLP preprocessing",
        "LLM fallback parsing engine",
        "Pydantic schema validation & error checks",
        "FastAPI REST endpoint & Docker container",
      ],
      results: [
        "Standardized key field extraction into structured JSON format.",
        "Deployed containerized REST API with interactive Swagger documentation.",
      ],
      challenges: [
        "Handling layout variations across different invoice vendors",
        "Noisy OCR text extraction on low-resolution scans",
        "Ensuring schema compliance across multi-line items",
      ],
      future: [
        "Async background job queue",
        "Extraction confidence scoring",
        "Template-less field mapping customization",
      ],
    },
    {
      slug: "ecommerce-dashboard",
      title: "E-Commerce Sales Dashboard",
      short: "Power BI dashboard for sales performance, customer trends, KPI tracking, and business insights.",
      category: ["Data Analytics", "Business Intelligence"],
      tech: ["Power BI", "Power Query", "DAX", "KPI Tracking"],
      metrics: ["12 KPIs", "Sales trends", "Executive views"],
      github: "https://github.com/Sujan-lab-cell/Power_Bi_lab_cell.git",
      demo: "#contact",
      accent: "from-amber-300 to-lime-300",
      architecture: ["Raw sales data", "Power Query", "DAX measures", "KPI model", "Interactive report"],
      results: ["Surfaced top products and seasonal trends.", "Created recruiter-friendly analytics storytelling."],
      challenges: ["Data cleaning", "Choosing actionable KPIs", "Visual hierarchy"],
      future: ["Forecasting", "Cohort analytics", "Automated refresh"],
    },
    {
      slug: "car-pedestrian-detection",
      title: "Car & Pedestrian Detection",
      short: "Real-time YOLOv8 object detection for cars and pedestrians in urban scenes.",
      category: ["Computer Vision", "Deep Learning"],
      tech: ["YOLOv8", "OpenCV", "Roboflow", "Python"],
      metrics: ["Precision: 0.777", "Recall: 0.751", "mAP@0.5: 0.769"],
      github: "https://github.com/Sujan-lab-cell/YOLO-Pedestrian-Car-Detection.git",
      demo: "#contact",
      accent: "from-blue-400 to-cyan-300",
      architecture: ["Annotated dataset", "YOLOv8 training", "Validation", "Video inference", "Metrics review"],
      results: ["Reached mAP@0.5 of 0.769.", "Balanced car and pedestrian detection under real-time constraints."],
      challenges: ["Occlusion", "Lighting variation", "Class imbalance"],
      future: ["Tracking IDs", "Edge inference", "Safety analytics"],
    },
    {
      slug: "banking-management-system",
      title: "Banking Management System",
      short: "Java-based banking management system using Swing/AWT and MySQL, supporting login, account creation, deposits, withdrawals, PIN changes, and transaction history.",
      category: ["Java", "DBMS"],
      tech: ["Java", "Swing", "AWT", "MySQL", "SQL", "DBMS"],
      metrics: ["Swing/AWT GUI", "MySQL Database", "Transactions Engine"],
      github: "https://github.com/Sujan-lab-cell/Banking-Management--System-Java-based-DBMS-project.git",
      demo: "#contact",
      accent: "from-blue-500 to-indigo-400",
      architecture: [
        "Java Swing/AWT Desktop GUI",
        "JDBC Database Connector",
        "MySQL Relational Database Schema",
        "Transaction Execution & Audit Engine",
      ],
      results: [
        "Implemented secure account creation, deposit, withdrawal, and PIN change workflows.",
        "Maintained relational integrity for user transaction history records.",
      ],
      challenges: [
        "GUI state management across multiple Swing frames",
        "Ensuring thread-safe database updates",
        "Rigorous SQL input validation and error recovery",
      ],
      future: [
        "Web-based dashboard migration",
        "REST API service layer",
        "Encrypted audit logging",
      ],
    },
    {
      slug: "flyrank-search-performance-prediction",
      title: "FlyRank — Search Performance Decline Prediction & SEO Prioritization",
      short: "ML-based decision-support system for identifying webpages with potential search-performance decline and prioritizing SEO/content reviews using historical search-performance signals.",
      projectType: "Industry ML Project",
      paperUrl: "https://sujan-lab-cell.github.io/flyrank-ml-internship/",
      category: ["Machine Learning", "Data Analytics", "Ranking"],
      tech: [
        "Python",
        "Pandas",
        "DuckDB",
        "NumPy",
        "Scikit-learn",
        "Random Forest",
        "XGBoost",
        "LightGBM",
        "CatBoost",
        "Matplotlib",
        "Jupyter",
        "Git/GitHub",
      ],
      metrics: [
        "~78.8M Daily Search Records",
        "Precision@50: 0.444 (vs 0.392 baseline)",
        "Client-Grouped 5-Fold CV",
        "Human-in-the-Loop SEO Workflow",
      ],
      github: "https://github.com/Sujan-lab-cell/flyrank-ml-internship",
      demo: "https://sujan-lab-cell.github.io/flyrank-ml-internship/",
      accent: "from-cyan-400 to-blue-500",
      architecture: [
        "Large-scale search-performance data processing (~78.8M records)",
        "Target-leakage detection & feature engineering",
        "Client-grouped 5-fold cross-validation scheme",
        "Model family evaluation (Logistic Regression, Random Forest, XGBoost, LightGBM, CatBoost)",
        "Human-in-the-loop content prioritization action workflow",
      ],
      results: [
        "Random Forest achieved Precision@50 of 0.444 compared with a 0.392 baseline (+5.2 percentage points).",
        "Developed client-grouped cross-validation to prevent data leakage across domain clients.",
      ],
      challenges: [
        "Handling data leakage across client-grouped domains",
        "Imbalanced search decline target distribution",
        "Evaluating ranking precision vs standard classification metrics",
      ],
      future: [
        "Time-series trend forecasting integration",
        "Automated content refresh trigger scoring",
        "Multi-search engine ranking alignment",
      ],
    },
    {
      slug: "text-anomaly-detection",
      title: "AI-Based Text Anomaly Detection System",
      short: "System that uses LangChain, LangGraph, and LLMs to analyze text and detect unusual patterns that may indicate fraudulent or suspicious activities, providing structured risk assessments.",
      category: ["AI", "NLP", "LLM"],
      tech: ["Python", "LangChain", "LangGraph", "LLMs", "NLP", "Anomaly Detection"],
      metrics: ["LangChain & LangGraph", "LLM Risk Assessment", "Pattern Detection"],
      github: "https://github.com/Sujan-lab-cell/text-anomaly-detection.git",
      demo: "#contact",
      accent: "from-violet-500 to-purple-400",
      architecture: [
        "Text input preprocessing & normalization",
        "LangChain / LangGraph agent execution graph",
        "LLM pattern analysis & anomaly detection engine",
        "Structured explanation & risk scoring output",
      ],
      results: [
        "Engineered an automated agent workflow using LangChain and LangGraph.",
        "Generated contextual risk assessments and explanations for suspicious text patterns.",
      ],
      challenges: [
        "Designing deterministic agent execution graphs with LangGraph",
        "Context window limits and prompt structuring for subtle text anomalies",
        "Minimizing false positive detections in domain-specific text",
      ],
      future: [
        "Real-time streaming text analysis",
        "Custom vector embedding search integration",
        "Multi-modal anomaly detection extension",
      ],
    },
  ],
  experiences: [
    {
      company: "FlyRank AI",
      role: "Machine Learning Intern",
      date: "01 July 2026 – 09 September 2026",
      paperUrl: "https://sujan-lab-cell.github.io/flyrank-ml-internship/",
      github: "https://github.com/Sujan-lab-cell/flyrank-ml-internship.git",
      githubInfo: "https://github.com/Sujan-lab-cell/FlyRank_ai_info.git",
      points: [
        "Worked on a machine learning system for Google Search performance and webpage prioritization.",
        "Performed data analysis, feature engineering, data validation, and target-leakage detection on large-scale search data.",
        "Compared ML models including Random Forest, XGBoost, LightGBM, CatBoost, and Logistic Regression.",
        "Used 5-fold client-grouped validation to improve evaluation reliability.",
        "Achieved Precision@50 of 0.444 compared with a 0.392 baseline (+5.2 percentage points).",
        "Built a human-in-the-loop content prioritization workflow for SEO review.",
      ],
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "CatBoost",
        "DuckDB",
        "Matplotlib",
        "Git",
        "GitHub",
      ],
    },
    {
      company: "ISIRI Technologies Pvt. Ltd. (AyusLab)",
      role: "AI/ML Intern",
      date: "May 2026 – Jul 2026",
      location: "Mangaluru, Karnataka",
      github: "https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git",
      points: [
        "Developed a hybrid AI-based invoice parsing system to extract structured data from PDF, image, Excel, and CSV invoices.",
        "Implemented OCR, NLP preprocessing, regex/rule-based extraction, validation, and LLM-based fallback to improve extraction reliability.",
        "Extracted key invoice fields including supplier/buyer details, invoice information, line items, pricing, GST/tax, and totals, and converted them into structured JSON.",
        "Built FastAPI REST APIs with Pydantic validation and deployed the backend using Docker on Render.",
        "Integrated validation and quality checks to identify missing or inconsistent critical invoice information before generating the final output.",
      ],
      tech: [
        "OCR",
        "NLP Preprocessing",
        "Regex",
        "Rule-based Extraction",
        "Validation",
        "LLM Fallback",
        "FastAPI",
        "Pydantic",
        "Docker",
        "Render",
        "Structured JSON",
      ],
    },
    {
      company: "EdiGlobe",
      role: "Machine Learning Intern",
      date: "July 2025 – August 2025",
      project: "Heart Disease Detection using Machine Learning",
      points: [
        "Worked on a machine learning project for heart disease risk prediction using structured/tabular health-related data.",
        "Performed basic data preprocessing, exploratory data analysis, feature preparation, and model training.",
        "Experimented with classification models and evaluated their predictions using standard classification metrics.",
        "Worked with Python and common machine learning/data analysis libraries.",
        "Gained practical experience in the end-to-end machine learning workflow, from data preprocessing to model evaluation.",
      ],
      tech: ["Python", "Machine Learning", "Classification Models", "EDA", "Scikit-learn", "Pandas"],
    },
  ],
  experience: {
    company: "FlyRank AI",
    role: "Machine Learning Intern",
    date: "01 July 2026 – 09 September 2026",
    paperUrl: "https://sujan-lab-cell.github.io/flyrank-ml-internship/",
    github: "https://github.com/Sujan-lab-cell/flyrank-ml-internship.git",
    githubInfo: "https://github.com/Sujan-lab-cell/FlyRank_ai_info.git",
    points: [
      "Worked on a machine learning system for Google Search performance and webpage prioritization.",
      "Performed data analysis, feature engineering, data validation, and target-leakage detection on large-scale search data.",
      "Compared ML models including Random Forest, XGBoost, LightGBM, CatBoost, and Logistic Regression.",
      "Used 5-fold client-grouped validation to improve evaluation reliability.",
      "Achieved Precision@50 of 0.444 compared with a 0.392 baseline (+5.2 percentage points).",
      "Built a human-in-the-loop content prioritization workflow for SEO review.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "DuckDB",
      "Matplotlib",
      "Git",
      "GitHub",
    ],
  },
  achievements: [
    {
      id: "intel-ai-future-workforce",
      title: "Intel AI for Future Workforce – AI for Agriculture",
      issuer: "Intel / SWAYAM Plus, Ministry of Education, India",
      category: "courses",
      categoryLabel: "Courses & Learning",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "June 29 - July 20, 2026",
      note: "Specialized course on computer vision and AI applications in precision agriculture and smart farming.",
      image: "/certificates/Intel_Certificate.jpeg",
    },
    {
      id: "ibm-getting-started-ai",
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      category: "courses",
      categoryLabel: "Courses & Learning",
      credentialType: "Completion Certificate",
      typeBadge: "Completion",
      date: "May 5, 2026",
      note: "Foundational AI principles, machine learning concepts, and responsible AI implementation.",
      image: "/certificates/IBM_Certificate.jpeg",
      credlyUrl: "https://www.credly.com/badges/e0d435d4-c0c4-4372-a937-3cd49f794be0",
    },
    {
      id: "rebus-rumble-winner",
      title: "Rebus Rumble - Decode the Puzzle Quiz Winner Award",
      issuer: "Srinivas University / Quad Quest 2k25",
      category: "competitions",
      categoryLabel: "Hackathons & Competitions",
      credentialType: "Winner Award",
      typeBadge: "Winner Award",
      date: "March 3, 2025",
      note: "Achieved Top scores and Champion Winner Award in the Rebus Rumble Decode the Puzzle Quiz during Quad Quest 2k25 International Level SDP Program.",
      image: "/certificates/SIT_COMPITATION.jpeg",
    },
    {
      id: "football-runners-up",
      title: "Runners Up in Football - AI Cup",
      issuer: "NMAM Institute of Technology, Nitte",
      category: "activities",
      categoryLabel: "Leadership & Activities",
      credentialType: "Runners Up Award",
      typeBadge: "Runners Up",
      date: "2024",
      note: "Secured Runners-up position in Football during the AI Cup tournament at NMAMIT Nitte.",
      image: "/certificates/SUJAN K S.png",
    },
    {
      id: "scouts-rajya-puraskar",
      title: "Scouts Rajya Puraskar Award",
      issuer: "Scouts Organization",
      category: "awards",
      categoryLabel: "Awards & Recognition",
      credentialType: "State Level Award",
      typeBadge: "State Level Award",
      date: "2022",
      note: "State-level governor award recognizing leadership, service, discipline, and outdoor survival skills.",
      image: null,
    },
    {
      id: "codefury-hackathon",
      title: "CodeFury 8.0 - National Level Hackathon",
      issuer: "IEEE UVCE Computer Society / ARTPARK @ IISc",
      category: "competitions",
      categoryLabel: "Hackathons & Competitions",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "August 22-24, 2025",
      note: "Participated in CodeFury 8.0, the 8th Annual National-Level Hackathon powered by ARTPARK, I-Hub @ IISc.",
      image: "/certificates/HACKTON_PARTICIPATION.jpeg",
    },
    {
      id: "quiz-o-mania",
      title: "Quiz-o-mania Tech Quiz",
      issuer: "ACCESS, Dept of CCE, NMAMIT",
      category: "competitions",
      categoryLabel: "Hackathons & Competitions",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "February 1, 2025",
      note: "Participated in Quiz-o-mania tech quiz organized by ACCESS, Department of Computer & Communication Engineering.",
      image: "/certificates/ACCESS_PARTICIPATION.jpeg",
    },
    {
      id: "ainnovation-applied-ai",
      title: "AINNOVATION 2025: Applied AI Learning Challenge",
      issuer: "Microsoft",
      category: "courses",
      categoryLabel: "Courses & Learning",
      credentialType: "Completion Certificate",
      typeBadge: "Completion",
      date: "September 25, 2025",
      note: "Successfully completed the Microsoft AINNOVATION 2025 Applied AI Learning Challenge.",
      image: "/certificates/AINNOVATION_APPLIED_AI.jpeg",
    },
    {
      id: "ainnovation-azure",
      title: "AINNOVATION 2025: Microsoft Azure Learning Challenge",
      issuer: "Microsoft",
      category: "courses",
      categoryLabel: "Courses & Learning",
      credentialType: "Completion Certificate",
      typeBadge: "Completion",
      date: "September 23, 2025",
      note: "Successfully completed the Microsoft AINNOVATION 2025 Azure Learning Challenge.",
      image: "/certificates/AINNOVATION_AZUR.jpeg",
    },
    {
      id: "simplilearn-machine-learning",
      title: "Machine Learning Online Course",
      issuer: "Simplilearn SkillUp",
      category: "courses",
      categoryLabel: "Courses & Learning",
      credentialType: "Completion Certificate",
      typeBadge: "Completion",
      date: "November 20, 2024",
      note: "Professional course covering core ML algorithms, model building, and data science workflows. Certificate code: 7579207.",
      image: "/certificates/Simply_learn_ml.jpeg",
    },
    {
      id: "kaggle-pandas",
      title: "Kaggle Pandas Data Science",
      issuer: "Kaggle Learn",
      category: "courses",
      categoryLabel: "Courses & Learning",
      credentialType: "Completion Certificate",
      typeBadge: "Completion",
      date: "June 9, 2026",
      note: "Data manipulation, indexing, grouping, sorting, and exploratory data analysis using Pandas.",
      image: "/certificates/kagel_Pandas.jpeg",
    },
    {
      id: "agentic-ai-workshop",
      title: "Agentic AI Hands-on Workshop",
      issuer: "TASC-AIML, NMAM Institute of Technology, Nitte",
      category: "workshops",
      categoryLabel: "Workshops",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "October 11, 2025",
      note: "Hands-on workshop on Agentic AI frameworks, autonomous workflows, and LLM agent architectures.",
      image: "/certificates/AGENTIC_AI_WORKSHOP.jpeg",
    },
    {
      id: "isiri-ayuscare-internship",
      title: "Machine Learning & AI Internship",
      issuer: "ISIRI Technologies Pvt Ltd / AyusCare",
      category: "professional",
      categoryLabel: "Internships & Professional",
      credentialType: "Internship Certificate",
      typeBadge: "Internship",
      date: "June 15 - August 10, 2026",
      note: "Worked on the AI-Based Invoice Parser project under executive industry guidance.",
      image: "/certificates/AYUSHCARE_INTERNSHIP.jpeg",
    },
    {
      id: "ediglobe-internship",
      title: "Machine Learning Internship",
      issuer: "EdiGlobe / Zhagaram Technologies",
      category: "professional",
      categoryLabel: "Internships & Professional",
      credentialType: "Internship Certificate",
      typeBadge: "Internship",
      date: "July 1 - August 30, 2025",
      note: "Completed 2-month Machine Learning domain internship demonstrating strong problem-solving and work ethic.",
      image: "/certificates/EDIGLOBE_INTERNSHIP.jpeg",
    },
    {
      id: "flyrank-internship",
      title: "FlyRank Machine Learning Internship Certificate",
      issuer: "FlyRank.ai / FlyRank AI",
      category: "professional",
      categoryLabel: "Internships & Professional",
      credentialType: "Internship Certificate",
      typeBadge: "Internship",
      date: "July 1 - September 9, 2026",
      note: "Completion certificate for Machine Learning Internship Program at FlyRank.ai, covering 12 practical ML assignments and the Google Search Ranking & Discoverability Capstone.",
      image: "/certificates/flyrank-certificate-of-completion-machine-learning-60554af1-3e15-4221-a654-8404e0c1e8ef_page-0001.jpg",
    },
    {
      id: "flyrank-lor",
      title: "FlyRank Letter of Recommendation",
      issuer: "FlyRank.ai / FlyRank AI",
      category: "professional",
      categoryLabel: "Internships & Professional",
      credentialType: "Letter of Recommendation",
      typeBadge: "LOR",
      date: "September 9, 2026",
      note: "Official recommendation letter highlighting Machine Learning Engineering contributions, search performance data analytics, and capstone research paper.",
      image: "/certificates/flyrank-recommendation-letter-60554af1-3e15-4221-a654-8404e0c1e8ef_page-0001.jpg",
    },
    {
      id: "ediglobe-project-completion",
      title: "One Minor & One Major ML Project Completion",
      issuer: "EdiGlobe / Ministry of MSME, Govt of India",
      category: "projects",
      categoryLabel: "Project Credentials",
      credentialType: "Project Completion Certificate",
      typeBadge: "Project Completion",
      date: "October 30, 2025",
      note: "Successfully completed One Minor & One Major Project under the Machine Learning program.",
      image: "/certificates/Ed_Course_Complication.jpeg",
    },
    {
      id: "scouts-jamboree",
      title: "Scouts International Jamboree & Jamborette",
      issuer: "Scouts & Guides Movement",
      category: "activities",
      categoryLabel: "Leadership & Activities",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "2022",
      note: "Participated in regional and state-level Scouts Jamboree & Jamborette camps.",
      image: null,
    },
    {
      id: "sherlock-ed-incridea",
      title: "Sherlock-ed - Incridea '26",
      issuer: "NMAM Institute of Technology, Nitte",
      category: "activities",
      categoryLabel: "Leadership & Activities",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "March 5-8, 2026",
      note: "Participated in Sherlock-ed during the Incridea '26 national level techno-cultural fest.",
      image: "/certificates/image.png",
    },
    {
      id: "roadies-incridea",
      title: "Roadies - Incridea '25",
      issuer: "NMAM Institute of Technology, Nitte",
      category: "activities",
      categoryLabel: "Leadership & Activities",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "February 27 - March 1, 2025",
      note: "Participated in Roadies during the Incridea '25 national level techno-cultural fest.",
      image: "/certificates/image copy.png",
    },
    {
      id: "lazzarena-incridea",
      title: "Lazzarena - Incridea '24",
      issuer: "NMAM Institute of Technology, Nitte",
      category: "activities",
      categoryLabel: "Leadership & Activities",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "February 22-24, 2024",
      note: "Participated in Lazzarena during the Incridea '24 national level techno-cultural fest.",
      image: "/certificates/image copy 2.png",
    },
    {
      id: "tulu-tulipu-incridea",
      title: "Tulu Tulipu - Incridea '24",
      issuer: "NMAM Institute of Technology, Nitte",
      category: "activities",
      categoryLabel: "Leadership & Activities",
      credentialType: "Participation Certificate",
      typeBadge: "Participation",
      date: "February 22-24, 2024",
      note: "Participated in Tulu Tulipu during the Incridea '24 national level techno-cultural fest.",
      image: "/certificates/image copy 3.png",
    },
  ],
  blog: [
    {
      slug: "temporal-validation-colorectal-polyp-detection",
      title: "Temporal Validation for AI-Based Colorectal Polyp Detection",
      category: "Medical AI",
      tags: ["Temporal Validation", "Detection", "Tracking", "Segmentation"],
      readTime: "10 min read",
      excerpt: "Evaluating object detection and tracking consistency across continuous endoscopic video sequences. (Ongoing B.Tech final-year research project).",
      isFeatured: true,
      statusNotice: "Ongoing Final-Year Research Project • Currently preparing technical research paper",
      projectSlug: "colorectal-polyp-temporal-validation",
      githubUrl: "https://github.com/Sujan-lab-cell/Colrectal_Polyp_Temporal_validation.git",
      introduction: "Most deep learning models evaluated on medical imaging focus on single-frame static metrics such as per-frame precision, recall, or mAP. However, in real-world colonoscopy procedures, video streams introduce inter-frame camera motion, specular highlights, and momentary occlusions. In my ongoing B.Tech final-year research project, I am investigating temporal validation strategies for AI-based colorectal polyp detection and tracking across continuous video sequences.",
      sections: [
        {
          heading: "1. The Limitation of Static Per-Frame Evaluation",
          content: "Evaluating video polyp detection on static frame samples treats every frame as an independent image. A detector might achieve high per-frame accuracy on benchmark datasets while flickering on and off every 3 frames during real-time video, creating severe distraction and clinical fatigue for endoscopists. Real clinical deployment requires evaluating temporal stability across consecutive video frames."
        },
        {
          heading: "2. Framework for Inter-Frame Consistency & Temporal Metrics",
          content: "Our research framework evaluates spatial detection and segmentation networks alongside inter-frame temporal consistency. By tracking bounding boxes across sequential frame queues, we measure persistence, trajectory smooth loss, and false-positive jitter under continuous camera movement.",
          codeSnippet: {
            language: "python",
            caption: "Evaluating inter-frame bounding box tracking continuity",
            code: `import numpy as np

def compute_temporal_stability(frame_detections, IoU_threshold=0.5):
    """
    Evaluates tracking continuity across consecutive endoscopic video frames.
    """
    stable_tracks = 0
    total_sequences = len(frame_detections) - 1
    
    for t in range(total_sequences):
        boxes_t = frame_detections[t]
        boxes_t1 = frame_detections[t+1]
        
        # Calculate overlap IoU across frame t and frame t+1
        iou_matrix = calculate_iou(boxes_t, boxes_t1)
        if np.max(iou_matrix) >= IoU_threshold:
            stable_tracks += 1
            
    stability_score = stable_tracks / max(1, total_sequences)
    return stability_score`
          }
        },
        {
          heading: "3. Ongoing Progress & Paper Preparation",
          content: "Please note: This work represents active, ongoing research for my final-year undergraduate project. We are currently systematically benchmark-testing video tracking sequences, collecting empirical performance logs, and drafting our research paper for eventual peer review."
        }
      ],
      takeaways: [
        "Static single-frame metrics alone do not reflect real-time clinical video utility.",
        "Temporal validation measures track continuity, inter-frame jitter, and detection persistence over time.",
        "Ongoing research aims to provide clearer empirical benchmarks for video-based medical AI."
      ]
    },
    {
      slug: "ai-landslide-detection-yolov8",
      title: "Building an AI Landslide Detection System with YOLOv8 Segmentation",
      category: "Computer Vision",
      tags: ["YOLOv8", "Segmentation", "Computer Vision"],
      readTime: "7 min read",
      excerpt: "A technical case study on using YOLOv8 instance segmentation for automatic landslide boundary detection, risk classification, and real-time hazard monitoring.",
      projectSlug: "geosentinel",
      githubUrl: "https://github.com/Sujan-lab-cell/GeoSentinel-Landslide-Detection-System",
      introduction: "Landslides pose severe economic and environmental threats in mountainous and slope-prone regions. In the GeoSentinel project, I designed a real-time computer vision system that goes beyond bounding-box detection to perform fine-grained pixel-wise instance segmentation of landslide-affected terrain using YOLOv8.",
      sections: [
        {
          heading: "1. Why Instance Segmentation Over Bounding Boxes?",
          content: "Standard bounding box object detection outputs rectangular coordinates around detected regions. For landslides, irregular terrain contours and jagged boundaries make bounding boxes noisy and inaccurate for hazard measurement. Instance segmentation (YOLOv8-seg) predicts a binary pixel mask for each detected region, giving true geometric land-area estimates."
        },
        {
          heading: "2. Dataset Preparation & Class Imbalance",
          content: "Aerial and satellite terrain imagery suffers from high variance in illumination, shadow artifacts, and seasonal vegetation changes. Using Roboflow and custom data augmentation (contrast scaling, color jitter, flip transforms), imagery was annotated with polygonal segmentation boundaries for landslide scarring versus intact vegetation."
        },
        {
          heading: "3. YOLOv8-seg Architecture & Training Pipeline",
          content: "YOLOv8-seg appends a prototype mask generation head onto the CSP-DarkNet backbone. Loss evaluation combines CIoU loss for box regression, binary cross-entropy for class prediction, and pixel-level binary loss for mask quality.",
          codeSnippet: {
            language: "python",
            caption: "Running YOLOv8 segmentation inference and mask extraction",
            code: `from ultralytics import YOLO
import cv2

# Load fine-tuned YOLOv8 segmentation model
model = YOLO('geosentinel_yolov8s_seg.pt')

# Run inference on terrain imagery stream
results = model.predict(source='terrain_image.jpg', conf=0.45, iou=0.50)

for result in results:
    if result.masks is not None:
        # Extract polygon segmentation coordinates
        masks = result.masks.xy  
        boxes = result.boxes
        print(f"Detected {len(masks)} landslide hazard zones.")`
          }
        },
        {
          heading: "4. Hazard Scoring & Real-Time Dashboard Integration",
          content: "Masks generated by the YOLOv8-seg model are passed into a downstream scoring module that calculates relative surface area ratio and assigns hazard severity levels (Low, Moderate, Critical). This feeds directly into an interactive Streamlit monitoring UI."
        }
      ],
      takeaways: [
        "Instance segmentation delivers spatial boundary clarity essential for terrain and geo-hazard applications.",
        "Data augmentation strategy directly impacted mask mAP@0.50 stability across varied lighting conditions.",
        "Deploying vision models requires lightweight post-processing to map pixel counts into actionable hazard scores."
      ]
    },
    {
      slug: "wgan-gp-human-face-generation",
      title: "What I Learned Building a WGAN-GP for Human Face Generation",
      category: "Generative AI",
      tags: ["WGAN-GP", "GANs", "TensorFlow", "FID"],
      readTime: "8 min read",
      excerpt: "Insights into training stability, Wasserstein loss, gradient penalty implementation in TensorFlow, and evaluating generative quality using FID and Inception Score.",
      projectSlug: "ai-face-generation",
      githubUrl: "https://github.com/Sujan-lab-cell/Human_Face_Generator.git",
      introduction: "Standard Deep Convolutional GANs (DCGANs) are notoriously difficult to train, frequently suffering from mode collapse and vanishing gradients caused by Jensen-Shannon divergence saturation. While working on synthetic human face generation in TensorFlow, I implemented Wasserstein GAN with Gradient Penalty (WGAN-GP) to achieve stable adversarial training dynamics.",
      sections: [
        {
          heading: "1. The Math Behind Wasserstein Distance & Gradient Penalty",
          content: "Vanilla GANs optimize Jensen-Shannon (JS) divergence, which suffers from vanishing gradients when generator and discriminator distributions do not overlap. WGAN uses the Earth Mover's (Wasserstein-1) distance. WGAN-GP replaces unstable weight clipping with a gradient penalty term enforced along random interpolations between real and generated samples."
        },
        {
          heading: "2. Custom TensorFlow Gradient Penalty Implementation",
          content: "Implementing WGAN-GP in TensorFlow requires custom training loops using tf.GradientTape to record generator and critic passes separately, calculate sample interpolations, and compute gradients of the critic with respect to the interpolated input.",
          codeSnippet: {
            language: "python",
            caption: "Custom TensorFlow Gradient Penalty implementation",
            code: `import tensorflow as tf

@tf.function
def gradient_penalty(critic, real_images, fake_images):
    batch_size = tf.shape(real_images)[0]
    alpha = tf.random.uniform([batch_size, 1, 1, 1], 0.0, 1.0)
    interpolated = real_images + alpha * (fake_images - real_images)
    
    with tf.GradientTape() as tape:
        tape.watch(interpolated)
        pred = critic(interpolated, training=True)
        
    grads = tape.gradient(pred, [interpolated])[0]
    norm = tf.sqrt(tf.reduce_sum(tf.square(grads), axis=[1, 2, 3]) + 1e-12)
    gp = tf.reduce_mean((norm - 1.0) ** 2)
    return gp`
          }
        },
        {
          heading: "3. Evaluating Generative Quality with FID & Inception Score",
          content: "Visual inspection alone is insufficient for evaluating GAN performance. Fréchet Inception Distance (FID) measures the distance between feature representations extracted from a pre-trained Inception-v3 network for real versus synthetic faces. Achieving an FID of ~60.8 on custom-curated face samples provided quantitative feedback during hyperparameter tuning."
        }
      ],
      takeaways: [
        "Gradient Penalty eliminates mode collapse and stabilizes loss curves across long training runs.",
        "Critic loss in WGAN correlates directly with visual image quality, unlike vanilla GAN discriminator loss.",
        "Quantitative metrics like FID are essential for objective model checkpoint selection."
      ]
    },
    {
      slug: "multilingual-question-generation-t5",
      title: "Building a Multilingual Question Generation Pipeline with T5",
      category: "NLP",
      tags: ["T5", "NLP", "Transformers", "TTS"],
      readTime: "6 min read",
      excerpt: "Architecture and engineering behind SmartQ: combining T5 transformers, Speech-to-Text (STT), multi-language translation, and Text-to-Speech (TTS) into a unified pipeline.",
      projectSlug: "smartq-generator",
      githubUrl: "https://github.com/Sujan-lab-cell/Question-Generation-from-Multilingual-Text-and-Speech",
      introduction: "Educational platforms and study tools often require automated question generation from diverse input modalities including multi-language text and spoken audio. In the SmartQ Generator project, I built a full NLP pipeline leveraging sequence-to-sequence T5 transformers, Speech-to-Text (STT), translation modules, and Text-to-Speech (TTS).",
      sections: [
        {
          heading: "1. Sequence-to-Sequence Modeling with T5",
          content: "The Text-to-Text Transfer Transformer (T5) frames every NLP task into a unified text-to-text format. For question generation, text context passages are formatted with prefix prompts (e.g., 'generate question: <context>'), enabling the transformer to predict syntactically and semantically coherent questions."
        },
        {
          heading: "2. Connecting Multimodal & Multilingual Components",
          content: "The pipeline integrates speech recognition for voice inputs, machine translation for multilingual source documents, T5 model inference for question synthesis, and TTS audio rendering for final interactive playback.",
          codeSnippet: {
            language: "python",
            caption: "Inference pipeline with Hugging Face T5 Transformer",
            code: `from transformers import T5ForConditionalGeneration, T5Tokenizer

tokenizer = T5Tokenizer.from_pretrained("valhalla/t5-base-qg-hl")
model = T5ForConditionalGeneration.from_pretrained("valhalla/t5-base-qg-hl")

text_input = "generate question: <hl> Deep learning <hl> models learn representations from complex data."
inputs = tokenizer(text_input, return_tensors="pt", max_length=512, truncation=True)

outputs = model.generate(
    input_ids=inputs.input_ids,
    max_length=64,
    num_beams=4,
    early_stopping=True
)
question = tokenizer.decode(outputs[0], skip_special_tokens=True)`
          }
        },
        {
          heading: "3. Engineering Challenges: Latency & Post-Processing",
          content: "Chaining STT, Translation, T5, and TTS can create multi-second latency bottlenecks. Optimizing model loading, utilizing PyTorch torch.no_grad(), and stripping duplicate or nonsensical question outputs improved end-to-end responsiveness."
        }
      ],
      takeaways: [
        "T5's unified prefix architecture allows versatile task fine-tuning for question generation.",
        "Modular NLP pipelines allow easy swapping of STT/TTS components without altering core generative transformer weights.",
        "Robust text normalization and quality heuristics are crucial to prevent grammatically invalid outputs."
      ]
    },
    {
      slug: "preventing-data-leakage-in-machine-learning",
      title: "Preventing Data Leakage in Machine Learning",
      category: "Machine Learning",
      tags: ["Data Leakage", "Cross Validation", "Random Forest"],
      readTime: "9 min read",
      excerpt: "Practical strategies for detecting and avoiding target leakage and client-level feature overlap in large-scale datasets, drawing from real-world ML experience on 78.8M search performance records.",
      projectSlug: "flyrank-search-performance-prediction",
      paperUrl: "https://sujan-lab-cell.github.io/flyrank-ml-internship/",
      introduction: "Data leakage is one of the most common yet deceptive pitfalls in real-world machine learning. While working on the FlyRank search-performance prediction system—analyzing over 78.8 million daily search-performance records—preventing temporal and client-level target leakage was crucial for building a trustworthy ranking and prediction pipeline.",
      sections: [
        {
          heading: "1. Understanding Sources of Data Leakage in Search Analytics",
          content: "Data leakage occurs when information from outside the training dataset (or future temporal window) unintentionally influences model training. In large search analytics pipelines, leakage typically manifests when rows are split randomly across train/test when multiple rows belong to the same client domain, allowing the model to memorize client-specific baselines rather than learning generalizable signals."
        },
        {
          heading: "2. Client-Grouped & Time-Based Cross-Validation",
          content: "To prevent client overlap, I implemented client-grouped cross-validation (GroupKFold / custom client splits), ensuring all daily records for a specific client domain were restricted exclusively to either the training fold or the validation fold.",
          codeSnippet: {
            language: "python",
            caption: "Client-Grouped Cross-Validation to prevent target leakage",
            code: `from sklearn.model_selection import GroupKFold
import numpy as np

# Prevent client domain overlap between train and validation splits
gkf = GroupKFold(n_splits=5)

for fold, (train_idx, val_idx) in enumerate(gkf.split(X, y, groups=client_ids)):
    X_train, X_val = X.iloc[train_idx], X.iloc[val_idx]
    y_train, y_val = y.iloc[train_idx], y.iloc[val_idx]
    
    # Fit preprocessing pipeline ONLY on X_train to avoid data leakage
    pipeline.fit(X_train, y_train)
    score = pipeline.score(X_val, y_val)
    print(f"Fold {fold} Validation Score: {score:.4f}")`
          }
        },
        {
          heading: "3. Evaluating Tree Ensembles & Benchmark Results",
          content: "Comparing baseline Logistic Regression against Random Forest, XGBoost, LightGBM, and CatBoost revealed that models evaluated under random splits showed artificially inflated metrics. Once evaluated under strict client-grouped validation, Random Forest achieved an ROC-AUC of 0.814, demonstrating realistic generalization to completely unseen client domains."
        }
      ],
      takeaways: [
        "Never use standard random train/test splits on grouped or domain-structured datasets.",
        "Fit all preprocessing, scaling, and aggregation steps strictly on training folds to prevent feature leakage.",
        "A realistic validation setup is more important than chasing ungrounded 0.99 AUC scores on leaked data."
      ]
    },
    {
      slug: "hybrid-invoice-parser-ocr-llm",
      title: "Building a Hybrid Invoice Parser with OCR, Rules and LLMs",
      category: "AI Engineering",
      tags: ["OCR", "NLP", "LLM", "FastAPI"],
      readTime: "8 min read",
      excerpt: "Combining EasyOCR text extraction, fast rule-based regex parsers, and LLM fallback engines into a production FastAPI microservice for multi-format invoice processing.",
      projectSlug: "invoice-data-to-json-parser",
      githubUrl: "https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git",
      introduction: "Document parsing in enterprise workflows involves dealing with invoices in diverse formats—scanned PDFs, image uploads, Excel files, and CSV spreadsheets—each with unpredictable layouts and varying scan qualities. To handle this variability reliably and cost-effectively, I designed a hybrid parsing architecture combining EasyOCR, deterministic regex rule engines, and LLM fallback parsing wrapped in a containerized FastAPI service.",
      sections: [
        {
          heading: "1. The Fallback Cascade Architecture",
          content: "Pure LLM parsing across all documents is computationally expensive and slow. Pure rule-based OCR fails when invoice layouts change unpredictably. The hybrid solution implements a tiered execution strategy: 1) Direct file reader for structured formats, 2) EasyOCR + Regex parser for standard key-value invoice layouts, 3) LLM fallback engine for complex, multi-line, or highly unstructured scanned documents."
        },
        {
          heading: "2. Schema Validation with Pydantic & FastAPI",
          content: "Raw OCR outputs are chaotic. Every extracted payload must pass through Pydantic data models to enforce data typing (dates, floating-point totals, currency codes) before returning JSON payloads to API clients.",
          codeSnippet: {
            language: "python",
            caption: "FastAPI endpoint with Pydantic response validation",
            code: `from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from typing import List

class InvoiceItem(BaseModel):
    description: str
    quantity: float
    unit_price: float
    total: float

class InvoicePayload(BaseModel):
    vendor_name: str
    invoice_number: str
    date: str
    total_amount: float
    items: List[InvoiceItem]

@app.post("/api/v1/parse-invoice", response_model=InvoicePayload)
async def parse_invoice(file: UploadFile = File(...)):
    # 1. Direct file reader / EasyOCR regex pass
    result = regex_ocr_engine.parse(file)
    if not result.is_complete:
        # 2. LLM fallback engine for complex scans
        result = llm_fallback_engine.parse(file)
    return InvoicePayload(**result.dict())`
          }
        },
        {
          heading: "3. Docker Containerization & Production Deployment",
          content: "The system was packaged into a Docker container ensuring system-level dependencies for OpenCV and EasyOCR execute consistently across cloud deployment targets."
        }
      ],
      takeaways: [
        "Deterministic rules and OCR handle 80% of standard document layouts at low latency.",
        "LLMs serve as powerful fallback engines for unstructured edge cases.",
        "Strict Pydantic validation guarantees consistent downstream JSON contracts regardless of parsing path."
      ]
    },
    {
      slug: "from-computer-vision-to-robotics-ros2",
      title: "From Computer Vision to Robotics: Why I Started Learning ROS2",
      category: "Robotics",
      tags: ["ROS2", "Robotics", "Computer Vision"],
      readTime: "6 min read",
      excerpt: "Bridging standalone deep learning perception models with real-world robot actuation using ROS2 nodes, pub/sub topics, and sensor fusion.",
      introduction: "Standard computer vision models run inside notebooks or web APIs where an image enters and a prediction exits. But when computer vision is applied to physical systems—like autonomous rovers or robotic arms—perception must communicate directly with actuators, sensor feeds, and control loops in real-time. This realization led me to expand into ROS2 (Robot Operating System 2).",
      sections: [
        {
          heading: "1. The Gap Between Perception Models and Robot Actuation",
          content: "A YOLOv8 model running on a GPU can output bounding boxes at 60 FPS, but a robot needs to map those pixel coordinates into 3D world frames, align IMU and LiDAR telemetry, and command wheel velocity motors via ROS2 topics."
        },
        {
          heading: "2. ROS2 Nodes, Topics, and Sensor Integration",
          content: "Unlike monolithic Python scripts, ROS2 enforces a distributed node architecture. Perception nodes publish object detection centroids over ROS topics (/perception/detected_objects), while navigation nodes subscribe to compute spatial pathways.",
          codeSnippet: {
            language: "python",
            caption: "ROS2 Python node publishing detection centroids",
            code: `import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Point

class PerceptionNode(Node):
    def __init__(self):
        super().__init__('vision_perception_node')
        self.publisher_ = self.create_publisher(Point, '/vision/detected_object_centroid', 10)
        self.timer = self.create_timer(0.033, self.detect_and_publish) # ~30 FPS

    def detect_and_publish(self):
        # Run computer vision detection on current camera frame
        x_centroid, y_centroid, z_depth = self.run_yolo_inference()
        msg = Point(x=x_centroid, y=y_centroid, z=z_depth)
        self.publisher_.publish(msg)`
          }
        },
        {
          heading: "3. Next Horizons: Sensor Fusion & Autonomous Navigation",
          content: "Combining ROS2 messaging with real-world sensor streams (IMU, LDR, ultrasonic sensors) lays the foundation for building integrated autonomous robotics systems."
        }
      ],
      takeaways: [
        "ROS2 transforms computer vision models from static code into active control loops.",
        "Pub/sub node architecture keeps perception, navigation, and hardware control cleanly decoupled.",
        "Sensor fusion between vision and inertial sensors is essential for real-world reliability."
      ]
    },
    {
      slug: "how-i-approach-an-aiml-project",
      title: "How I Approach an AI/ML Project",
      category: "AI/ML",
      tags: ["Machine Learning", "Data", "Evaluation", "Deployment"],
      readTime: "7 min read",
      excerpt: "A structured engineering framework: framing business metrics, diagnostic EDA, robust cross-validation, baseline selection, hyperparameter tuning, and containerized deployment.",
      introduction: "Building successful AI/ML systems requires far more than picking a popular neural network framework and calling .fit(). Over multiple projects across Computer Vision, NLP, and tabular ML, I have developed a structured, engineering-first methodology for taking machine learning concepts from problem formulation to production deployment.",
      sections: [
        {
          heading: "1. Problem Framing & Metric Selection",
          content: "Before writing code, define the business or operational goal and map it directly to quantitative ML metrics (e.g., mAP@0.50 for terrain segmentation, ROC-AUC under group splits for prediction, FID for generative models)."
        },
        {
          heading: "2. Data Hygiene, EDA & Diagnostic Validation",
          content: "Inspect raw data distribution, class imbalances, missing values, and potential leakage risks early. Design validation schemes (e.g., client-grouped cross-validation, temporal splits) that mirror real-world operational environments.",
          codeSnippet: {
            language: "python",
            caption: "Standard AI/ML Project Execution Workflow",
            code: `# Project Execution Standard Checklist
1. Problem Definition    -> Map business goal to ML metric (e.g. mAP, ROC-AUC, FID)
2. Data Validation       -> Check schemas, missing values, and split groups
3. Leakage Inspection    -> Separate pipelines before fitting transformers
4. Baseline Experiment   -> Fast interpretable model (Logistic Reg, Decision Tree)
5. Model Iteration       -> Deep learning / Ensembles (YOLO, T5, Random Forest)
6. Evaluation & Tuning   -> Grouped cross-validation & diagnostic plots
7. Microservice Export   -> Wrap inference in FastAPI/Docker container`
          }
        },
        {
          heading: "3. Iterative Baselines, Modeling & Deployment",
          content: "Start with simple deterministic baselines before introducing complex deep learning models. Optimize hyperparameters systematically, document failure modes, and package the final model into containerized microservices (FastAPI / Docker) with interactive API docs."
        }
      ],
      takeaways: [
        "Define evaluation metrics and validation splits before selecting complex algorithms.",
        "Start with fast, interpretable baselines to establish performance floors.",
        "Engineer models with deployment and API integration in mind from day one."
      ]
    }
  ],
  profiles: [
    { name: "GitHub", value: "Pinned AI repositories, recent commits, and contributions", href: "https://github.com/Sujan-lab-cell" },
    { name: "LeetCode", value: "DSA practice, problem solving, and contest growth", href: "#" },
    { name: "Kaggle", value: "Datasets, notebooks, and ML experimentation", href: "https://kaggle.com" },
    { name: "LinkedIn", value: "Professional updates and recruiter contact", href: "https://www.linkedin.com/in/sujan-k-s-a41261321/" },
  ],
};

export type Project = (typeof portfolioData.projects)[number];

export interface CodeSnippet {
  language: string;
  code: string;
  caption?: string;
}

export interface BlogSection {
  heading: string;
  content: string;
  codeSnippet?: CodeSnippet;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  readTime: string;
  excerpt: string;
  isFeatured?: boolean;
  statusNotice?: string;
  projectSlug?: string;
  githubUrl?: string;
  paperUrl?: string;
  introduction: string;
  sections: BlogSection[];
  takeaways: string[];
}

