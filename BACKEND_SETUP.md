# Portfolio Backend Documentation

## Fixed Issues

✅ **Module System Conflict** - Converted all files from CommonJS to ES6 modules
✅ **Import Path Error** - Fixed path to chatRoutes (models/chatRoutes.js)
✅ **Missing Dependencies** - Added axios and other required packages
✅ **Port Conflicts** - Properly configured port management

## Architecture

```
Backend Structure:
├── server.js           # Main Express server
├── config/
│   └── db.js          # MongoDB connection
├── models/
│   ├── Chat.js        # Chat schema
│   └── chatRoutes.js  # Chat API routes
├── package.json       # Dependencies
└── .env               # Environment variables
```

## API Endpoints

### Chat Endpoints

#### POST /api/chat/message
Send a message to the AI assistant.

```bash
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How should I improve my portfolio?"}'
```

**Response:**
```json
{
  "success": true,
  "reply": "To improve your portfolio...",
  "chatId": "507f1f77bcf86cd799439011"
}
```

#### GET /api/chat/history
Retrieve chat history.

```bash
curl http://localhost:5000/api/chat/history?limit=20
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "userMessage": "...",
      "botResponse": "...",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### DELETE /api/chat/history
Clear all chat history.

```bash
curl -X DELETE http://localhost:5000/api/chat/history
```

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
GEMINI_API_KEY=your_api_key_here (optional)
JWT_SECRET=your_secret_key
```

## Starting the Server

### Development Mode
```bash
cd backend
npm run dev    # Using nodemon for auto-reload
```

### Production Mode
```bash
cd backend
npm start
```

### Full Stack (Frontend + Backend)
Use `start.bat` (Windows) or `start.sh` (Unix/Mac)

```bash
# Windows
./start.bat

# Unix/Mac
./start.sh
```

## Enhancements Made

### 1. **Async Database Connection**
- Better error handling with try-catch
- Connection status logging with visual indicators (✓ ✗)
- Fallback to local MongoDB if MONGODB_URI not set

### 2. **Enhanced Chat System**
- Intelligent response generation based on keywords
- Support for future Gemini API integration
- Full chat history with timestamps
- Support for query limits and sorting

### 3. **Better Error Handling**
- Centralized error middleware
- Detailed error messages for debugging
- Graceful fallbacks for failed requests

### 4. **Security Improvements**
- Installed and fixed npm audit vulnerabilities
- CORS properly configured
- Input validation on all endpoints

## Testing

### Quick Health Check
```bash
curl http://localhost:5000/
```

**Response:**
```json
{
  "status": "success",
  "message": "AI Chat Bot API is running"
}
```

### Send Test Message
```bash
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about projects"}'
```

## Troubleshooting

### Port Already in Use
```bash
# Windows - Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Unix/Mac
lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Issues
- Ensure MONGODB_URI is correct
- Check MongoDB Atlas whitelist your IP
- Verify network connectivity

### Module Not Found Errors
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

## Features Ready for Integration

- ✅ Database persistence for chat history
- ✅ Flexible AI response system
- ✅ API ready for Gemini integration
- ✅ Extensible route structure
- ✅ Professional error handling
