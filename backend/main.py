from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import httpx
import os
import uuid
from dotenv import load_dotenv
from sqlalchemy.orm import Session

from database import init_db, get_db, ChatMessage, ContactMessage
from resume_data import SYSTEM_PROMPT, RESUME_DATA

load_dotenv()

app = FastAPI(title="Aryan Khandelwal Portfolio API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database on startup
@app.on_event("startup")
async def startup():
    init_db()

# Pydantic models
class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

class Message(BaseModel):
    role: str
    content: str

# Groq API configuration
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

async def get_ai_response(messages: List[dict]) -> str:
    """Get response from Groq API"""
    if not GROQ_API_KEY:
        raise HTTPException(status_code=500, detail="Groq API key not configured")
    
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "llama-3.1-8b-instant",  # Free model on Groq
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 1024
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                GROQ_API_URL,
                headers=headers,
                json=payload,
                timeout=30.0
            )
            response.raise_for_status()
            data = response.json()
            return data["choices"][0]["message"]["content"]
        except httpx.HTTPError as e:
            raise HTTPException(status_code=500, detail=f"AI service error: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Aryan Khandelwal Portfolio API", "status": "running"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest, db: Session = Depends(get_db)):
    """Handle chat messages and return AI response"""
    
    # Generate or use existing session ID
    session_id = request.session_id or str(uuid.uuid4())
    
    # Get chat history for this session
    history = db.query(ChatMessage).filter(
        ChatMessage.session_id == session_id
    ).order_by(ChatMessage.timestamp).all()
    
    # Build messages for AI
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    # Add chat history (limit to last 10 messages to stay within context)
    for msg in history[-10:]:
        messages.append({"role": msg.role, "content": msg.content})
    
    # Add current user message
    messages.append({"role": "user", "content": request.message})
    
    # Get AI response
    ai_response = await get_ai_response(messages)
    
    # Save messages to database
    user_msg = ChatMessage(
        session_id=session_id,
        role="user",
        content=request.message
    )
    assistant_msg = ChatMessage(
        session_id=session_id,
        role="assistant",
        content=ai_response
    )
    
    db.add(user_msg)
    db.add(assistant_msg)
    db.commit()
    
    return ChatResponse(response=ai_response, session_id=session_id)

@app.get("/api/chat/history/{session_id}")
async def get_chat_history(session_id: str, db: Session = Depends(get_db)):
    """Get chat history for a session"""
    history = db.query(ChatMessage).filter(
        ChatMessage.session_id == session_id
    ).order_by(ChatMessage.timestamp).all()
    
    return {
        "session_id": session_id,
        "messages": [
            {"role": msg.role, "content": msg.content, "timestamp": msg.timestamp}
            for msg in history
        ]
    }

@app.post("/api/contact")
async def contact(request: ContactRequest, db: Session = Depends(get_db)):
    """Save contact form submission"""
    contact_msg = ContactMessage(
        name=request.name,
        email=request.email,
        message=request.message
    )
    db.add(contact_msg)
    db.commit()
    
    return {"message": "Thank you for your message! Aryan will get back to you soon."}

@app.get("/api/resume")
async def get_resume():
    """Get resume data for display"""
    return {"resume": RESUME_DATA}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
