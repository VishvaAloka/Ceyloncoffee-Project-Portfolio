Here is your **fully updated README.md** based on your PP1 presentation content. I have replaced the Smart City content and aligned everything with your **Coffee Quality Grading & Export Enhancement System**.

---

# ☕ AI Powered Coffee Quality Grading & Export Enhancement System

## 🔍 Research Project ID: 25-26J-184

---

## 📋 Project Overview

This project presents an **AI-powered end-to-end solution** designed to improve the **coffee industry in Sri Lanka**. The system integrates multiple intelligent modules to support **disease detection, quality grading, price prediction, and resource planning**.

The goal is to enhance:

* 🌱 Crop yield and health
* 💰 Pricing accuracy and demand forecasting
* 🚚 Logistics and resource management
* 📦 Export quality and efficiency

---

## 🚨 Problems Identified

* Plant diseases reducing yield and quality
* Unstable coffee prices and demand
* Poor labor and transportation planning
* Inefficient logistics systems
* Manual and inconsistent coffee grading

---

## 🎯 Target Users

* Coffee farmers
* Plantation managers
* Exporters and traders
* Agricultural advisors
* Policy makers

---

## 💡 Proposed Solution

A **modular AI-based system** with 4 main components:

---

### 🌿 1. Coffee Disease Detection & Yield Estimation

* Detect diseases from leaf & bean images

* Classify into:

  * Coffee Leaf Rust
  * Leaf Miner
  * Phoma
  * Healthy

* 📊 **Severity Estimation (Hybrid System)**

  * CNN Severity
  * Rust Pixel Ratio
  * Area-based severity
  * Final severity score

* 📈 **Yield Prediction**

  * Formula:

    ```
    Adjusted Yield = Base Yield × (1 − Severity Impact)
    ```

* ⚙️ Technologies:

  * MobileNetV2
  * TensorFlow / Keras
  * OpenCV
  * XGBoost

* 📊 Accuracy:

  * Leaf detection: **86.45%**
  * Bean detection: **93.28%**

---

### 🫘 2. Coffee Bean Type Detection & Grading

* Identify:

  * Arabica vs Robusta

* Grade beans:

  * Good
  * Broken
  * Severe Defect

* 🤖 Features:

  * Automated vision-based sorting
  * IoT-based real-time processing
  * Conveyor-based separation system

* ⚙️ Technologies:

  * MobileNetV3-Large
  * PyTorch

---

### 📊 3. Price & Demand Prediction

* Predict coffee price trends and demand

* Uses:

  * Global coffee prices
  * USD/LKR exchange rate
  * Yield predictions

* 🤖 Models:

  * Ridge Regression (Price)
  * XGBoost (Demand)

* 📊 Accuracy:

  * Price Prediction: **96.7%**
  * Demand Prediction: **92.86%**

---

### 🚜 4. Predictive Resource Allocation

Predicts:

* Fertilizer requirements

* Labor demand

* Transportation needs

* 📊 Models:

  * Multi-output XGBoost
  * Random Forest

* 📊 Accuracy:

  * Labor: **85.2%**
  * Fertilizer: **83%**

* 📥 Inputs:

  * Yield prediction
  * Weather data
  * Farm size
  * Harvest period

---

## 🧠 Key Features

* ✅ AI-based disease detection
* ✅ Severity estimation (unique feature)
* ✅ Yield prediction using ML
* ✅ Automated bean grading
* ✅ Price & demand forecasting
* ✅ Smart resource planning
* ✅ Sri Lanka–focused dataset

---

## 🏗️ System Architecture

* Modular design
* Mobile + Cloud integration
* AI + IoT combination
* Scalable and upgradeable

---

## 💻 Technologies Used

```
🤖 Machine Learning:
- TensorFlow / Keras
- PyTorch
- Scikit-Learn
- XGBoost

🧠 Computer Vision:
- OpenCV
- CNN Models (MobileNet)

📊 Data Processing:
- Pandas
- NumPy

📱 Platform:
- Mobile App (for farmers)
- Cloud backend
```

---

## 📈 Data Sources

* Coffee leaf & bean image datasets
* Weather data (Kandy, Sri Lanka – 2023–2026)
* Market price data
* Simulated agricultural datasets

---

## 💰 Commercialization Potential

* End-to-end coffee farming solution
* Affordable AI tool for farmers
* Improves:

  * Yield
  * Quality
  * Transparency
  * Market access

### 🎯 Target Market

* Primary: Small & medium-scale farmers
* Secondary: Exporters, buyers, agri-businesses

---

## 👥 Team Members

| Name             | Role                                 |
| ---------------- | ------------------------------------ |
| Aloka A.M.R.V    | Disease Detection & Yield Prediction |
| Liyanage S.S     | Bean Detection & Grading             |
| Jayalath M.D.T.L | Price & Demand Prediction            |
| Mahadurage R.N   | Resource Allocation                  |

---

## 👨‍🏫 Supervisors

* Mrs. Jenny Krishara (Supervisor)
* Mrs. Osuri Dunuvila (Co-Supervisor)
* Mrs. K.M.K. Niroshika (External Supervisor – Assistant Director of Agriculture)

---

## 🚀 Future Improvements

* Real-time mobile deployment
* Offline functionality for rural areas
* Integration with government agriculture systems
* Advanced analytics dashboard

---

