# Shortify AI Summarizer

Shortify AI Summarizer is a modern, portfolio-worthy full-stack application designed to summarize long text content instantly. It features a unique **Neo-Brutalism** design system.

## 🚀 Phase 1: Foundation

This phase focuses on the core architecture, responsive layout, and API structure.

### Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Icons
- **Backend:** Node.js, Express.js, CORS, dotenv
- **Design:** Neo-Brutalism (Thick borders, bold typography, sharp shadows)

### Key Features

- ✅ Responsive layout (Mobile, Tablet, Desktop)
- ✅ Neo-Brutalism UI/UX components
- ✅ Character and Word counting logic
- ✅ RESTful API structure with Express
- ✅ Micro-interactions and hover effects

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/your-repo/shortify-ai-summarizer.git
cd shortify-ai-summarizer
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
The backend will run on `http://localhost:5000`.

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:3000`.

---

## 📂 Project Structure

```text
shortify-ai-summarizer/
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page views
│   │   ├── services/    # API integration
│   │   └── App.jsx      # Main application component
│   └── public/          # Static assets
├── backend/
│   ├── controllers/     # Route logic
│   ├── routes/          # API endpoints
│   ├── app.js           # Express app configuration
│   └── server.js        # Entry point
└── README.md
```

---

## 🔮 Future Features (Phase 2+)

- [ ] AI Summarization integration (Gemini/OpenAI)
- [ ] MongoDB for saving summaries
- [ ] User Authentication
- [ ] File upload support (PDF, TXT)
- [ ] Export summary as PDF/Image

---

## 📜 License

Shortify AI Summarizer © 2026. Built with ❤️ for the future of content consumption.
