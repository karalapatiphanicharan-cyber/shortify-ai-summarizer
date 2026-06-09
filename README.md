# ⚡ SHORTIFY AI SUMMARIZER

**Shortify AI Summarizer** is a high-performance, full-stack application that transforms lengthy articles, reports, and notes into concise, actionable summaries instantly. Built with a bold **Neo-Brutalism** design system, it delivers a striking visual experience while maintaining professional-grade utility.

![Project Status](https://img.shields.io/badge/Phase-5_Complete-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_Node_|_Gemini-blue?style=for-the-badge)

---

## ✨ Features

### 🤖 AI-Powered Summarization
*   **Gemini 1.5 Flash Integration:** Leverages cutting-edge LLMs for lightning-fast, high-quality summarization.
*   **Adjustable Lengths:** Choose between **Short**, **Medium**, or **Detailed** summaries to fit your needs.
*   **Smart Analytics:** Real-time word count, character count, and summarization reduction percentage.

### 🎨 Neo-Brutalism UI/UX
*   **Signature Aesthetic:** Thick black borders, high-contrast shadows, and bold typography.
*   **Dark Mode Support:** Fully audited high-contrast dark theme for night-time productivity.
*   **Responsive Design:** Seamless experience across Mobile, Tablet, and Desktop.
*   **Micro-interactions:** Animated loading states, hover effects, and rotating status messages.

### 🛠️ Productivity Tools
*   **History Persistence:** Automatically saves your last 5 summaries to Local Storage.
*   **One-Click Actions:** Instant copy to clipboard and `.txt` file export.
*   **History Management:** Load previous summaries back into the editor or clear history selectively.

---

## 🚀 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Axios, React Icons, React Hot Toast |
| **Backend** | Node.js, Express.js, Google Generative AI SDK, CORS, Dotenv |
| **Design** | Neo-Brutalism Design System |
| **AI Model** | Google Gemini 1.5 Flash |

---

## 📂 Project Architecture

```text
shortify-ai-summarizer/
├── frontend/
│   ├── src/
│   │   ├── components/  # Neo-Brutalism UI Components
│   │   ├── pages/       # View Logic (Home)
│   │   ├── services/    # Axios API Config
│   │   ├── index.css    # Global Brutalist Styles & Dark Mode
│   │   └── App.jsx      # Theme & Layout Wrapper
├── backend/
│   ├── controllers/     # Summary Logic & Error Handling
│   ├── routes/          # API Endpoint Definitions
│   ├── services/        # Gemini AI Integration Service
│   ├── app.js           # Express Config
│   └── server.js        # Entry Point
└── README.md
```

---

## 🛠️ Installation & Setup

### Prerequisites
*   Node.js (v18+ recommended)
*   A Google AI Studio API Key ([Get it here](https://aistudio.google.com/))

### 1. Clone & Install
```bash
git clone https://github.com/your-username/shortify-ai-summarizer.git
cd shortify-ai-summarizer
```

### 2. Backend Configuration
```bash
cd backend
npm install
# Create .env and add your key
echo "PORT=5000\nGEMINI_API_KEY=YOUR_KEY_HERE" > .env
npm run dev
```

### 3. Frontend Configuration
```bash
cd ../frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## ⌨️ Shortcuts & Tips
*   **Summarize:** Press `Ctrl + Enter` while inside the text area.
*   **Dark Mode:** Click the sun/moon icon in the navbar.
*   **Sample Text:** Click "Try Sample" to quickly see the app in action.
*   **History:** Click "Load into editor" to restore a previous summary and its original text.

---

## 🛡️ Error Handling
The application includes robust error mapping for the Gemini API:
*   **Invalid Keys:** Graceful warnings for configuration issues.
*   **Quota Limits:** User-friendly "Try again later" messages for rate limits.
*   **Safety Filters:** Alerts when content triggers AI safety restrictions.

---

## 🔮 Future Roadmap
- [ ] **Database Integration:** MongoDB for permanent summary storage and user accounts.
- [ ] **Multi-Format Upload:** PDF and Word document processing.
- [ ] **Extension:** Chrome extension for summarizing web pages directly.
- [ ] **Social Sharing:** Instant sharing of summaries to Twitter/LinkedIn.

---

## 📜 License
Shortify AI Summarizer © 2026. Built with ❤️ for the future of content consumption.
