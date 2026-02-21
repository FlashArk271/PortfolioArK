# Aryan Khandelwal - Portfolio Website

A modern, dark-themed portfolio website with AI chat functionality built with React, TypeScript, Python FastAPI, and Groq AI.

## 🚀 Features

- **Modern Dark Theme UI** - Sleek, tech-focused design with animations
- **AI Chat Assistant** - Powered by Groq AI, trained on resume data
- **Responsive Design** - Works seamlessly on all devices
- **Project Showcase** - Full Stack & AI/ML projects categorized
- **Contact Form** - Backend-integrated message submission
- **Smooth Animations** - Using Framer Motion

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Axios

### Backend
- Python FastAPI
- SQLite Database
- Groq AI API (LLama 3.1)

## 📦 Project Structure

```
PersonalPostfolio/
├── backend/
│   ├── main.py           # FastAPI application
│   ├── database.py       # SQLite database models
│   ├── resume_data.py    # Resume data for AI context
│   ├── requirements.txt  # Python dependencies
│   └── .env.example      # Environment variables template
│
└── frontend/
    ├── src/
    │   ├── components/   # React components
    │   ├── App.tsx       # Main application
    │   └── main.tsx      # Entry point
    ├── public/           # Static assets
    └── package.json      # Node dependencies
```

## 🔧 Setup Instructions

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with your Groq API key
cp .env.example .env
# Edit .env and add your GROQ_API_KEY

# Run the backend server
uvicorn main:app --reload
```

The backend will be running at `http://localhost:8000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be running at `http://localhost:5173`

## 🔑 Environment Variables

### Backend (.env)
```
GROQ_API_KEY=your_groq_api_key_here
```

### Getting a Groq API Key
1. Go to [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to API Keys
4. Create a new API key
5. Copy and paste into your `.env` file

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Health check |
| `/api/chat` | POST | Send message to AI chatbot |
| `/api/chat/history/{session_id}` | GET | Get chat history |
| `/api/contact` | POST | Submit contact form |
| `/api/resume` | GET | Get resume data |

## 📱 Features Breakdown

### AI Chat
- Context-aware responses using resume data
- Session-based conversation history
- Suggested questions for users
- Powered by Groq's LLama 3.1 model

### Portfolio Sections
- **Hero** - Introduction with stats
- **About** - Background and highlights
- **Skills** - Tech stack with proficiency levels
- **Experience** - Work history timeline
- **Projects** - Categorized (Full Stack / AI/ML)
- **Publications** - Research & achievements
- **Contact** - Form & social links

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy dist folder to Vercel
```

### Backend (Render/Railway)
```bash
# Add requirements.txt and main.py to your repo
# Configure start command: uvicorn main:app --host 0.0.0.0 --port $PORT
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Aryan Khandelwal**
- Email: aryankhandelwal243@gmail.com
- GitHub: [FlashArk271](https://github.com/FlashArk271)
- LinkedIn: [aryan10khandelwal](https://linkedin.com/in/aryan10khandelwal)
