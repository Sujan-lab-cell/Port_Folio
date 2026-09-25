# Featured Technical Projects & Software Engineering Portfolio
## 1. Adaptive Temporal Validation Framework for Colorectal Polyp Detection (Proposed Final-Year Research Project — Status: Proposed / Planned — Not Started)
- **Category:** Computer Vision | Deep Learning | Medical AI | Research
- **Project Type:** Proposed Final-Year B.Tech Research Project
- **Project Status:** Proposed / Planned — Not Started

### Description

A proposed research project focused on improving the reliability of colorectal polyp detection in continuous colonoscopy video by incorporating temporal evidence rather than relying only on individual video frames.

### What Are Colorectal Polyps?

Colorectal polyps are abnormal tissue growths that can develop on the inner lining of the colon or rectum. Some types of polyps can develop into colorectal cancer over time, making their detection and assessment during colonoscopy important.

### Problem Statement

Conventional computer vision systems often evaluate polyp detection on individual video frames using metrics such as precision, recall, and mAP. However, frame-level evaluation does not fully capture the temporal behavior of detections in real colonoscopy videos.

Continuous endoscopic video can contain:

- Rapid camera movement
- Temporary polyp occlusion
- Tissue reflections and specular highlights
- Motion blur
- Partial visibility of polyps
- Detection flickering between consecutive frames
- Bounding-box instability

These factors can cause a detector to produce inconsistent results even when the underlying polyp is present.

### Research Motivation

The proposed project aims to investigate whether temporal information across consecutive video frames can provide stronger evidence for determining whether a detected polyp is reliable.

Instead of treating every frame independently, the system is intended to consider the persistence and stability of detections over time.

### Proposed Objective

To develop a temporal validation framework that evaluates the reliability of colorectal polyp detections in continuous colonoscopy video using spatial detection results, tracking information, temporal persistence, bounding-box stability, and video-motion characteristics.

### Proposed System Workflow

The proposed system workflow processes continuous colonoscopy video through a multi-stage pipeline:
1. Frame Extraction: Individual frames are extracted sequentially from the colonoscopy video feed.
2. Polyp Detection: A deep learning detector scans each extracted frame to identify candidate polyp regions.
3. Object Tracking: An object tracker tracks detected polyps across consecutive frames to maintain spatial identity.
4. Temporal Evidence Collection: The system accumulates bounding box coordinates, confidence scores, and frame persistence data over time.
5. Temporal Consistency Validation: The temporal validation module checks bounding box stability, trajectory consistency, and movement jitter.
6. Reliability Assessment: A reliability score is calculated based on cumulative temporal evidence.
7. Confirm / Wait / Reject Decision: The adaptive decision layer classifies the detection as Confirm (high confidence temporal evidence), Wait (insufficient frames to decide), or Reject (transient artifact or false positive).

### Proposed Detection Layer

A real-time object detection model such as YOLO or RT-DETR may be investigated for locating colorectal polyps in individual video frames.

**Status:** Proposed / Planned.

### Proposed Tracking Layer

An object tracking method such as ByteTrack or DeepSORT may be investigated to associate polyp detections across consecutive frames and maintain consistent object identities.

**Status:** Proposed / Planned.

### Temporal Validation

The proposed framework will evaluate multiple temporal factors, including:

- Detection persistence across consecutive frames
- Bounding-box stability
- Bounding-box jitter
- Trajectory consistency
- Camera motion and video instability
- Temporary occlusion
- Reflections and specular highlights
- Consistency of detections over time

The purpose is to determine whether a detection remains reliable across a sequence of frames rather than accepting or rejecting it based only on a single-frame confidence score.

### Proposed Decision Layer

The framework may use temporal evidence to produce an adaptive decision:

- **Confirm:** Sufficient temporal evidence supports the detection.
- **Wait:** More frames are required to establish reliable evidence.
- **Reject:** Available temporal evidence is insufficient or inconsistent.

### Proposed Segmentation and Classification

Additional components such as SAM 2 or U-Net++ may be investigated for polyp segmentation, while models such as EfficientNet may be investigated for polyp classification.

**Status:** Proposed / Planned.

### Explainability

Explainability techniques such as Grad-CAM may be investigated to provide visual indications of regions contributing to model predictions.

**Status:** Proposed / Planned.

### Proposed LLM-Based Reporting

A language model may be investigated as a downstream reporting component. It could receive structured outputs such as detected polyp count, location, size, classification, and confidence and generate a structured colonoscopy report.

The proposed LLM component is intended for report generation and information summarization, not independent medical diagnosis.

**Status:** Proposed / Planned.

### Expected Research Contribution

The proposed research focuses on evaluating temporal reliability in continuous colonoscopy video and investigating whether temporal evidence can complement conventional frame-level detection metrics.

The primary research focus is temporal consistency and reliability rather than simply achieving higher frame-level detection accuracy.

### Proposed Technologies

- Python
- Computer Vision
- Deep Learning
- Object Detection
- Object Tracking
- Image Segmentation
- Temporal Analysis
- Video Processing
- Explainable AI
- Large Language Models

### Current Status

This project is currently a **proposed/planned final-year B.Tech project and has NOT been started or implemented yet**.

No model has been trained, no dataset has been experimentally evaluated, and no performance results or clinical validation are currently available.

All models, architecture components, evaluation methods, and LLM-based reporting described above are proposed research directions and may change during implementation.

### Limitations and Future Scope

Future work may include dataset selection, model implementation, temporal validation experiments, quantitative evaluation, ablation studies, and comparison with conventional frame-level detection approaches.

Clinical validation and real-world deployment would require extensive medical evaluation and are outside the current proposed scope.

---

## 2. GeoSentinel — Deep Learning Terrain & Feature Segmentation System (Landslide Detection)

### Project Overview
GeoSentinel is an AI-powered landslide detection and monitoring system designed to identify landslide regions from satellite imagery, aerial photographs, and drone video footage.

The system uses YOLOv8-Seg instance segmentation to detect and segment landslide regions and integrates the model with geographic visualization, risk classification, automated alerts, video analysis, and historical detection monitoring.

- **Category:** Artificial Intelligence | Computer Vision | Deep Learning | Disaster Management
- **Project Type:** Real-Time Landslide Detection and Monitoring System
- **GitHub Repository:** https://github.com/Sujan-lab-cell/GeoSentinel-Landslide-Detection-System.git

### Objectives
- Detect landslide regions using deep-learning-based instance segmentation.
- Provide detection confidence and risk-level classification.
- Analyze drone video frame-by-frame for landslide detection.
- Visualize detected locations using interactive maps.
- Send automated SMS and email alerts when landslides are detected.
- Maintain historical detection records and generate landslide heatmaps.

### Dataset
The model was trained using a custom landslide segmentation dataset assembled from public and satellite-image sources.

- **Total annotated images:** 821
- **Training images:** 711
- **Validation images:** 70
- **Test images:** 40
- **Initial raw collection:** 327 images
- **Class:** `landslide`
- **Annotation:** Polygon segmentation masks in YOLO format.

The project used imagery from sources including Roboflow, Kaggle Landslide4Sense, and the NASA Landslide Inventory.

### Preprocessing and Augmentation
- Automatic image orientation correction.
- Resize to 640 × 640 pixels.
- Horizontal flipping.
- Rotation between -5° and +5°.
- Brightness variation between -20% and +20%.
- Blur augmentation up to 1.5 px.
- Noise augmentation up to 1.33% of pixels.

### Model Architecture
GeoSentinel uses **YOLOv8-Seg**, the segmentation variant of YOLOv8 from Ultralytics.

The model performs object detection, bounding-box prediction, instance segmentation, and confidence estimation.

### Model Configuration
- **Pretrained model:** `yolov8n-seg.pt`
- **Input size:** 640 × 640
- **Task:** Instance Segmentation
- **Classes:** 1 (`landslide`)
- **Confidence threshold:** 0.50
- **Optimizer:** AdamW
- **Epochs:** 100
- **Batch size:** 16
- **Initial learning rate:** 0.01
- **Final learning rate:** 0.0001
- **Weight decay:** 0.0005
- **Device:** NVIDIA CUDA GPU

### Model Performance
Evaluation was performed on the 40-image test set.

### Bounding-Box Metrics
- **Precision:** 0.843
- **Recall:** 0.802
- **mAP@0.50:** 0.837
- **mAP@0.50:0.95:** 0.448

### Segmentation Mask Metrics
- **Precision:** 0.844
- **Recall:** 0.679
- **mAP@0.50:** 0.731
- **mAP@0.50:0.95:** 0.342

The results demonstrate strong landslide detection performance, while the lower mAP@0.50:0.95 values indicate that more precise localization and segmentation remain areas for improvement.

### Dataset Bias and False Positives
During development, the model initially showed bias toward predicting landslides because the training data contained primarily landslide images. This resulted in increased false positives and a low number of true-negative predictions.

To address this issue, additional non-landslide background images were added to the dataset to improve the distinction between landslide and normal terrain.

### Confusion Matrix Observations
- **True Positives:** 69
- **False Negatives:** 14
- **False Positives:** 12

### Application Workflow
The system accepts an image or drone video as input. YOLOv8-Seg performs inference to detect and segment potential landslide regions. Detected regions receive confidence scores and risk classifications. Results can then be visualized geographically, logged for historical monitoring, and used to trigger automated alerts.

### Image Analysis
Users can upload JPG or PNG images for landslide segmentation and confidence scoring.

### Drone Video Analysis
The system can process drone video frame-by-frame and generate annotated output video.

### Geographic Mapping
Detected landslide locations can be displayed on an interactive **Folium and OpenStreetMap** map using geographic coordinates.

The system also represents an approximate 1 km evacuation-radius area around detected locations.

### Automated Alerts
- **SMS:** Twilio
- **Email:** SendGrid
- **Audio alert:** pyttsx3

### Historical Monitoring
Detection information is logged to a CSV-based record containing latitude, longitude, confidence score, timestamp, and risk level.

The logged detections can be used to generate a historical landslide heatmap.

### Risk Classification
The system provides three risk categories:
- **HIGH**
- **LOW**
- **NONE**

The risk level is derived from the detection and confidence-based system implemented in the application.

### Technology Stack
- Python
- YOLOv8-Seg
- Ultralytics
- OpenCV
- Roboflow
- Streamlit
- Folium
- OpenStreetMap
- Twilio
- SendGrid
- pyttsx3
- Pandas
- NumPy
- CUDA / NVIDIA GPU

### Key Features
- Landslide detection using deep learning.
- Instance segmentation of landslide regions.
- Image-based analysis.
- Drone video analysis.
- Confidence scoring.
- Risk-level classification.
- Interactive geographic visualization.
- SMS, email, and audio alerts.
- Historical detection logging.
- Landslide heatmap generation.

### Real-World Use Case
GeoSentinel is designed as a disaster-monitoring concept for areas where continuous human observation is difficult.

A potential use case is using drone or aerial imagery to identify potential landslide regions, determine their approximate geographic location and risk level, and provide automated notifications to support faster awareness and response.

### Key Challenges Addressed
- Landslide segmentation from aerial imagery.
- Variation in lighting and image quality.
- Camera and sensor-related noise.
- False positives caused by insufficient background examples.
- Real-time processing of drone video.
- Connecting AI predictions with geographic monitoring and emergency alerts.

### Project Outcome
GeoSentinel demonstrates an end-to-end pipeline connecting deep-learning-based landslide segmentation with real-time monitoring, geographic visualization, automated notifications, and historical detection logging.

### Future Scope
- Multi-class disaster detection.
- Integration with additional live satellite data sources.
- Mobile support for field personnel.
- Improved background and negative-sample diversity.
- More precise segmentation and localization.
- Expanded real-world validation across different geographic regions.


---

## 3. SmartQ Generator — Multilingual Question Generation System

### Project Overview

SmartQ Generator is a Streamlit-based NLP application that converts text or spoken audio into structured educational questions.

The system can detect the input language, translate non-English content into English for question generation, generate questions using transformer-based T5 models, classify questions by type and difficulty, provide Text-to-Speech playback, allow in-browser editing, and export generated questions as PDF or TXT files.

- **Category:** Natural Language Processing | Deep Learning | Multimodal AI
- **Project Type:** Multilingual Educational Question Generation Pipeline
- **GitHub Repository:** https://github.com/Sujan-lab-cell/Question-Generation-from-Multilingual-Text-and-Speech.git

### Main Objectives

- Generate educational questions from textual content.
- Accept spoken audio as an input source.
- Support multilingual text processing.
- Detect the input language automatically.
- Translate non-English content into English when required.
- Generate different types of questions using transformer models.
- Classify generated questions by type and difficulty.
- Provide Text-to-Speech playback.
- Allow users to edit generated questions.
- Export questions in TXT and PDF formats.

### Input Methods

The system supports two primary input modes:

- **Text Input:** Users can enter up to approximately 5000 words of text.
- **Audio Input:** Users can upload WAV, MP3, M4A, or OGG files for automatic speech transcription.

Audio is transcribed using Google Speech Recognition before entering the NLP pipeline.

### Main Processing Pipeline

The system accepts text or audio input. Audio is first converted to text using speech recognition. The input language is detected and translated to English when required. The processed text is then passed to a T5-based question-generation model. Generated questions are classified by type and difficulty. Users can then edit, listen to, filter, and export the generated questions.

### Multilingual Processing

The application automatically detects the language of the input and translates the content into English when required.

The documented supported input languages include:

- English
- Hindi
- Japanese
- Kannada
- Malayalam
- Tamil
- Telugu
- Bengali
- Marathi
- Gujarati
- Korean
- Chinese
- Arabic
- French
- German
- Spanish
- Portuguese
- Russian
- Urdu
- Vietnamese
- and other supported languages.

The system also supports multilingual Text-to-Speech playback.

### Question Generation

The question-generation stage uses transformer-based **T5 models** through the Hugging Face Transformers library.

Documented supported models include:

- `valhalla/t5-small-qg-hl`
- `iarfmoose/t5-base-question-generator`
- `allenai/t5-small-squad2-question-generation`

The documented recommended model is:

`iarfmoose/t5-base-question-generator`

The system can generate different types of questions, including:

- What
- Why
- How
- Who
- When
- Where
- Yes/No
- Definition

### Difficulty Scoring

Generated questions can be categorized into:

- **Easy:** 8 words or fewer
- **Medium:** 9–14 words
- **Hard:** 15 or more words
- **Mixed:** Combination of difficulty levels

The difficulty classification is based on a word-count heuristic.

### Question Type Classification

Question types are assigned using a rule-based classification mechanism.

Generated questions are organized into tabs based on question type so users can filter and review them.

### Text-to-Speech

SmartQ Generator provides both individual and bulk Text-to-Speech playback.

Users can configure the TTS language and playback speed.

The documented supported TTS languages include:

- English
- Hindi
- French
- German
- Spanish
- Kannada
- Telugu
- Tamil
- Arabic
- Portuguese
- Japanese
- Chinese (Simplified)

### Question Editing

Generated questions can be edited directly inside the browser before export.

This allows users to correct or refine generated questions before downloading them.

### Export

### TXT Export

The application can export a numbered list of generated questions with their type and difficulty information.

### PDF Export

The application can generate formatted PDFs containing:

- Question groupings by type
- Difficulty indicators
- Source excerpts

Filtered TXT export is also available for exporting only selected question types.

### Technology Stack

- Python
- Streamlit
- Hugging Face Transformers
- T5
- PyTorch
- SpeechRecognition
- Google Speech Recognition
- deep-translator
- NLTK
- langdetect
- gTTS
- pydub
- fpdf2

### Key Features

- Multilingual text processing.
- Audio-to-text conversion.
- Automatic language detection.
- Translation pipeline.
- Transformer-based question generation.
- Multiple question types.
- Difficulty categorization.
- Text-to-Speech playback.
- Browser-based question editing.
- Question filtering.
- PDF export.
- TXT export.
- Interactive Streamlit interface.

### Example

Given an educational passage about a topic, the system processes the passage and generates questions such as:

- What is the main concept discussed in the passage?
- Why is the concept important?
- How does the described process work?

The generated questions can then be classified by type and difficulty, edited by the user, played through Text-to-Speech, and exported.

### Application Constraints

The documented application accepts text input of up to approximately 5000 words.

For practical speed and quality, the README recommends using around 500–2000 words for typical inputs.

Audio processing requires internet connectivity because the documented speech-recognition pipeline uses Google Speech Recognition.

### Project Outcome

SmartQ Generator demonstrates an end-to-end multilingual NLP pipeline that combines speech processing, language detection, translation, transformer-based question generation, rule-based classification, difficulty scoring, Text-to-Speech, editing, and document export within a single interactive application.

---

## 4. AI Human Face Generation using WGAN-GP

### Project Overview

This project implements a **Wasserstein Generative Adversarial Network with Gradient Penalty (WGAN-GP)** to generate synthetic human face images from random noise vectors.

The model was trained on a custom dataset of student face images and improved through experiments involving face detection and cropping, different image resolutions, checkpoint management, loss monitoring, and image-quality evaluation.

- **Category:** Generative AI | GANs | Deep Learning | Computer Vision
- **Project Type:** Synthetic Human Face Image Generation
- **GitHub Repository:** https://github.com/Sujan-lab-cell/Human_Face_Generator_WGAN.git
- **Notebook:** `image-gen (1).ipynb`

### Objectives

- Generate realistic human face images from random noise.
- Implement and understand GAN architectures.
- Improve training stability using WGAN-GP.
- Reduce mode collapse and training divergence.
- Evaluate generated image quality using Inception Score.
- Build an end-to-end image-generation pipeline.

### Dataset

The project uses a custom face dataset containing student face photographs.

- **Dataset type:** Custom Face Dataset
- **Total images:** 2,776
- **Image resolution used:** 64×64 and 128×128
- **Channels:** RGB
- **Formats:** JPG / PNG
- **Normalization:** `[-1, 1]`

The images were captured under relatively consistent lighting conditions and backgrounds.

### Face Detection, Cropping and Preprocessing

A **Haar Cascade Face Detector** was used to automatically detect and crop faces before training.

Face cropping was used to:

- Remove unnecessary background information.
- Focus the GAN on facial features.
- Improve training efficiency.
- Improve generated face quality.

The preprocessing pipeline included:

- Face detection.
- Face cropping.
- Resize to the selected training resolution.
- RGB conversion.
- Normalization to `[-1, 1]`.

### Data Augmentation

Horizontal random flipping was implemented:

```python
RandomFlip("horizontal")
```

The augmentation was intended to increase diversity, improve generalization, and reduce overfitting.

### WGAN-GP Architecture

The project uses **WGAN-GP**, which replaces the conventional GAN discriminator with a critic and adds a gradient-penalty term to improve training stability.

### Generator

The generator takes a **100-dimensional noise vector** as input and progressively upsamples it to generate a face image.

For the final 64×64 architecture, the generator follows the general structure:

The generator network takes a 100-dimensional noise vector as input, passes it through a Dense layer, Batch Normalization, and LeakyReLU activation, reshapes the tensor to 4x4x512, and applies sequential Conv2DTranspose layers with Batch Normalization and LeakyReLU activations before passing through a Tanh activation function to produce the final 64x64x3 face image.

### Critic

The critic evaluates the realism of an input image and outputs a single **Wasserstein score**.

The 64×64 critic uses a sequence of convolutional layers followed by a final dense output:

The critic network takes a 64x64x3 input image, processes it through sequential Conv2D layers (64, 128, 256, and 512 filters) with LeakyReLU activations, flattens the feature map, and outputs a single scalar Wasserstein score via a Dense layer.

The critic does not use a Sigmoid layer, Dropout, or Batch Normalization in the documented WGAN-GP critic architecture.

### Architecture Experiments

Two major image-generation configurations were evaluated.

### Experiment 1 — Face Cropping + 128×128

The first major configuration used Haar-Cascade face cropping and generated images at 128×128 resolution.

- **Face cropping:** Enabled
- **Resolution:** 128×128
- **GAN:** WGAN-GP
- **Inception Score:** 1.4404
- **Standard deviation:** 0.0573

The model produced recognizable face structures with improvements in facial symmetry, eye placement, mouth generation, and overall appearance.

### Experiment 2 — Face Cropping + 64×64

The architecture was then modified to generate 64×64 images using the cropped-face dataset.

- **Face cropping:** Enabled
- **Resolution:** 64×64
- **GAN:** WGAN-GP
- **Inception Score:** 1.5075
- **Standard deviation:** 0.0952

The 64×64 configuration showed more stable training, better overall face consistency, cleaner outputs, and a higher Inception Score on the available dataset.

### Architecture Comparison

- Feature: Face Cropping | 128×128 Model: Yes | 64×64 Model: Yes
- Feature: Resolution | 128×128 Model: 128×128 | 64×64 Model: 64×64
- Feature: Generator Output | 128×128 Model: 128×128×3 | 64×64 Model: 64×64×3
- Feature: Critic Input | 128×128 Model: 128×128×3 | 64×64 Model: 64×64×3
- Feature: Inception Score | 128×128 Model: 1.4404 | 64×64 Model: 1.5075
- Feature: Training Stability | 128×128 Model: Good | 64×64 Model: Better
- Feature: Training Time | 128×128 Model: Higher | 64×64 Model: Lower
- Feature: GPU Memory Usage | 128×128 Model: Higher | 64×64 Model: Lower

For the available dataset, the 64×64 configuration achieved the higher recorded Inception Score.

### Training Configuration

The final 64×64 configuration used:

```python
IMAGE_SIZE = 64

LATENT_DIM = 100

BATCH_SIZE = 64

GEN_LR = 1e-4
DISC_LR = 1e-4

CRITIC_ITERATIONS = 5

LAMBDA_GP = 10

BETA_1 = 0.0
BETA_2 = 0.9
```

### Training Stability

The project monitored generator and critic losses during training.

The documented final observed losses were approximately:

```text
Generator Loss ≈ -14
Critic Loss ≈ -26
```

The project reports:

- Stable training.
- No exploding gradients.
- No NaN losses.
- No observed divergence.

### Mode Collapse Analysis

Mode collapse was evaluated through visual inspection and diversity analysis.

The documented observations included:

- Different face shapes.
- Different hairstyles.
- Different genders.
- Different facial structures.

The project reports no significant mode collapse in the evaluated final configuration.

### Inception Score Evaluation

The project used **Inception Score (IS)** to evaluate generated image quality.

The best reported result was:

```text
Inception Score = 1.5075 ± 0.0952
```

The 64×64 configuration achieved a higher Inception Score than the earlier 128×128 configuration:

```text
128×128: 1.4404 ± 0.0573
64×64:   1.5075 ± 0.0952
```

The project attributes the improvement to factors including the relatively small dataset size, lower training complexity at 64×64, and face cropping that focuses learning on facial features.

### Problems Faced

### Generated Images Initially Appeared as Noise

Early training produced blurry noise rather than recognizable faces.

### Critic Became Too Strong

The critic could become disproportionately strong, making it difficult for the generator to learn useful facial patterns and causing unstable training dynamics.

### Checkpoint Confusion

Older checkpoints were accidentally reused across experiments.

### Mixed Outputs From Different Runs

Generated-image folders contained images from previous experiments, making comparisons between runs difficult.

### Blurry Facial Details

The model had difficulty generating detailed eyes, mouths, and facial textures.

Possible contributing factors identified in the project include:

- Relatively small dataset size of 2,776 images.
- Complexity of facial features.
- Limited image diversity.
- Background information distracting the model before face cropping.

### Solutions Implemented

### WGAN-GP

Wasserstein loss with gradient penalty was used to improve training stability and reduce mode collapse.

### Face Cropping

Automatic Haar-Cascade face detection and cropping was introduced to focus training on the face region.

### Critic Changes

Dropout was removed from the critic to support better feature extraction and convergence.

### Fresh Experiment Setup

Old checkpoints and generated images were cleared before new experiments to improve reproducibility and debugging.

### Quantitative Evaluation

Inception Score evaluation was added to quantitatively compare generated image quality between experiments.

### Key Features

- WGAN-GP implementation.
- Gradient penalty.
- Automatic face detection and cropping.
- TensorFlow dataset pipeline.
- Checkpoint saving.
- Generated-image saving.
- TensorBoard logging.
- Loss monitoring.
- Inception Score evaluation.
- GPU training support.

### Technology Stack

- Python
- TensorFlow
- Keras
- NumPy
- Matplotlib
- OpenCV
- Pillow
- tqdm
- PyTorch
- torchmetrics
- torch-fidelity

### Project Outcome

The project demonstrated an end-to-end WGAN-GP pipeline for synthetic human face generation.

The final documented 64×64 configuration, trained on the custom dataset of 2,776 cropped face images, achieved the best recorded Inception Score of **1.5075 ± 0.0952** and showed more stable training than the earlier 128×128 configuration.

### Future Improvements

The project documentation identifies several possible future improvements:

- Train on larger datasets.
- Explore higher-resolution generation such as 128×128.
- Calculate FID Score.
- Implement Spectral Normalization.
- Explore StyleGAN2.
- Improve eye and mouth generation.
- Add latent-space interpolation.
- Deploy the application using Streamlit.


---

## 5. Hybrid AI Medical Invoice & Diagnostic Report Parser (ISIRI Technologies / AyusLab)

### Project Overview

The AI Invoice Data to JSON Parser is a hybrid document-extraction system designed to extract structured information from pharmaceutical purchase invoices and convert it into a standardized JSON schema for inventory management.

It supports invoices provided as PDF, image, Excel, and CSV files. The extraction pipeline combines rule-based information extraction, lightweight NLP preprocessing, OCR, selective Gemini AI fallback, validation, and structured JSON generation.

- **Category:** AI | NLP | Backend | Document Intelligence
- **Project Type:** Pharmaceutical Invoice Parsing and Structured Data Extraction
- **GitHub Repository:** https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git

### Main Objective

The system is designed to transform unstructured or semi-structured pharmaceutical purchase invoices into structured JSON data that can be consumed by inventory-management systems.

The main goals are:

- Extract invoice information automatically.
- Support multiple input formats.
- Use deterministic extraction wherever possible.
- Use OCR for scanned/image-based invoices.
- Use Gemini AI selectively when critical information is missing.
- Validate extracted information before generating the final JSON.
- Provide structured output for downstream inventory processing.

### Supported Input Formats

The parser supports:

- PDF
- Images
- Excel
- CSV

For PDFs and images, OCR and document parsing techniques are used as appropriate. Excel and CSV inputs can be processed using Pandas.

### Extraction Pipeline

The system follows a hybrid extraction approach.

### Lightweight NLP Preprocessing

The preprocessing stage performs:

- Text cleaning.
- Line-break normalization.
- Whitespace normalization.
- Punctuation normalization.
- Dictionary-based OCR error correction.
- Case normalization for matching.
- Rule-based pattern preparation.

Stemming and lemmatization are intentionally not used because they could alter medicine names, invoice numbers, product codes, and batch numbers.

### OCR

**EasyOCR** is used for extracting text from scanned invoices and image-based documents.

The OCR output is passed through preprocessing and then into the rule-based extraction stage.

### Rule-Based Extraction

Regex rules and header/item patterns are used to extract structured information from pharmaceutical invoices.

#### Invoice Header

The system extracts fields such as:

- Invoice Number
- Invoice Date
- Due Date
- Supplier Details
- Buyer Details
- GSTIN
- Payment Type
- State

#### Line Items

The system extracts:

- Product Name
- Product Code
- Batch Number
- Expiry Date
- Quantity
- Free Quantity
- PTR
- Purchase Rate
- MRP
- Discount
- GST
- Taxable Amount
- Net Amount

#### Invoice Totals

The system extracts:

- Subtotal
- Discount Total
- Tax Total
- Grand Total

### Validation Layer

The extracted data is checked before producing the final structured output.

Validation includes:

- Required header-field checks.
- Required line-item checks.
- Invoice total consistency.
- Tax calculation checks.
- Mathematical verification.
- Human-review requirements.

The validation stage helps identify missing or inconsistent critical information.

### Gemini AI Fallback

Gemini AI is used as a **selective fallback**, rather than being executed for every invoice.

The fallback is triggered when important information is missing, including cases such as:

- Invoice Number is missing.
- Invoice Date is missing.
- Buyer Information is missing.
- Critical pricing information is missing.

When the required information is available through local extraction, the system can complete the extraction without calling the LLM.

### Structured JSON Output

The final output is generated using **Pydantic v2** and contains structured information such as:

- Document Metadata
- Invoice Information
- Supplier Details
- Buyer Details
- Line Items
- Pricing
- Tax Information
- Totals
- Validation Information
- Review Status
- Raw Extraction Information

Generated JSON files are stored in:

```text
outputs/<invoice_name>.json
```

### API Architecture

The parser is implemented as a backend service using **FastAPI**.

The application exposes an API that allows an external system to submit invoice files and receive structured JSON data.

The API can support authorization using bearer tokens.

### AyusLab Integration

The invoice parser is deployed as an independent FastAPI service so that the AyusLab application can send invoice files to the backend and receive extracted invoice data as structured JSON.

The integration flow is:

The AyusLab integration workflow accepts an uploaded invoice from the AyusLab application, passes it to the Invoice Parser API for OCR and rule-based extraction, applies Gemini AI fallback when required, performs validation, returns a structured JSON response, and sends the extracted data to the AyusLab backend for inventory processing.

The resulting structured data can then be used by the AyusLab backend for downstream inventory matching and purchase-entry workflows.

### Backend Components

The project backend is organized into modules covering areas such as:

- AI
- Extraction
- Inventory
- OCR
- Parsers
- Schemas
- Services
- Utilities
- Core application functionality
- Tests and sample invoices
- Output generation

### Technology Stack

- Python
- FastAPI
- EasyOCR
- Pandas
- Pydantic v2
- OpenCV
- RapidFuzz
- Google Gemini API
- Regular Expressions (Regex)

### Key Design Approach

The main design principle is a **hybrid extraction pipeline**:

1. Parse the document according to its input type.
2. Perform OCR when required.
3. Clean and normalize extracted text.
4. Extract structured fields using deterministic rules and patterns.
5. Validate the extracted information.
6. Use Gemini AI only when critical information is missing.
7. Merge and validate the extracted information.
8. Generate standardized JSON output.

This approach keeps routine extraction local and deterministic while reserving LLM processing for cases where additional interpretation is needed.

### Integration and Future Work

The project documentation identifies the following remaining integration areas:

- Inventory Master Integration
- Exact and fuzzy Product Mapping
- Purchase Entry API Integration
- Automated Inventory Updates

### Project Outcome

The project demonstrates a hybrid approach to pharmaceutical invoice document intelligence, combining OCR, NLP preprocessing, deterministic extraction, selective LLM fallback, validation, and structured JSON generation.

Its primary purpose is to convert invoice documents into machine-readable structured data that can support pharmaceutical inventory-management workflows.


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

## 6. FlyRank AI Internship — Machine Learning Engineering & Search Ranking Capstone

## 1. Internship Overview

**Company:** FlyRank.ai / FlyRank AI
**Role:** Machine Learning Engineering Intern
**Internship Dates:** 01 July 2026 – 09 September 2026
**Primary Specialization:** Machine Learning

During the internship, I worked on practical machine-learning assignments and a capstone focused on applying ML to real-world **Google Search ranking and discoverability data**.

The internship included **12 practical assignments** covering areas such as:

- Data wrangling
- Embeddings and clustering
- Intent modeling
- Opportunity modeling
- Insight-to-action workflows
- Machine-learning experimentation
- Search-performance analysis
- Human-in-the-loop decision support

The major capstone focused on identifying webpages that were at risk of search-performance decline and using machine learning to prioritize those webpages for human review.

---

## 2. Main Internship Objective

The main ML problem developed during the capstone was:

> **Identify webpages that may experience a decline in Google Search clicks and prioritize those pages for human review.**

The system was designed as a **decision-support and prioritization system**, rather than an automated content-changing system.

The model answers essentially:

> **Which webpages should humans investigate first?**

It does **not** claim to determine Google's ranking algorithm, prove causality, or automatically determine what content changes should be made.

---

## 3. Google Search Ranking & Discoverability Work

A major part of the internship involved analyzing historical search-performance data and developing models to identify pages at risk of declining search performance.

The capstone was titled:

**Google Search Ranking & Discoverability Capstone**

The work involved:

1. Aggregating historical search-performance information at the content-page level.
2. Defining a future decline target using May 2026 performance.
3. Restricting model inputs to information available before the prediction period.
4. Engineering historical search-performance features.
5. Establishing a rule-based baseline.
6. Comparing multiple machine-learning model families.
7. Using client-grouped cross-validation.
8. Checking for feature leakage.
9. Evaluating models using Precision\@K.
10. Producing a ranked webpage review queue.
11. Creating a human-in-the-loop content action playbook.
12. Publishing the capstone as a research paper through GitHub Pages.

---

## 4. Dataset

The capstone used an anonymized FlyRank search-performance dataset.

### Full aggregated population

- **407,121 content pages**
- **70 clients**

### Modeling population

After applying the eligibility criteria:

- **16,513 eligible content pages**
- **36 distinct clients**

The modeling unit was:

> **One content page**

The dataset contained historical search-performance information used to construct features from the period before the prediction window.

---

## 5. Time Windows

The capstone used historical information available before the target period.

### Feature / historical period

Historical features were restricted to information available **before 01 May 2026**.

The methodology used historical search-performance information from the preceding months, including February and April 2026 signals.

### Target period

The target outcome was measured during:

**01 May 2026 – 31 May 2026**

This separation was important for preventing future May performance from being used as an input to predict May decline.

---

## 6. Target Definition

The target was a binary webpage decline indicator.

A webpage was labelled as declining when:

```text
may_clicks < 0.8 × april_clicks
```

Therefore:

```text
decline = (may_clicks < 0.8 * april_clicks).astype(int)
```

This means a page was considered to have declined when its May clicks were less than **80% of its April clicks**.

### Target distribution

Among the 16,513 eligible pages:

- **9,640 non-declining pages — 58.38%**
- **6,873 declining pages — 41.62%**

The target base rate was therefore:

**41.62%**

---

## 7. Eligibility Criteria

Pages were included in the modeling population only when both conditions were satisfied:

```text
impressions_total >= 1000
```

and

```text
april_clicks >= 10
```

This resulted in:

**16,513 eligible pages across 36 clients.**

---

## 8. Feature Engineering

The final model used **9 pre-May features**.

### 1. `impressions_total`

Total historical search impressions before May 2026.

### 2. `clicks_total`

Total historical search clicks before May 2026.

### 3. `april_impressions`

Search impressions during April 2026.

### 4. `april_clicks`

Search clicks during April 2026.

### 5. `feb_clicks`

Search clicks during February 2026.

### 6. `momentum`

Historical click momentum calculated as:

```text
april_clicks / (feb_clicks + 1.0)
```

### 7. `ctr`

Historical click-through rate:

```text
(clicks_total / impressions_total) × 100
```

### 8. `active_days`

Number of days with impressions greater than zero before May 2026.

### 9. `weighted_position`

Impression-weighted search position.

`gsc_avg_position == 0` was treated as missing/non-position information when calculating the weighted position.

---

## 9. Leakage Prevention

Preventing target leakage was an important part of the ML work.

The model was designed so that information from the future May target period was not used as a prediction feature.

The final feature set therefore used **pre-May historical information only**.

The methodology explicitly excluded:

- May performance information
- Page/client identifiers as predictive features
- Future/trend fields that would expose the target period

The final evaluation also used client-grouped validation so that pages from the same client were not simultaneously used for training and validation.

---

### 10. Baseline Method

A rule-based baseline was established before comparing machine-learning models.

The baseline flagged pages using:

```text
april_clicks < march_clicks
```

Flagged pages were then ranked by:

```text
april_impressions
```

The baseline Precision\@K results were:

- Precision@10: 0.400
- Precision@20: 0.370
- Precision@50: 0.392 (Primary baseline benchmark)
- Precision@100: 0.388

The primary benchmark used for comparison was therefore:

**Baseline Precision\@50 = 0.392**

---

### 11. Machine-Learning Models Tested

Multiple model families were evaluated using the same modeling methodology.

The tested approaches were:

1. Logistic Regression
2. Decision Tree
3. Random Forest
4. HistGradientBoosting
5. XGBoost
6. LightGBM
7. CatBoost
8. Rule-based Baseline

This provided a controlled comparison between:

- Linear modeling
- Single-tree modeling
- Bagging
- Gradient boosting
- Specialized boosting implementations

---

### 12. Model Comparison

The final benchmark comparison was:

- Baseline: P@10 = 0.400, P@20 = 0.370, P@50 = 0.392, P@100 = 0.388
- Logistic Regression: P@10 = 0.380, P@20 = 0.400, P@50 = 0.424, P@100 = 0.438
- Decision Tree: P@10 = 0.400, P@20 = 0.390, P@50 = 0.324, P@100 = 0.346
- HistGradientBoosting: P@10 = 0.440, P@20 = 0.420, P@50 = 0.436, P@100 = 0.442
- LightGBM: P@10 = 0.450, P@20 = 0.425, P@50 = 0.438, P@100 = 0.444
- CatBoost: P@10 = 0.450, P@20 = 0.430, P@50 = 0.440, P@100 = 0.445
- XGBoost: P@10 = 0.450, P@20 = 0.430, P@50 = 0.442, P@100 = 0.446
- Random Forest: P@10 = 0.460, P@20 = 0.430, P@50 = 0.444, P@100 = 0.448

---

### 13. Final Random Forest Model

The final best-performing model in the controlled benchmark was:

**Random Forest Classifier**

Configuration:

```text
n_estimators = 100
max_depth = 5
random_state = 42
```

The Random Forest achieved:

- **Precision\@10 = 0.460**
- **Precision\@20 = 0.430**
- **Precision\@50 = 0.444**
- **Precision\@100 = 0.448**

The most important benchmark was:

> **Random Forest Precision\@50 = 0.444**

---

### 14. Improvement Over Baseline

The baseline achieved:

**Precision\@50 = 0.392**

The Random Forest achieved:

**Precision\@50 = 0.444**

Absolute improvement:

**+0.052**

or:

**+5.2 percentage points**

Relative improvement:

**approximately +13.26%**

Therefore, the final Random Forest improved the Precision\@50 benchmark from **39.2% to 44.4%**.

---

### 15. Random Forest Feature Importance

The actual Random Forest Gini feature importances were:

- Rank 1: `momentum` (Importance: 0.2899)
- Rank 2: `april_impressions` (Importance: 0.2203)
- Rank 3: `impressions_total` (Importance: 0.1921)
- Rank 4: `ctr` (Importance: 0.0634)
- Rank 5: `feb_clicks` (Importance: 0.0633)
- Rank 6: `weighted_position` (Importance: 0.0590)
- Rank 7: `clicks_total` (Importance: 0.0540)
- Rank 8: `april_clicks` (Importance: 0.0512)
- Rank 9: `active_days` (Importance: 0.0067)

The three largest importance values were associated with:

- Historical momentum
- April impressions
- Total historical impressions

These values represent **model feature importance**, not causal explanations.

---

### 16. Validation Methodology

The capstone used:

**5-fold GroupKFold cross-validation**

The grouping variable was the client identifier (`client_hash_id`).

The purpose was to prevent pages belonging to the same client from appearing in both the training and validation sets.

For every fold, the methodology explicitly checked:

```text
set(train_clients).isdisjoint(set(validation_clients))
```

The client-overlap results were:

```text
[0, 0, 0, 0, 0]
```

Therefore, there was **zero client overlap across all five validation folds**.

All major models were evaluated using the same grouped validation framework and deterministic ranking/tie-breaking procedure.

---

### 17. Deterministic Ranking

For Precision\@K evaluation, model predictions were ranked using deterministic tie-breaking:

1. Prediction score — descending
2. `april_clicks` — descending
3. `content_hash_id` — ascending

This ensured reproducible ranking when multiple pages received identical prediction scores.

---

### 18. Random Forest Fold Results

Random Forest Precision\@50 across the five client-grouped validation folds was:

- Fold 0: Precision@50 = 0.44
- Fold 1: Precision@50 = 0.32
- Fold 2: Precision@50 = 0.46
- Fold 3: Precision@50 = 0.64
- Fold 4: Precision@50 = 0.36
- Mean: Precision@50 = 0.444

The variation across folds was retained rather than presenting only the aggregate score.

---

### 19. Human-in-the-Loop Workflow

The ML system was designed as a **human-in-the-loop prioritization system**.

The model does not automatically modify webpages.

Instead:

The FlyRank workflow ingests historical search data, executes feature engineering, feeds features into the ML model to compute risk and ranking scores, generates a prioritized webpage queue for human review, and guides human content investigation and action.

The principle used in the capstone was:

> **The model recommends WHERE TO LOOK; the human decides WHAT TO DO.**

This framing prevents the model from being treated as an autonomous SEO decision-maker.

---

### 20. Content Action Playbook

The internship work included an ML-driven **content action playbook**.

The model output was used to create a ranked queue of webpages that should receive human attention.

The action workflow emphasized:

- Prioritizing pages with strong model signals
- Investigating pages with declining search visibility
- Using historical signals as supporting evidence
- Reviewing pages before making content changes
- Monitoring the model and outcomes before changing the modeling system

The final system was therefore intended to support human content/SEO workflows rather than automatically changing content.

---

### 21. Error Analysis

The capstone included false-positive and false-negative analysis.

Observed false positives were associated with:

- Lower historical momentum
- Poorer historical search position

For example, the observed median momentum was approximately:

**1.45 for false positives vs. 3.40 for false negatives**

The observed median weighted position was:

**13.96 for false positives vs. 5.74 for false negatives**

Observed false negatives included pages with:

- Higher historical momentum
- Higher April click volume

These findings were explicitly treated as **descriptive associations**, not causal explanations of search-performance decline.

---

### 22. Precision\@50 Review Interpretation

At Precision\@50, the Random Forest mean result of **0.444** corresponds approximately to:

- **22.2 true declining pages per 50 reviewed pages**
- **27.8 false positives per 50 reviewed pages**

The metric was interpreted as a prioritization-quality measure rather than as a statement that the model could automatically diagnose why a page declined.

---

### 23. Capstone Project

The final capstone was:

### Google Search Ranking & Discoverability Capstone

The capstone combined:

- Data preparation
- Target definition
- Feature engineering
- Leakage prevention
- Baseline development
- Multiple ML model comparisons
- Client-grouped validation
- Precision\@K evaluation
- Feature-importance analysis
- Error analysis
- Human-in-the-loop recommendations
- Research-paper development

The final capstone notebook was:

```text
work/notebooks/capstone.ipynb
```

It was executed from top to bottom with **0 errors**.

---

### 24. Research Paper

The capstone was turned into a deployed research paper covering:

- Abstract
- Problem statement
- Data
- Methodology
- Target definition
- Features
- Baseline
- Validation design
- Leakage checks
- Model results
- Limitations
- Honest framing
- Ranked recommendations
- Reproducibility
- Acknowledgments/data credit
- ML-11 research-paper material
- ML-12 storytelling/demo material

The research paper was deployed using **GitHub Pages**.

### Research paper

[https://sujan-lab-cell.github.io/flyrank-ml-internship/](https://sujan-lab-cell.github.io/flyrank-ml-internship/)

---

### 25. GitHub Repositories

### FlyRank AI Information Repository

https://github.com/Sujan-lab-cell/FlyRank_ai_info

### FlyRank ML Internship Repository

https://github.com/Sujan-lab-cell/flyrank-ml-internship

The ML internship repository contains the technical capstone work, notebooks, outputs, figures, and research-paper material.

---

### 26. Technical Stack

The internship/capstone work used technologies and libraries including:

### Programming

- Python

### Data Processing

- Pandas
- NumPy
- DuckDB

### Machine Learning

- scikit-learn
- Random Forest
- Logistic Regression
- Decision Tree
- HistGradientBoosting
- XGBoost
- LightGBM
- CatBoost

### Analysis / Visualization

- Matplotlib
- Jupyter Notebook

### Development / Version Control

- Git
- GitHub

### Data / ML Resources

- Hugging Face

---

### 27. ML Concepts Applied

The internship provided practical experience with:

- Supervised learning
- Binary classification
- Ranking
- Precision\@K
- Baseline modeling
- Feature engineering
- Feature importance
- Model comparison
- Bagging
- Boosting
- Random Forests
- Gradient boosting
- Cross-validation
- GroupKFold
- Client-level validation
- Data leakage detection
- Leakage prevention
- Error analysis
- False-positive analysis
- False-negative analysis
- Deterministic ranking
- Human-in-the-loop ML
- Decision-support systems
- Responsible ML framing
- Reproducible experimentation

---

### 28. Data Leakage and Responsible ML

A significant methodological focus was ensuring that the model did not receive information from the future prediction period.

The final methodology:

- Used only pre-May information as model features.
- Defined the target separately using May performance.
- Excluded future performance information from the feature set.
- Used client-grouped validation.
- Verified zero client overlap across validation folds.
- Compared all models on the same validation framework.
- Avoided causal claims about Google Search ranking.
- Framed the model as a prioritization tool rather than an autonomous decision-maker.

---

### 29. Model-Family Experiment

An additional controlled experiment compared several model families under the same evaluation setup.

The comparison included:

**Baseline → Logistic Regression → Decision Tree → HistGradientBoosting → LightGBM → CatBoost → XGBoost → Random Forest**

The experiment showed that, for the main 16,513-page benchmark:

- Random Forest: **0.444 P\@50**
- XGBoost: **0.442 P\@50**
- CatBoost: **0.440 P\@50**
- LightGBM: **0.438 P\@50**
- HistGradientBoosting: **0.436 P\@50**
- Logistic Regression: **0.424 P\@50**
- Baseline: **0.392 P\@50**
- Decision Tree: **0.324 P\@50**

Therefore, **Random Forest was retained as the best-performing model for the final capstone benchmark**.

---

### 30. Internship Deliverables

Known deliverables from the internship work include:

- Practical ML assignments
- ML notebooks
- Capstone notebook
- Data-processing/ML scripts
- Model evaluation
- Precision\@K analysis
- Feature-importance analysis
- Error analysis
- Ranked action-playbook queue
- Metrics JSON
- Evaluation figures
- Research paper
- GitHub repository
- GitHub Pages deployment

The capstone repository contains the relevant implementation artifacts under the `work/` and `docs/` directories.

---

### 31. Internship Certificate

The internship certificate records completion of the **Machine Learning Internship Program at FlyRank.ai**.

The recorded internship period is:

**01 July 2026 – 09 September 2026**

The certificate identifies the internship as a **Machine Learning Internship Program**.

---

### 32. Letter of Recommendation

The recommendation-letter information identifies the role as:

**Machine Learning Engineering Intern**

The letter describes the internship as involving practical machine-learning work and recognizes the work completed during the internship.

It also identifies **Machine Learning** as the primary specialization.

---

### 33. Resume-Level Summary

A concise factual summary of the internship is:

> **Machine Learning Engineering Intern at FlyRank.ai (Jul 2026 – Sep 2026), completing 12 practical ML assignments and a Google Search Ranking & Discoverability Capstone. Built and evaluated models for prioritizing webpages at risk of search-performance decline using historical search signals, leakage-safe feature engineering, and 5-fold client-grouped GroupKFold validation. Compared seven ML approaches and a rule-based baseline, with Random Forest achieving 0.444 Precision\@50 versus 0.392 baseline (+5.2 percentage points). Developed a human-in-the-loop content prioritization workflow and deployed the resulting research paper through GitHub Pages.**

---

### Information Requiring Confirmation

- **Exact official legal/company naming:** The conversation uses both **FlyRank AI** and **FlyRank.ai**. The certificate/recommendation-letter context uses **FlyRank.ai**, but the exact legal entity name is not established here.
- **Exact department/team name:** No specific department/team name has been established.
- **Exact location/work arrangement:** The available information does not establish whether the internship should formally be described as remote, hybrid, or on-site.
- **Complete list of all 12 assignments:** The conversation confirms 12 practical assignments and gives their broad areas, but it does **not** contain a verified complete title-by-title list of all 12 assignments.
- **Exact dataset column inventory beyond the nine final modeling features:** Only the features explicitly documented above are confirmed.
- **Exact raw dataset row count before aggregation:** The confirmed **407,121** figure refers to the full aggregated content-page population; a separate raw-record count has not been established.
- **Exact hyperparameter-tuning procedure:** The documented model-family experiment used fixed configurations; a separate comprehensive hyperparameter-search result is not confirmed.
- **Exact certificate number, certificate ID, or issuing authority details:** Not established.
- **Exact recommendation-letter issue date:** Not established.
- **Any claims about Google Search algorithm changes or causal effects of content refresh:** These are **not established** and should not be represented as findings of the internship.
- **The sample-dataset P\@50 values such as 0.9640:** These were explicitly identified during the work as sample-evaluation results and were removed from the public research paper. They should **not** be presented as the final capstone benchmark.
- **The final authoritative benchmark:** The confirmed final benchmark is **Random Forest P\@50 = 0.444 vs. baseline P\@50 = 0.392**, evaluated on the 16,513-page eligible population with client-grouped validation.

---

## 8. E-Commerce Sales Dashboard
## 7. E-commerce Sales Dashboard (Power BI)

### Project Overview

**Project:** E-commerce Sales Dashboard

This project is an **interactive Power BI dashboard** designed to analyze e-commerce sales performance.

The dashboard provides insights into:

- Revenue and sales
- Profitability
- Customer purchasing behavior
- Product performance
- Regional/state performance
- Monthly profit trends

The dashboard uses interactive visualizations and filters to help analyze business performance.

### Objective

The project aims to:

- Analyze sales and profit trends.
- Identify profitable and loss-making regions.
- Understand customer purchasing behavior.
- Evaluate category and sub-category performance.
- Support business decision-making using interactive data visualization.

### Dataset

The project uses two connected tables: **Orders** and **Details**.

### Orders Table

Fields documented in the repository include:

- Order ID
- Customer Name
- State
- City
- Order Date

### Details Table

Fields documented in the repository include:

- Amount (Sales)
- Profit
- Quantity
- Category
- Sub-Category
- Payment Mode
- ADV (Average Value)

The two tables are connected using:

```text
Order ID
```

### Key Performance Indicators

The dashboard tracks the following KPIs:

- **Total Sales (Amount)**
- **Total Quantity Sold**
- **Total Profit**
- **Profit Margin (%)**
- **Average Order Value (ADV)**

Additional measures used in the project include:

- Profit per Order
- Sales per Unit
- Profit Category

### DAX Measures

The repository documents the following DAX measures.

### Total Sales

```DAX
Total Sales = SUM(Details[Amount])
```

### Total Profit

```DAX
Total Profit = SUM(Details[Profit])
```

### Total Quantity

```DAX
Total Quantity = SUM(Details[Quantity])
```

### Profit Margin

```DAX
Profit Margin % =
DIVIDE(
    SUM(Details[Profit]),
    SUM(Details[Amount]),
    0
)
```

### Average Order Value

```DAX
Average Order Value =
DIVIDE(
    SUM(Details[Amount]),
    DISTINCTCOUNT(Orders[Order ID]),
    0
)
```

### Profit per Order

```DAX
Profit per Order =
DIVIDE(
    SUM(Details[Profit]),
    DISTINCTCOUNT(Orders[Order ID]),
    0
)
```

### Sales per Unit

```DAX
Sales per Unit =
DIVIDE(
    SUM(Details[Amount]),
    SUM(Details[Quantity]),
    0
)
```

### Profit Category

```DAX
Profit Category =
IF(
    [Profit Margin %] > 0,
    "Profit",
    IF(
        [Profit Margin %] < 0,
        "Loss",
        "Neutral"
    )
)
```

### Dashboard Filters

The dashboard provides slicers for:

- State
- Category
- Order Date

These filters allow users to dynamically explore the sales data.

### Visualizations

The documented dashboard contains:

- **Profit Margin by State**
- **Profit by Month**
- **Quantity by Category**
- **Quantity by Payment Mode**
- **Profit by Sub-Category**
- **Sales vs Profit by State**

### Dashboard Features

The repository documents these dashboard features:

- Interactive slicers
- Conditional formatting using Red–Yellow–Green logic
- Clean dashboard UI
- Dynamic filtering

### Key Business Insights

The project documentation identifies several observations:

### Regional profitability

Some regions can be loss-making despite generating high sales.

### State-level margins

Profit margins vary across states.

### Category performance

Some categories have high sales/quantity volume but relatively low profit.

### Payment behavior

COD and UPI are documented as the most commonly used payment modes in the analyzed dataset.

### Monthly trends

Monthly profit shows fluctuations over time.

### Business Use

The dashboard can be used to:

- Identify loss-making regions.
- Examine state-level profitability.
- Compare sales with profit.
- Analyze category and sub-category performance.
- Monitor monthly profit trends.
- Examine customer payment behavior.
- Support data-driven business decisions.

### Tools and Technologies

- **Microsoft Power BI**
- **DAX**
- **Data Modeling**

### Dashboard Assets

The GitHub repository contains dashboard-related images:

```text
cm_Dash.png
profit.png
loss.png
```

`cm_Dash.png` is the main dashboard preview.

`profit.png` represents a positive/high-performance profit scenario.

`loss.png` represents a negative/loss scenario used for business issue detection.

### Portfolio Summary

> Built an interactive E-commerce Sales Dashboard in Power BI to analyze sales, profit, customer purchasing behavior, regional performance, and product/category trends. Created DAX measures for sales, profit, quantity, profit margin, average order value, profit per order, and sales per unit, with interactive slicers and business-focused visualizations.

### Interview Summary

A concise explanation:

> I built an interactive Power BI dashboard for e-commerce sales analysis. I connected Orders and Details tables using Order ID, created DAX measures for important business KPIs such as sales, profit, profit margin, and average order value, and built visuals for state, category, payment mode, sub-category, and monthly performance. The dashboard was designed to help identify loss-making regions and understand profitability patterns.

### Repository

GitHub:

https://github.com/Sujan-lab-cell/Power_Bi_lab_cell.git

### Source Notes

This knowledge file is based on the current repository README and repository contents.

The project documentation does **not** establish exact numerical KPI totals, dashboard refresh frequency, dataset date range, number of customers/orders, or a quantified business impact. Those details should not be added to the portfolio chatbot unless supported by another source.


---

### 8. Car & Pedestrian Detection using YOLOv8

### Project Overview

**Project:** Car & Pedestrian Detection using YOLOv8

This project implements a deep learning-based object detection system capable of detecting **cars and pedestrians** in images using **YOLOv8**.

The model was trained on a custom annotated dataset and evaluated using standard object-detection metrics including Precision, Recall, mAP@0.5, and mAP@0.5:0.95.

The project is positioned as a practical computer-vision system relevant to applications such as traffic monitoring, surveillance, pedestrian safety, autonomous-vehicle perception, and intelligent transportation systems.

### Objectives

The project objectives were to:

- Create a dataset containing cars and pedestrians.
- Annotate the data in YOLO object-detection format.
- Train a YOLOv8 object-detection model.
- Evaluate the trained model using standard metrics.
- Analyze failure cases and model limitations.

### Dataset

The custom dataset contains images of **cars and pedestrians** collected using filtered images from publicly available datasets.

### Original dataset

- Training: **656 images (70%)**
- Validation: **183 images (20%)**
- Testing: **92 images (10%)**
- Total source images: **931**
- Classes:
  - `0` → Car
  - `1` → Pedestrian

Many scenes contain both classes, allowing multi-class detection in complex scenes.

### Annotation Format

The dataset uses YOLO bounding-box annotations:

```text
(class_id, x_center, y_center, width, height)
```

Coordinates are normalized relative to image width and height.

### Preprocessing and Augmentation

### Preprocessing

- Auto-orientation to correct image rotation.
- Resizing to **640 × 640 pixels**.

### Augmentation

- Brightness adjustment: **-10% to +10%**
- Gaussian blur: up to **1.2 px**
- **3× dataset augmentation**

After augmentation:

- Training: **1964 images**
- Validation: **183 images**
- Testing: **92 images**
- Total: **2239 images**

### Model

The project uses **YOLOv8n (Nano)**.

The model was selected because it is lightweight and suitable for fast object detection.

### Training configuration

```text
Model: YOLOv8n
Image size: 640 × 640
Epochs: 100
Batch size: 8
Early stopping: enabled
Patience: 10
```

Training curves in the repository indicate that training and validation behavior stabilized around **25–30 epochs**.

### Model Performance

Final reported evaluation metrics:

- Precision: 0.777
- Recall: 0.751
- mAP@0.5: 0.769
- mAP@0.5:0.95: 0.556

These metrics describe the reported test performance of the trained YOLOv8n detector.

### F1 Score and Confidence Threshold

The highest reported F1 score was:

```text
F1 Score = 0.76
Confidence Threshold = 0.389
```

The confidence threshold was tuned using the F1 curve.

### Detection Behavior

The model can detect multiple cars and pedestrians in the same scene and produces bounding boxes around detected objects.

The repository includes example detection results and separate unseen real-world image evaluations.

### Real-World Evaluation

The trained detector was evaluated on unseen real-world images.

Reported observations include:

- Accurate detection in well-lit scenes.
- Detection of multiple cars and pedestrians.
- Generalization to new images.

These observations are qualitative observations from the project documentation rather than an additional quantified benchmark.

### Failure Cases and Limitations

The project documents several failure cases:

### False negatives

Some objects can be missed completely.

### False positives

The model can produce incorrect detections.

### Crowded scenes and occlusion

Overlapping or partially hidden objects can be difficult to detect reliably.

### Small objects

Small cars or pedestrians may be harder to detect.

These cases identify areas where the detector can be improved.

### Improvements Applied

The project applied:

- Brightness and blur augmentation.
- Increased training-set size through augmentation.
- Image preprocessing and resizing.
- Early stopping to reduce overfitting.
- Confidence-threshold tuning using the F1 curve.
- Correction of annotation inconsistencies.

### Possible Future Improvements

The repository identifies these potential directions:

- Improve detection of smaller and heavily occluded objects.
- Increase dataset diversity.
- Train larger YOLO models.

### Technical Stack

- Python 3.9
- YOLOv8
- Object Detection
- Deep Learning
- Roboflow
- OpenCV

The repository also uses YOLO-compatible annotated data and contains result visualizations for training, evaluation, detection, and failure analysis.

### Key ML / Computer Vision Concepts

This project demonstrates practical experience with:

- Object detection
- YOLO architecture
- Bounding-box detection
- Multi-class detection
- Dataset annotation
- Image preprocessing
- Data augmentation
- Train/validation/test splitting
- Precision
- Recall
- mAP@0.5
- mAP@0.5:0.95
- F1-score analysis
- Confidence-threshold tuning
- Failure-case analysis
- Real-world evaluation

### Portfolio Summary

> Built a YOLOv8n-based computer-vision system for detecting cars and pedestrians in images using a custom annotated dataset. Applied image preprocessing, augmentation, early stopping, and confidence-threshold tuning, achieving **0.777 precision, 0.751 recall, 0.769 mAP@0.5, and 0.556 mAP@0.5:0.95**. Also analyzed false negatives, false positives, occlusion, and small-object detection limitations.

### Repository

GitHub:
https://github.com/Sujan-lab-cell/YOLO-Pedestrian-Car-Detection.git

### Source Notes

This knowledge file is based on the repository's current README. It does not add unverified information about the exact training hardware, inference speed/FPS, model parameter count, dataset source names, or per-class metrics because those details are not established in the README.


---

## 9. Bank Management System (Java Swing & MySQL)

### Project Overview

**Project:** Bank Management System

This is a Java Swing-based desktop ATM/Bank Management application backed by a **MySQL relational database**.

The application simulates common banking operations. Users can create a bank account through a multi-page registration flow, log in using their card number and PIN, and perform banking transactions such as deposits, withdrawals, balance enquiry, PIN changes, and viewing a mini statement.

The project demonstrates practical use of **Java GUI development, JDBC, MySQL, relational database design, and transaction-oriented application logic**.

### Objectives

The project was designed to:

- Build a desktop banking/ATM interface.
- Implement account registration and authentication.
- Store customer and transaction information in MySQL.
- Implement common banking operations.
- Demonstrate integration between Java and a relational DBMS.

### Main Features

- User Sign Up: 3-page registration process for personal, additional, and account details
- Login: Authentication using Card Number + PIN
- Deposit: Deposit a custom amount
- Withdrawal: Withdraw a custom amount, up to Rs. 10,000 per transaction
- Fast Cash: Preset withdrawals of Rs. 100, 500, 1000, 2000, 5000, or 10000
- Mini Statement: Displays the last 10 transactions
- Balance Enquiry: Calculates and displays current balance
- PIN Change: Changes the 4-digit ATM PIN
- Exit: Safely exits the application

### Account Registration Flow

The signup process is divided into three pages.

### Page 1 — Personal Details

Collects:

- Name
- Father's name
- Date of birth
- Gender
- Email
- Marital status
- Residential address
- City
- Pincode
- State

### Page 2 — Additional Details

Collects:

- Religion
- Category
- Annual income
- Education
- Occupation
- PAN number
- Aadhar number
- Senior-citizen status
- Existing-account status

### Page 3 — Account and Card Setup

Collects/selects:

- Account type
- Banking facilities

The application also generates a card number and PIN for the account.

### Authentication

The login screen accepts:

- Card Number
- PIN

After successful authentication, the user is taken to the main ATM menu.

### Banking Operations

### Deposit

Allows the user to enter a custom deposit amount and records the transaction in the `bank` table.

### Withdrawal

Allows a custom withdrawal amount with a maximum limit of **Rs. 10,000 per transaction**.

The application checks whether sufficient balance is available before processing the withdrawal.

### Fast Cash

Provides preset withdrawal amounts:

```text
Rs. 100
Rs. 500
Rs. 1,000
Rs. 2,000
Rs. 5,000
Rs. 10,000
```

Balance is checked before the amount is debited.

### Balance Enquiry

The balance is calculated by:

```text
Total Deposits - Total Withdrawals
```

for the logged-in PIN.

### Mini Statement

Displays the last **10 transactions**, including:

- Date
- Transaction type
- Amount

The interface also displays a masked card number and the current balance.

### PIN Change

Allows the user to change the 4-digit PIN.

The README states that PIN updates are intended to propagate across:

- `bank`
- `login`
- `signupthree`

### Database

**Database name:** `banksystem`

The project uses MySQL and JDBC.

### `login`

Stores login/card information.

- `form_number` (Type: VARCHAR): Application/form number
- `card_number` (Type: VARCHAR): Card number
- `pin_number` (Type: VARCHAR): PIN

### `signup`

Stores personal/customer information.

- `form_number` (Type: VARCHAR): Application form number
- `name` (Type: VARCHAR): Full name
- `father_name` (Type: VARCHAR): Father's name
- `dob` (Type: VARCHAR): Date of birth
- `gender` (Type: VARCHAR): Gender
- `email` (Type: VARCHAR): Email
- `marital_status` (Type: VARCHAR): Marital status
- `address` (Type: VARCHAR): Address
- `city` (Type: VARCHAR): City
- `pincode` (Type: VARCHAR): Postal PIN code
- `state` (Type: VARCHAR): State

### `signuptwo`

Stores additional customer information.

- `form_number` (Type: VARCHAR): Related form number
- `religion` (Type: VARCHAR): Religion
- `category` (Type: VARCHAR): Category
- `income` (Type: VARCHAR): Annual income range
- `education` (Type: VARCHAR): Education
- `occupation` (Type: VARCHAR): Occupation
- `pan_number` (Type: VARCHAR): PAN number
- `aadhar_number` (Type: VARCHAR): Aadhar number
- `senior_citizen` (Type: VARCHAR): Senior citizen flag
- `existing_account` (Type: VARCHAR): Existing-account flag

### `signupthree`

Stores account/card setup information.

- `form_number` (Type: VARCHAR): Related form number
- `account_type` (Type: VARCHAR): Account type
- `card_number` (Type: VARCHAR): Generated card number
- `pin_number` (Type: VARCHAR): Generated PIN
- `facilities` (Type: VARCHAR): Selected banking facilities

### `bank`

Stores transaction records.

- `pin_number` (Type: VARCHAR): Transaction/account reference
- `date` (Type: VARCHAR): Transaction date and time
- `type` (Type: VARCHAR): Deposit or Withdrawal
- `amount` (Type: VARCHAR): Transaction amount

### Database Relationships

The database connects application records using the form number and PIN/card-related fields.

Conceptually:

The database links personal information in the signup table to additional details in signuptwo and account setup in signupthree, which connects to card login details and bank transaction records.

The repository README describes `form_number` as a linking field across signup tables and `pin_number` as the transaction reference used by the banking table.

### Project Structure

Main Java classes include:

```text
Login.java
Signup.java
Signup2.java
Signup3.java
main_Class.java
Deposit.java
Withdrawl.java
FastCash.java
BalanceEnquriy.java
mini.java
Pin.java
Connn.java
```

### Class Responsibilities

- `Login.java` — login/authentication screen.
- `Signup.java` — first registration page.
- `Signup2.java` — second registration page.
- `Signup3.java` — account/card setup and final signup page.
- `main_Class.java` — main ATM dashboard/menu.
- `Deposit.java` — deposit transactions.
- `Withdrawl.java` — custom withdrawals.
- `FastCash.java` — preset withdrawals.
- `BalanceEnquriy.java` — balance calculation.
- `mini.java` — mini statement.
- `Pin.java` — PIN change.
- `Connn.java` — JDBC/MySQL database connection utility.

### Technology Stack

- **Java**
- **JDK 8+**
- **Java Swing**
- **AWT**
- **MySQL 8.x**
- **JDBC**
- **MySQL Connector/J**
- **JDateChooser / JCalendar**
- IntelliJ IDEA / Eclipse / NetBeans

### Application Architecture

The project follows a desktop application architecture in which:

The application uses a Java Swing user interface. Java application logic communicates with the MySQL database through JDBC.

User actions in the Swing interface trigger Java logic and database operations through JDBC.

### SQL / DBMS Concepts Demonstrated

The project demonstrates practical concepts including:

- Relational database design
- Tables and columns
- Primary application identifiers
- Foreign-key-style relationships described in the schema
- CRUD-style database operations
- JDBC connectivity
- Transaction record storage
- SQL queries
- Database-backed authentication
- Data retrieval and aggregation
- Balance calculation from transaction history

### Setup Requirements

Prerequisites:

- Java JDK 8 or higher
- MySQL Server 8.x
- MySQL Connector/J
- JCalendar library

The MySQL database is named:

```text
banksystem
```

The repository README provides SQL statements to create the required tables.

Database credentials are configured in `Connn.java`.

### Running the Application

General flow:

1. Open the project in IntelliJ IDEA, Eclipse, or NetBeans.
2. Add the required JAR dependencies.
3. Create the `banksystem` database and required tables.
4. Configure MySQL username/password in `Connn.java`.
5. Run `Login.java`.
6. Create a new account through the three-page signup process.
7. Use the generated card number and PIN to log in.
8. Use the ATM menu to perform transactions.

### Known Issues and Improvements

The repository README documents several issues and suggested improvements.

### SQL Injection

The README states that most SQL queries are vulnerable to SQL injection and recommends using `PreparedStatement` throughout. It notes that `mini.java` already uses `PreparedStatement`.

### Amount Data Type

Transaction amounts are stored as `VARCHAR` in the `bank` table. A numeric type such as `INT` or `DECIMAL` would be more appropriate for financial calculations.

### PIN Storage

The README states that PINs are stored in plain text and recommends hashing PINs using BCrypt.

### Session Timeout

The application does not implement a session timeout. An inactivity-based automatic logout could be added.

### PIN Change Query Issue

The README notes that some PIN-change queries reference `pin` instead of `pin_number`, requiring correction.

### Signup2 Radio Button Bug

The README documents a bug where `scitizen` and `eAccount` read from the same radio-button group. Separate groups are recommended.

### Amount Input Validation

Numeric validation and protection against negative values should be added for transaction amounts.

### Responsive UI

The application uses hard-coded window sizes. Layout managers or responsive UI practices could improve adaptability.

### Strengths Demonstrated by the Project

The project provides practical experience with:

- Java desktop GUI development.
- MySQL database integration.
- JDBC.
- Multi-step forms.
- Authentication.
- Banking transaction logic.
- Database-driven balance calculation.
- Transaction history retrieval.
- Basic DBMS schema design.

### Portfolio Summary

> Built a Java Swing-based Bank Management System integrated with MySQL using JDBC. Implemented multi-page account registration, card/PIN authentication, deposits, withdrawals, fast cash, balance enquiry, mini statements, and PIN changes, with banking data and transaction records stored in a relational database.

### Interview Summary

A concise explanation:

> I built a desktop banking application using Java Swing and MySQL. The application supports account registration, authentication through card number and PIN, deposits, withdrawals, fast cash, balance enquiry, mini statements, and PIN changes. I connected the Java application to MySQL using JDBC and designed multiple relational tables to store user, account, login, and transaction information.

### Repository

GitHub:

https://github.com/Sujan-lab-cell/Banking-Management--System-Java-based-DBMS-project.git

### Source Notes

This knowledge file is based on the repository README. It does not add unverified claims about performance, number of users, deployment, security hardening beyond the documented issues, or production usage.