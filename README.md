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


