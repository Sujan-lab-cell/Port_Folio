# Work Experience & Internships

## 1. FlyRank AI — Machine Learning Engineering Intern

### 1.1 Summary & Overview
- **Role**: Machine Learning Engineering Intern
- **Company**: FlyRank.ai / FlyRank AI
- **Internship Period**: 01 July 2026 – 09 September 2026
- **Primary Specialization**: Machine Learning
- **Research Paper & Web Overview**: https://sujan-lab-cell.github.io/flyrank-ml-internship/
- **FlyRank ML Internship Repository**: https://github.com/Sujan-lab-cell/flyrank-ml-internship
- **FlyRank AI Info Repository**: https://github.com/Sujan-lab-cell/FlyRank_ai_info
- **Capstone Project Notebook**: `work/notebooks/capstone.ipynb` (Executed top-to-bottom with 0 errors)

#### Overview & Scope
During the internship, worked on practical machine-learning assignments and a capstone focused on applying ML to real-world Google Search ranking and discoverability data. The internship included 12 practical assignments covering:
- Data wrangling
- Embeddings and clustering
- Intent modeling
- Opportunity modeling
- Insight-to-action workflows
- Machine-learning experimentation
- Search-performance analysis
- Human-in-the-loop decision support

### 1.2 Main Internship Objective & Framing
- **Core Capstone Description**: Built and evaluated a machine-learning framework to prioritize webpages at risk of Google Search performance decline for human review. Using 5-fold client-grouped GroupKFold validation, Random Forest achieved Precision@50 of 0.444 compared with a baseline of 0.392, improving precision by 5.2 percentage points.
- **Core Problem**: Identify webpages that may experience a decline in Google Search clicks and prioritize those pages for human review.
- **System Design**: Designed as a decision-support and prioritization system, rather than an automated content-changing system.
- **Core Question**: Answers "Which webpages should humans investigate first?"
- **Scope Boundaries**: Does not claim to determine Google's ranking algorithm, prove causality, or automatically determine what content changes should be made.

### 1.3 Google Search Ranking & Discoverability Work
The capstone, titled **Google Search Ranking & Discoverability Capstone**, involved:
- Aggregating historical search-performance information at the content-page level.
- Defining a future decline target using May 2026 performance.
- Restricting model inputs to information available before the prediction period.
- Engineering historical search-performance features.
- Establishing a rule-based baseline.
- Comparing multiple machine-learning model families.
- Using client-grouped cross-validation.
- Checking for feature leakage.
- Evaluating models using Precision@K.
- Producing a ranked webpage review queue.
- Creating a human-in-the-loop content action playbook.
- Publishing the capstone as a research paper through GitHub Pages.

### 1.4 Dataset & Population
- **Dataset**: Anonymized FlyRank search-performance dataset.
- **Dataset Aggregation Levels**:
  - **~78.8 Million**: Underlying/raw daily search-record scale.
  - **407,121 Content Pages**: Aggregated content-page population across 70 clients.
  - **16,513 Eligible Modeling Pages**: Eligible modeling population across 36 distinct clients (after applying eligibility criteria for the ML-CAP-01 capstone).
- **Modeling Unit**: One content page.
- **Data Usage**: Historical search-performance information used to construct features from the period before the prediction window.

### 1.5 Time Windows
- **Feature / Historical Period**: Restricted to information available before 01 May 2026 (including February and April 2026 signals).
- **Target Period**: 01 May 2026 – 31 May 2026.
- **Rationale**: Strict temporal separation prevented future May performance from being used as an input to predict May decline.

### 1.6 Target Definition & Distribution
- **Target Indicator**: Binary webpage decline indicator.
- **Labeling Rule**: A page was labeled as declining when May clicks were less than 80% of April clicks (`may_clicks < 0.8 * april_clicks`).
- **Mathematical Form**: `decline = (may_clicks < 0.8 * april_clicks).astype(int)`
- **Target Distribution** (among 16,513 eligible pages):
  - Non-declining pages: 9,640 (58.38%)
  - Declining pages: 6,873 (41.62%)
  - **Base Rate**: 41.62%

### 1.7 Eligibility Criteria
Pages were included in the modeling population only when both conditions were satisfied:
- `impressions_total >= 1000`
- AND `april_clicks >= 10`

Resulted in 16,513 eligible content pages across 36 distinct clients.

### 1.8 Feature Engineering (9 Pre-May Features)
1. `impressions_total`: Total historical search impressions before May 2026.
2. `clicks_total`: Total historical search clicks before May 2026.
3. `april_impressions`: Search impressions during April 2026.
4. `april_clicks`: Search clicks during April 2026.
5. `feb_clicks`: Search clicks during February 2026.
6. `momentum`: Historical click momentum calculated as `april_clicks / (feb_clicks + 1.0)`.
7. `ctr`: Historical click-through rate calculated as `(clicks_total / impressions_total) * 100`.
8. `active_days`: Number of days with impressions greater than zero before May 2026.
9. `weighted_position`: Impression-weighted search position (`gsc_avg_position == 0` was treated as missing/non-position information).

### 1.9 Leakage Prevention & Responsible ML
- Designed so that information from the future May target period was not used as a prediction feature.
- Explicitly excluded:
  - May performance information
  - Page/client identifiers as predictive features
  - Future/trend fields that would expose the target period
- Used client-grouped validation (`GroupKFold`) so pages from the same client were never simultaneously used for training and validation splits.
- Zero client overlap across validation folds verified.
- Framed strictly as a decision-support prioritization tool, avoiding causal claims about Google Search ranking algorithms.

### 1.10 Baseline Method
- **Rule-Based Rule**: Flagged pages using `april_clicks < march_clicks`.
- **Ranking Strategy**: Flagged pages were ranked by `april_impressions`.
- **Baseline Precision@K Results**:
  - Precision@10: 0.400
  - Precision@20: 0.370
  - **Precision@50**: 0.392 (Primary baseline benchmark)
  - Precision@100: 0.388

### 1.11 Machine-Learning Models Tested & Benchmark Comparison
Multiple model families were evaluated under the same controlled modeling methodology:
- Logistic Regression (Linear modeling)
- Decision Tree (Single-tree modeling)
- Random Forest (Bagging)
- HistGradientBoosting (Gradient boosting)
- XGBoost (Specialized boosting)
- LightGBM (Specialized boosting)
- CatBoost (Specialized boosting)
- Rule-based Baseline

#### Controlled Benchmark Results Table
- Baseline: P@10 = 0.400, P@20 = 0.370, P@50 = 0.392, P@100 = 0.388
- Logistic Regression: P@10 = 0.380, P@20 = 0.400, P@50 = 0.424, P@100 = 0.438
- Decision Tree: P@10 = 0.400, P@20 = 0.390, P@50 = 0.324, P@100 = 0.346
- HistGradientBoosting: P@10 = 0.440, P@20 = 0.420, P@50 = 0.436, P@100 = 0.442
- LightGBM: P@10 = 0.450, P@20 = 0.425, P@50 = 0.438, P@100 = 0.444
- CatBoost: P@10 = 0.450, P@20 = 0.430, P@50 = 0.440, P@100 = 0.445
- XGBoost: P@10 = 0.450, P@20 = 0.430, P@50 = 0.442, P@100 = 0.446
- Random Forest: P@10 = 0.460, P@20 = 0.430, P@50 = 0.444, P@100 = 0.448

### 1.12 Final Random Forest Model & Performance
- **Selected Model**: Random Forest Classifier
- **Configuration / Hyperparameters**: `n_estimators = 100`, `max_depth = 5`, `random_state = 42`
- **Precision@K Results**: Precision@10 = 0.460, Precision@20 = 0.430, **Precision@50 = 0.444**, Precision@100 = 0.448
- **Primary Benchmark**: Random Forest Precision@50 = 0.444

#### Improvement Over Baseline
- **Baseline Precision@50**: 0.392
- **Random Forest Precision@50**: 0.444
- **Absolute Improvement**: +0.052 (+5.2 percentage points)
- **Relative Improvement**: ~ +13.26% (improved Precision@50 benchmark from 39.2% to 44.4%)

### 1.13 Feature Importance (Random Forest Gini Importances)
- Rank 1: `momentum` (Importance: 0.2899)
- Rank 2: `april_impressions` (Importance: 0.2203)
- Rank 3: `impressions_total` (Importance: 0.1921)
- Rank 4: `ctr` (Importance: 0.0634)
- Rank 5: `feb_clicks` (Importance: 0.0633)
- Rank 6: `weighted_position` (Importance: 0.0590)
- Rank 7: `clicks_total` (Importance: 0.0540)
- Rank 8: `april_clicks` (Importance: 0.0512)
- Rank 9: `active_days` (Importance: 0.0067)

The three largest feature importances were historical momentum (0.2899), April impressions (0.2203), and total historical impressions (0.1921). These represent model feature importances, not causal explanations.

### 1.14 Cross-Validation & Deterministic Ranking
- **Validation Scheme**: 5-fold `GroupKFold` cross-validation grouped by client identifier (`client_hash_id`).
- **Client Disjoint Check**: Verified `set(train_clients).isdisjoint(set(validation_clients))` for every fold.
- **Client Overlap Results**: `[0, 0, 0, 0, 0]` (zero client overlap across all 5 folds).
- **Deterministic Tie-Breaking Strategy**:
  1. Prediction score (descending)
  2. `april_clicks` (descending)
  3. `content_hash_id` (ascending)

#### Random Forest Fold Results (Precision@50)
- Fold 0: Precision@50 = 0.44
- Fold 1: Precision@50 = 0.32
- Fold 2: Precision@50 = 0.46
- Fold 3: Precision@50 = 0.64
- Fold 4: Precision@50 = 0.36
- Mean: Precision@50 = 0.444

### 1.15 Human-in-the-Loop Workflow & Action Playbook
- **Workflow Pipeline**: Historical search data passes into feature engineering, which feeds the ML model to generate a risk ranking score, creating a prioritized webpage queue for human review and content investigation or action.
- **Core Principle**: *"The model recommends WHERE TO LOOK; the human decides WHAT TO DO."*
- **Content Action Playbook**: Produced a ranked queue of webpages needing human attention. Emphasized reviewing pages before executing content changes and monitoring outcomes prior to adjusting model configuration.

### 1.16 Error Analysis & Metric Interpretation
- **False Positives Analysis**: Associated with lower historical momentum (median ~1.45 vs 3.40 for FNs) and poorer historical search position (median weighted position ~13.96 vs 5.74 for FNs).
- **False Negatives Analysis**: Included pages with higher historical momentum and higher April click volume.
- **Precision@50 Interpretation**: Mean Precision@50 of 0.444 corresponds to approximately **22.2 true declining pages** and **27.8 false positives** per 50 reviewed pages. Evaluated as a prioritization-quality measure.

### 1.17 Technical Stack
- **Programming**: Python
- **Data Processing**: Pandas, NumPy, DuckDB
- **Machine Learning**: scikit-learn, Random Forest, Logistic Regression, Decision Tree, HistGradientBoosting, XGBoost, LightGBM, CatBoost
- **Analysis & Visualization**: Matplotlib, Jupyter Notebook
- **Development & Version Control**: Git, GitHub
- **Data / ML Resources**: Hugging Face

### 1.18 Applied ML Concepts & Key Deliverables
- **ML Concepts Applied**: Supervised learning, binary classification, ranking, Precision@K, baseline modeling, feature engineering, feature importance, model comparison, bagging, boosting, Random Forests, gradient boosting, cross-validation, GroupKFold, client-level validation, data leakage detection & prevention, error analysis (FP/FN analysis), deterministic ranking, human-in-the-loop ML, decision-support systems, responsible ML framing, reproducible experimentation.
- **Key Deliverables**: 12 practical ML assignments, ML notebooks, Capstone notebook (`work/notebooks/capstone.ipynb`), data-processing/ML scripts, model evaluation, Precision@K analysis, feature-importance analysis, error analysis, ranked action-playbook queue, metrics JSON, evaluation figures, deployed research paper, GitHub repositories, internship certificate, letter of recommendation.
- **Certificate & LOR Verification**: Internship Certificate records completion of Machine Learning Internship Program at FlyRank.ai (01 July 2026 – 09 September 2026). Recommendation letter identifies role as Machine Learning Engineering Intern with primary specialization in Machine Learning.

### 1.19 Resume-Level Summary
Machine Learning Engineering Intern at FlyRank.ai (Jul 2026 – Sep 2026), completing 12 practical ML assignments and a Google Search Ranking & Discoverability Capstone. Built and evaluated models for prioritizing webpages at risk of search-performance decline using historical search signals, leakage-safe feature engineering, and 5-fold client-grouped GroupKFold validation. Compared seven ML approaches and a rule-based baseline, with Random Forest achieving 0.444 Precision@50 versus 0.392 baseline (+5.2 percentage points). Developed a human-in-the-loop content prioritization workflow and deployed the resulting research paper through GitHub Pages.

---



## 2. ISIRI Technologies Pvt. Ltd. (AyusLab) — AI/ML Intern

### 2.1 Summary & Overview
- **Role**: AI/ML Intern
- **Company**: ISIRI Technologies Pvt. Ltd.
- **Platform / Product Context**: AyusLab / AyushLab (Pharmaceutical Invoice-Processing System)
- **Location**: Mangalore, Karnataka, India
- **Internship Period**: 15 June 2026 – 10 August 2026 (Certificate dated: 06 August 2026)
- **Mentor**: Mr. Vishnu Shashank B (CEO, ISIRI Technologies Pvt. Ltd.)
- **Project Title**: AI Based Invoice Parser (Invoice Data to JSON AI Parser)
- **GitHub Repository**: https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git
- **Live API Documentation**: https://invoice-data-to-json.onrender.com/docs
- **Live Deployed API Endpoint**: https://invoice-data-to-json.onrender.com/api/v1/invoices/parse

### 2.2 Project Objective & Scope
- **Primary Goal**: Automate the extraction of structured information from pharmaceutical supplier invoices into a standardized canonical JSON format suitable for pharmacy inventory software and AyusLab integration.
- **Core Scope**: Process unstructured/semi-structured invoices containing document metadata, supplier & buyer details, medicine line items, pricing, tax breakdowns, and grand totals.
- **Architectural Framing**: Engineered a hybrid extraction architecture that prioritizes deterministic rules and heuristics, using an LLM fallback selectively only when data is missing or mathematically inconsistent.

### 2.3 Supported File Formats & Input Processing
- **PDF Documents**:
  - *Native/Digital PDFs*: Direct text and table extraction using `pdfplumber`, `PyMuPDF` (`fitz`), and `pypdf`.
  - *Scanned PDFs*: Page rasterization via `pdf2image` followed by OCR image processing.
- **Image Inputs**: Scanned invoice images (PNG/JPG) processed using `OpenCV`, `Pillow` (PIL), and `EasyOCR`.
- **Spreadsheets**: Structured Excel (`.xlsx`) and CSV files processed using `Pandas` and `OpenPyXL`.

### 2.4 Hybrid Pipeline Architecture
```
Invoice Upload
      ↓
File Validation / Format Detection
      ↓
Document / Table Extraction Layer
      ↓
OCR + Image Preprocessing
      ↓
Lightweight NLP Text Preprocessing
      ↓
Regex + Heuristic Rule-Based Extraction
      ↓
Validation & Mathematical Consistency Checks
      ↓
 ┌───────────────────────────────┐
 │                               │
 │ Data Valid                    │ Missing / Invalid Critical Fields
 │                               │
 ↓                               ↓
Canonical Structured JSON   Google Gemini API Fallback (gemini-3.6-flash)
                                ↓
                         Quality-Aware Conflict Resolution / Merge
                                ↓
                         Canonical Structured JSON
```

### 2.5 OCR, Preprocessing & Domain-Specific NLP
- **OCR Engine**: `EasyOCR` backed by PyTorch (`torchvision`), configured for CPU-oriented execution with lazy loading to optimize memory footprint.
- **Image Processing**: `OpenCV` and `Pillow` for deskewing, noise reduction, grayscale conversion, and contrast enhancement/thresholding.
- **Domain-Specific NLP Cleanup**: Performs line-break normalization, whitespace cleanup, and OCR dictionary error correction.
- **Domain Constraint**: Intentionally excludes stemming or lemmatization to protect critical pharmaceutical terminology (drug brand names, formulations, batch numbers, HSN codes).

### 2.6 Deterministic Rule-Engine & Fields Extracted
- **Rule Engine**: Regex pattern matchers and domain heuristics tailored for Indian pharmaceutical invoices.
- **Extracted Header & Metadata**: Source filename, file type, OCR confidence, processing duration, invoice number, invoice date, due date, order number, payment type (Cash/Credit).
- **Supplier & Buyer Entities**: 15-digit Indian GSTIN, entity name, address, phone number, state code.
- **Medicine Line Items**: Product code, description, HSN code, batch number, expiry date (MM/YY format), pack size, unit count, billed quantity, free quantity, total quantity, MRP, purchase rate (PTR), discount %, taxable amount, CGST %, SGST %, IGST %, and GST amount.
- **Totals & Tax Summary**: Subtotal, total discount, total GST, grand total, round-off amount, and tax-slab breakdown (5%, 12%, 18%, 28% slabs with taxable base and tax amount per slab).

### 2.7 Validation, Quality Control & Selective LLM Fallback
- **Mathematical Integrity Validation**: Checks `Quantity × Rate ≈ Taxable Amount` and `Subtotal + Taxes ≈ Grand Total`.
- **Required Field Auditing**: Checks for critical header fields (invoice number, date, supplier, buyer).
- **Selective Fallback Trigger**: Gemini LLM API (`google-generativeai`, `gemini-3.6-flash`) is invoked *only* when critical fields are missing or mathematical checks fail.
- **Quality-Aware Merge**: Merges LLM extraction outputs with deterministic rule outputs, resolving field conflicts to preserve high-confidence deterministic data.
- **Audit & Review Schema**: Produces review flags including `is_valid`, `validation_errors`, `validation_warnings`, `requires_review`, and `human_review_reasons`.

### 2.8 Pydantic Schemas & Data Modeling
- **Schema Engine**: `Pydantic v2` for strict type validation and canonical `Document` schema mapping.
- **Configuration Management**: `pydantic-settings` for environment-based configuration management.
- **Fuzzy Inventory Matching**: `RapidFuzz` fuzzy string matching engine to match extracted medicine descriptions against master pharmacy inventory catalogs.

### 2.9 FastAPI Backend & Deployment Architecture
- **API Framework**: `FastAPI` with `Uvicorn` ASGI server.
- **Primary Endpoint**: `POST /api/v1/invoices/parse` (Multipart form upload, Bearer Token authentication).
- **Health Check**: `GET /health` returning `{"status": "ok"}`.
- **API Documentation**: OpenAPI / Swagger UI at `/docs`.
- **Containerization**: Multi-stage `Docker` build based on `Python 3.10-slim`.
- **Cloud Hosting**: Deployed on `Render` platform via `render.yaml` infrastructure configuration.
- **Security & Config**: Bearer Token authorization, CORS controls, security headers (`nosniff`, DENY clickjacking, XSS protection), environment limits (`MAX_UPLOAD_SIZE_MB = 10`, `GEMINI_API_KEY`, `TORCH_NUM_THREADS`).

### 2.10 Review Frontend
- **Frontend Stack**: React 19, Vite, Tailwind CSS v4.
- **Key Capabilities**: Drag-and-drop file dropzone, live extraction progress tracker, editable JSON/form review panel, line-item inspector, validation error highlighting, and one-click pharmacy inventory commit.

### 2.11 Technical Stack Summary
- **Backend & API**: Python, FastAPI, Uvicorn, Pydantic v2, pydantic-settings
- **Document & Image Processing**: EasyOCR, PyTorch, torchvision, OpenCV, Pillow, pdfplumber, PyMuPDF (fitz), pdf2image, pypdf, Pandas, OpenPyXL
- **Extraction & Matching**: Regex, Heuristics, RapidFuzz, Google Gemini API (`gemini-3.6-flash`)
- **DevOps & Cloud**: Docker, Render, Git, GitHub
- **Frontend**: React 19, Vite, Tailwind CSS v4

### 2.12 Performance & Metric Framing
- *Note on Empirical Metrics*: No verified overall accuracy percentage, precision/recall, F1 score, or processing speed benchmark was recorded for the final deployment. Architectural correctness and engineering robustness are highlighted rather than unverified numerical metrics.

---

## 3. EdiGlobe — Machine Learning Intern

### Summary
- Role: Machine Learning Intern
- Company: EdiGlobe (in partnership with Zhagaram Technologies & Ministry of MSME, Govt. of India)
- Internship Period: July 2025 – August 2025 (Certificate Date Range: July 1, 2025 – August 30, 2025)
- Core Project: Heart Disease Detection using Machine Learning

### Key Contributions & Technical Work
- Predictive Risk Modeling: Developed machine learning models to predict heart disease risk based on structured tabular medical data.
- End-to-End ML Pipeline: Carried out data preprocessing, missing value handling, exploratory data analysis (EDA), feature selection, and model training.
- Classification Model Evaluation: Trained and evaluated classification algorithms using standard metrics (precision, recall, F1-score, accuracy, ROC curves).
- Project Deliverables: Completed one minor project and one major project under the Machine Learning domain internship program.

### Technologies & Methodologies
- Python, Machine Learning, Classification Models, Exploratory Data Analysis (EDA), Scikit-learn, Pandas, NumPy.
