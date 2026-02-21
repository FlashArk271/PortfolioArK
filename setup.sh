#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "${BLUE}======================================${NC}"
echo "${BLUE}  Aryan Khandelwal Portfolio Setup   ${NC}"
echo "${BLUE}======================================${NC}"
echo ""

# Backend setup
echo "${GREEN}Setting up Backend...${NC}"
cd backend

if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo "Created virtual environment"
fi

source venv/bin/activate
pip install -r requirements.txt --quiet

if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "${BLUE}Created .env file - Please add your GROQ_API_KEY!${NC}"
fi

echo "${GREEN}Backend dependencies installed!${NC}"
echo ""

# Frontend setup
echo "${GREEN}Setting up Frontend...${NC}"
cd ../frontend

if [ ! -d "node_modules" ]; then
    npm install --silent
fi

echo "${GREEN}Frontend dependencies installed!${NC}"
echo ""

echo "${BLUE}======================================${NC}"
echo "${GREEN}Setup Complete!${NC}"
echo ""
echo "To start the application:"
echo ""
echo "1. Start Backend (Terminal 1):"
echo "   cd backend"
echo "   source venv/bin/activate"
echo "   uvicorn main:app --reload"
echo ""
echo "2. Start Frontend (Terminal 2):"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "${BLUE}Don't forget to add your GROQ_API_KEY to backend/.env${NC}"
echo "${BLUE}======================================${NC}"
