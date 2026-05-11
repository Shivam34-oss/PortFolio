@echo off
REM Portfolio Project Startup Script for Windows

echo.
echo ============================================
echo   Portfolio Project - Full Stack Startup
echo ============================================
echo.

REM Check if Node modules are installed
if not exist "node_modules" (
    echo [INFO] Installing frontend dependencies...
    call npm install
)

if not exist "backend\node_modules" (
    echo [INFO] Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

echo.
echo [SUCCESS] Starting Backend Server on Port 5000...
start cmd /k "cd backend && npm run dev"

echo [SUCCESS] Starting Frontend Server on Port 5173/5174...
start cmd /k "npm run dev"

echo.
echo ============================================
echo   Services Running:
echo   - Frontend: http://localhost:5173
echo   - Backend: http://localhost:5000
echo   - Chat API: http://localhost:5000/api/chat
echo ============================================
echo.
pause
