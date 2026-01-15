# 🛡️ Visor Ciudadano: Public Security Decision Support System

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![AI](https://img.shields.io/badge/AI-Gemini_2.5_Flash-8E75B2)](https://deepmind.google/technologies/gemini/)
[![Database](https://img.shields.io/badge/PostgreSQL-Neon_Serverless-336791)](https://neon.tech/)
[![Analytics](https://img.shields.io/badge/Analytics-Power_BI-F2C811)](https://powerbi.microsoft.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> **Live Demo:** [https://visor-ciudadano-peru.vercel.app/](https://visor-ciudadano-peru.vercel.app/)

## 📖 About The Project

**Visor Ciudadano** is a Decision Support System (DSS) designed to democratize access to public security data in Peru. While the government publishes data, it often remains inaccessible in raw formats.

This project ingests **6.6 million police reports (2018-2025)** , processes them into a **Star Schema Data Warehouse**, and exposes them through a modern web interface.

**Key Innovation:** It bridges the gap between technical data and non-technical users by integrating **Generative AI**.Users can ask natural language questions (e.g., _"Which district has the most robberies in 2024?"_), and the system translates this into SQL queries to fetch real-time answers.

## ✨ Key Features

- **🤖 AI Conversational Agent (Text-to-SQL):** Built with Vercel AI SDK and **Gemini 2.5 Flash**. It converts natural language into complex SQL queries to interact with the database directly.
- **📊 Interactive Dashboards:** Embedded Power BI analytics showing crime heatmaps, temporal trends, and comparative rankings[cite: 175, 218].
- **⚡ High Performance:** Optimized Next.js architecture achieving a **100/100 Lighthouse Performance score**.

## 🏗️ Technical Architecture

The system follows the **Ralph Kimball Business Dimensional Lifecycle**.

### 1. Data Engineering (ETL & Warehousing)

- **Source:** Open Data Platform of Peru (Police Complaints)[cite: 168].
- **ETL Pipeline:** Python scripts extract raw CSVs, clean geographical inconsistencies, and load data.
- **Data Warehouse:** Hosted on **Neon (Serverless PostgreSQL)** using a **Star Schema** (Fact Tables + Dimension Tables) to optimize analytical queries.

### 2. Application Stack

- **Frontend/Backend:** Next.js (React + TypeScript).
- **AI Logic:** Vercel AI SDK acts as the bridge between the user prompt and the Gemini LLM.
- **Visualization:** Power BI Embedded for heavy visual analytics.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL Database
- Google Gemini API Key

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/huderdcv/visor-ciudadano-peru.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up Environment Variables Create a .env file:**

   ```.env
   DATABASE_URL=your_postgres_connection_string
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
