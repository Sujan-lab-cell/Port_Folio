# 職務経歴＆インターンシップ (Work Experience & Internships)

## 1. FlyRank AI — 機械学習エンジニアリング インターン (Machine Learning Engineering Intern)

### 1.1 概要およびサマリー (Summary & Overview)
- 役職: 機械学習エンジニアリング インターン (Machine Learning Engineering Intern)
- 企業: FlyRank.ai / FlyRank AI
- インターンシップ期間: 2026年7月1日 – 2026年9月9日（公式修了証明書および推薦状記載日: 2026年9月9日）
- 主な研究・エンジニアリング領域: Google 検索ランキング下落予測、発見可能性分析、時系列 ML、データリーク防止、ランク学習。
- 主要業績: 5,000 件の URL 観測データセットにおいて、ベースライン (Precision@50 = 0.392) と比較して Precision@50 = 0.444 (13.3% 相対向上) を達成するランダムフォレスト (Random Forest) 予測パイプラインを構築・評価。

#### 概要と範囲 (Overview & Scope)
FlyRank.ai にて、検索インデックスの変更やアルゴリズムの更新前に Google 検索ランキングの大幅な下落を予測する研究・実用レベルの機械学習モデルを設計・開発しました。本取り組みは、検索アナリティクス、時系列特徴量抽出、データリーク防止手法、および評価指標に関する査読済み研究論文として論文出版が準備されています。

---

### 1.2 主要インターンシップ目的とフレーム付け (Main Internship Objective & Framing)
- 目的: 検索インデックスの変動がSEOパフォーマンスに悪影響を与える前に、Google 検索結果（SERP）における特定の URL の順位下落を事前予測すること。
- 問題の定式化: 観測ウィンドウ（Pre-May 2024）から抽出した計算指標に基づき、Post-May 2024 の評価期間において各 URL が「ランキング低下リスク」を抱えているかを予測する二値分類およびランキングタスク。

---

### 1.3 Google検索ランキング＆発見可能性の取り組み (Google Search Ranking & Discoverability Work)
- コンテキスト: 2024年5月の Google コアアルゴリズム更新に伴うインデックスとランキングの地殻変動。
- 課題: 多くのウェブサイトが事後の手動分析に依存していたため、対策が数週間から数ヶ月遅れていました。
- 解決策: 過去のドメインおよび URL 指標を利用して順位下落リスクのある上位 URL を事前にフラグ立てする予兆型分類パイプラインの構築。

---

### 1.4 データセットと母集団 (Dataset & Population)
- 全体データセットサイズ: 5,000 件の追跡対象 URL (ドメイン、検索インデックス、およびオーガニック流入データ)。
- データセットソース: FlyRank のインデックスデータベースから抽出された Google 検索 SERP トラフィック分析指標。

---

### 1.5 タイムウィンドウ (Time Windows)
- 特徴量計算ウィンドウ (Observation Window / Pre-May): 2024年5月の更新前の履歴データ（特徴量生成用）。
- 評価・ラベル定義ウィンドウ (Evaluation Window / Post-May): 2024年5月の更新後のパフォーマンス結果（ターゲットラベル作成用）。
- 分割の目的: 未来の情報が予測モデルに漏洩するデータリーク（Data Leakage）を厳密に防止するため。

---

### 1.6 ターゲット定義と分布 (Target Definition & Distribution)
- ターゲット変数 (`is_decline`):
  - 1 (Decline): 2024年5月の更新後に表示順位またはオーガニックトラフィックが閾値を超えて低下した URL。
  - 0 (Non-Decline / Stable): 検索表示順位が維持または向上した URL。
- クラス分布: 不均衡データセット（高リスク下落 URL は全体の約 20%〜25%）。

---

### 1.7 適格基準 (Eligibility Criteria)
- ノイズおよびトラフィックの少ない未検証ページの除去フィルタリング:
  - 観測期間（Pre-May）において最低 100 回のオーガニックインプレッションを有する URL のみを選定。
  - 新規作成ページやトラフィックのないテストページを除外。

---

### 1.8 特徴量エンジニアリング (Pre-May 9つの特徴量) (Feature Engineering - 9 Pre-May Features)
2024年5月以前のデータのみから計算された 9 つの予測特徴量：
1. `pre_may_clicks`: アルゴリズム更新前の全クリック数。
2. `pre_may_impressions`: アルゴリズム更新前の全インプレッション数。
3. `pre_may_ctr`: 事前クリック率（Clicks / Impressions）。
4. `pre_may_position`: 平均 SERP 検索表示順位。
5. `click_share`: 総トラフィックに対する当該 URL のクリックシェア。
6. `impression_share`: 総インプレッションに対する表示シェア。
7. `ctr_diff`: 期待 CTR と実際の CTR の乖離度（パフォーマンス過不足の測定）。
8. `pos_ctr_ratio`: 平均表示順位と CTR の比率（順位に対する効率性指標）。
9. `click_per_pos`: 表示順位 1 単位あたりの獲得クリック数。

---

### 1.9 リーク防止と責任あるML (Leakage Prevention & Responsible ML)
- 厳格な時系列分離: すべての 9 つの特徴量は Post-May のデータ（5月以降のインプレッション、クリック、順位など）を一切参照せずに作成。
- スケーリングと前処理の独立性: 標準化（StandardScaler）やエンコーディングの統計量はトレーニングフォールド（Train Folds）のみから計算し、検証フォールド（Validation Folds）への情報流出を回避。

---

### 1.10 ベースライン手法 (Baseline Method)
- ベースラインロジック: `pre_may_ctr` の逆数または単一特徴量による単純ルールベースの降順ソート。
- ベースライン性能 (Precision@50): `0.392` (上位 50 件のフラグ付き URL 中 19.6 件が実際に順位下落)。

---

### 1.11 試験された機械学習モデルとベンチマーク比較 (Machine-Learning Models Tested & Benchmark Comparison)
同一の交差検証分割で比較されたモデル結果：

- **ベースライン (Pre-May CTR ソート)**:
  - Precision@50: 0.392
  - Precision@100: 0.370
  - MAP: 0.312
- **ロジスティック回帰 (Logistic Regression)**:
  - Precision@50: 0.408
  - Precision@100: 0.385
  - MAP: 0.334
- **決定木 (Decision Tree)**:
  - Precision@50: 0.418
  - Precision@100: 0.392
  - MAP: 0.345
- **ランダムフォレスト (Random Forest - 最終モデル)**:
  - Precision@50: 0.444
  - Precision@100: 0.415
  - MAP: 0.378

---

### 1.12 最終ランダムフォレストモデルと性能 (Final Random Forest Model & Performance)
- ハイパーパラメータ: `n_estimators=200`, `max_depth=8`, `min_samples_split=5`, `random_state=42`。
- 最終 Precision@50: **0.444** (上位 50 件中 22.2 件が実際の下落 URL)。
- 相対向上率: ベースライン (0.392) から **+13.3%** の精度向上。

---

### 1.13 特徴量重要度 (Random Forest Gini インポータンス) (Feature Importance)
1. `ctr_diff` (期待 CTR との乖離): **28.4%** — 最も影響力の高い予測因子。
2. `pre_may_ctr`: **21.2%**
3. `pos_ctr_ratio`: **16.5%**
4. `pre_may_position`: **12.1%**
5. `click_share`: **8.3%**
6. その他特徴量 (`click_per_pos`, `impression_share`, `pre_may_clicks`, `pre_may_impressions`): 計 13.5%

---

### 1.14 交差検証と決定論的ランキング (Cross-Validation & Deterministic Ranking)
- 評価手法: GroupKFold / Stratified Cross-Validation (5-Fold)。
- フォールド別 Precision@50 の結果:
  - Fold 1: 0.440
  - Fold 2: 0.450
  - Fold 3: 0.435
  - Fold 4: 0.448
  - Fold 5: 0.447
  - **全フォールド平均 Precision@50**: **0.444**

---

### 1.15 ヒューマンインザループ・ワークフローと対策プレイブック (Human-in-the-Loop Workflow & Action Playbook)
- フラグ立てシステム: 予測下落確率 $P(	ext{decline}) \ge 0.65$ の URL を自動フラグ。
- 対策ワークフロー: SEO チームが優先度の高い上位 50〜100 件の URL に対してコンテンツリフレッシュ、技術的 SEO 修正、および内部リンクの最適化を事前実施。

---

### 1.16 誤差解析と指標の解釈 (Error Analysis & Metric Interpretation)
- 偽陽性 (False Positives): 新規類似コンテンツの登場により表示機会は維持されたがクリック率が低下したケース。
- 偽陰性 (False Negatives): ドメイン全体のペナルティにより急激に低下した非典型的な URL。

---

### 1.17 技術スタック (Technical Stack)
- 言語: Python 3.10+
- ライブラリ: Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn
- モデル: Random Forest, Decision Tree, Logistic Regression
- 開発環境: Jupyter Notebook, VS Code, Git/GitHub

---

### 1.18 適用されたML概念と主な成果物 (Applied ML Concepts & Key Deliverables)
- 成果物 1: 5,000 件の URL に対するエンドツーエンドの時系列 ML 予測パイプライン。
- 成果物 2: 査読済み論文フォーマットの研究論文ドラフト。
- 成果物 3: 公式推薦状およびインターンシップ修了証明書。

---

### 1.19 レジュメレベルのサマリー (Resume-Level Summary)
- FlyRank.ai にて Google 検索ランキング下落予測 ML パイプラインを開発。時系列分離および特徴量エンジニアリングを適用し、5,000 件の URL データセットにおいてベースライン比 +13.3% 向上となる Precision@50 = 0.444 を達成。

---

## 2. ISIRI Technologies Pvt. Ltd. (AyusLab) — AI/ML インターン (AI/ML Intern)

### 2.1 概要およびサマリー (Summary & Overview)
- 役職: AI/ML インターン (AI/ML Intern)
- 企業: ISIRI Technologies Pvt. Ltd. / AyusCare (AyusLab Clinical Lab Management Software)
- 期間: 2026年6月15日 – 2026年8月10日
- 主なプロジェクト: ハイブリッド AI 医療請求書および診断報告書パーサー (Hybrid AI Medical Invoice & Diagnostic Report Parser)

---

### 2.2 プロジェクト目的と範囲 (Project Objective & Scope)
- 目的: 医療ラボ請求書、診断テスト報告書、および患者レシートから構造化された JSON データを自動抽出・検証する製造レベルのハイブリッド AI パイプラインの開発。
- 解決した問題: 様々なフォーマットの医療ドキュメントに対する手動データ入力作業の削減と誤入力の排除。

---

### 2.3 サポート対象ファイルフォーマットと入力処理 (Supported File Formats & Input Processing)
- サポート形式: PDF (デジタル生成 PDF およびスキャン PDF)、PNG、JPG、JPEG、TIFF。
- 画像前処理: ノイズ除去、傾き補正、コントラスト強調、二値化。

---

### 2.4 ハイブリッドパイプラインアーキテクチャ (Hybrid Pipeline Architecture)
- パイプライン構成:
  1. ドキュメント取り込み ➔ 前処理 ➔ OCR 抽出 (Tesseract / EasyOCR)。
  2. 決定論的ルールエンジン (正規表現・アンカー抽出)。
  3. 品質管理・スキーマ検証 layer (Pydantic v2)。
  4. 信頼度が低下した場合のみ選択的 Gemini LLM フォールバックを発動。

---

### 2.5 OCR・前処理・ドメイン特化NLP (OCR, Preprocessing & Domain-Specific NLP)
- OCR エンジン: Tesseract OCR および EasyOCR。
- テキスト処理: 境界ボックス解析、テキスト行ブロック化、ドメイン特化型の用語辞書マッチング。

---

### 2.6 決定論的ルールエンジンと抽出項目 (Deterministic Rule-Engine & Fields Extracted)
- 抽出対象フィールド:
  - 診療所/ラボ名 (Clinic/Lab Name)
  - 患者名・年齢・性別 (Patient Details)
  - 請求書番号・日付 (Invoice Number & Date)
  - 検査項目・測定値・基準値 (Test Items, Results, Reference Ranges)
  - 総額・割引額・支払額 (Financial Totals)
- 処理スピード: 決定論的抽出により 1 ドキュメントあたり 1.5 秒未満で処理完了。

---

### 2.7 検証・品質管理・選択的LLMフォールバック (Validation, Quality Control & Selective LLM Fallback)
- 品質スコアリング: 抽出精度および必須項目の存在率に基づく信頼度スコア ($0.0 \sim 1.0$) の計算。
- Gemini AI フォールバック: 信頼度スコア $< 0.85$ または構造が複雑な場合のみ Google Gemini AI API を安全に呼び出し。API コストを最小限に抑えつつ高精度を確保。

---

### 2.8 Pydantic スキーマとデータモデリング (Pydantic Schemas & Data Modeling)
- 厳格なデータバリデーション: Pydantic v2 を使用した JSON スキーマの定義。日付形式、数値範囲、および必須項目の整合性を厳密に検証。

---

### 2.9 FastAPI バックエンドとデプロイアーキテクチャ (FastAPI Backend & Deployment Architecture)
- REST API: 非同期処理をサポートする FastAPI マイクロサービス。
- デプロイ: Docker コンテナ化および Render クラウドプラットフォームへのデプロイ。

---

### 2.10 レビューフロントエンド (Review Frontend)
- インターフェース: Streamlit ベースの人間による確認（Human-in-the-Loop）UI。抽出されたデータと元のドキュメントを並べて表示・修正可能。

---

### 2.11 技術スタックサマリー (Technical Stack Summary)
- 言語・フレームワーク: Python, FastAPI, Pydantic v2, Streamlit
- OCR ＆ AI: Tesseract OCR, EasyOCR, Google Gemini AI API, OpenCV
- クラウド・デプロイ: Docker, Render, Git

---

### 2.12 パフォーマンスと指標のフレーム付け (Performance & Metric Framing)
- 抽出正確性: 標準フォーマットで 98% 以上のフィールド精度。
- コスト削減: 選択的 LLM フォールバックにより、全面 LLM 利用と比較して API コストを 80% 以上削減。

---

## 3. EdiGlobe — 機械学習インターン (Machine Learning Intern)

### 概要 (Summary)
- 役職: 機械学習 インターン (Machine Learning Intern)
- 企業: EdiGlobe / Zhagaram Technologies (インド政府 MSME 認定)
- 期間: 2025年7月1日 – 2025年8月30日 (証明書発行: 2025年10月30日)

### 主要な貢献と技術的取り組み (Key Contributions & Technical Work)
- **GeoSentinel**: YOLOv8-Seg を用いた地形・地理特徴量セグメンテーションモデルを開発。
- **SmartQ Generator**: Hugging Face T5 Transformer と Streamlit を用いた多言語自動問題・解答生成システムを開発。
- MSME 認定のマイナープロジェクト 1 件およびメジャープロジェクト 1 件を無事完了。

### 技術＆手法 (Technologies & Methodologies)
- Python, PyTorch, YOLOv8-Seg, Transformers (T5), OpenCV, Streamlit, Scikit-learn.
