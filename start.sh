#!/bin/bash
# Portfolio Project Startup Script

echo "🚀 Starting Portfolio Project..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node modules are installed
if [ ! -d "node_modules" ]; then
    echo "${BLUE}Installing frontend dependencies...${NC}"
    npm install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "${BLUE}Installing backend dependencies...${NC}"
    cd backend
    npm install
    cd ..
fi

# Start both servers
echo ""
echo "${GREEN}✓ Starting Backend Server...${NC}"
cd backend
npm run dev &
BACKEND_PID=$!

cd ..

echo "${GREEN}✓ Starting Frontend Server...${NC}"
npm run dev &
FRONTEND_PID=$!

echo ""
echo "${GREEN}✓ Portfolio is running!${NC}"
echo ""
echo "Frontend: http://localhost:5173"
echo "Backend API: http://localhost:5000"
echo "Chat API: http://localhost:5000/api/chat"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Keep script running
wait
