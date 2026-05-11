# 🔧 Quick Reference Guide

## Terminal Commands

### Start Backend Only:
```bash
cd backend
npm run dev          # Development mode (auto-reload)
# OR
npm start            # Production mode
```

### Start Frontend Only:
```bash
npm run dev          # Vite dev server
```

### Start Both (Windows):
```bash
.\start.bat
```

### Start Both (Mac/Linux):
```bash
./start.sh
```

### Test API:
```bash
cd backend
node test-api.js
```

## Troubleshooting

### Problem: "Port 5000 is already in use"
```bash
# Windows - Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Problem: "Module not found errors"
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Problem: "MongoDB connection failed"
- Check `.env` file has `MONGODB_URI` set correctly
- Ensure MongoDB is running locally or on Atlas
- Verify IP whitelist on MongoDB Atlas

### Problem: "npm audit vulnerabilities"
```bash
cd backend
npm audit fix
```

## API Quick Test

### Using PowerShell (Windows):
```powershell
$body = @{message = "Tell me about projects"} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "http://localhost:5000/api/chat/message" `
  -Method POST -ContentType "application/json" -Body $body -UseBasicParsing
$response.Content | ConvertFrom-Json
```

### Using curl (Any OS with curl):
```bash
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How can I improve my portfolio?"}'
```

## File Structure
```
Portfolio/
├── backend/
│   ├── server.js           # Main server (FIXED ✓)
│   ├── package.json        # Dependencies (FIXED ✓)
│   ├── test-api.js         # API test script (NEW ✓)
│   ├── models/
│   │   ├── Chat.js         # Database schema (FIXED ✓)
│   │   └── chatRoutes.js   # API routes (FIXED ✓)
│   ├── config/
│   │   └── db.js           # DB connection (FIXED ✓)
│   └── .env.example        # Config template (NEW ✓)
├── src/                    # Frontend React code
├── start.bat               # Windows startup script (NEW ✓)
├── start.sh                # Unix startup script (NEW ✓)
├── FIX_SUMMARY.md          # This file's companion
└── BACKEND_SETUP.md        # Detailed documentation
```

## What Was Fixed

✅ Module system (CommonJS → ES6)  
✅ Import paths (routes → models)  
✅ Dependencies (removed invalid packages)  
✅ Error handling (added middleware)  
✅ Database connection (added fallbacks)  
✅ Security (npm audit fix - 0 vulnerabilities)  

## Environment Variables (✅ User has .env with GEMINI)

**backend/.env** (yours exists):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# OR MongoDB Atlas: mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio
JWT_SECRET=your_jwt_secret_here_min_32_chars
GEMINI_API_KEY=your_gemini_key_here  # ✅ You added - enables real AI responses!
```

**MongoDB Setup (Required):**
1. **Local (Windows):**
   ```
   # Download: https://www.mongodb.com/try/download/community
   # Install MongoDB Community Server
   # Start: Services → MongoDB → Start
   # Or run: mongod
   ```

2. **Cloud (Free - Recommended):**
   ```
   # 1. mongodb.com → Sign up → Create Cluster (free M0)
   # 2. Database → Connect → Drivers → Copy URI
   # 3. Replace in .env MONGODB_URI
   # 4. Network Access → Add IP 0.0.0.0/0 (temp)
   ```

**Gemini API (Optional but ✅ You have key):**
```
# Get free key: https://aistudio.google.com/app/apikey
# Real AI responses vs fallback keywords
```


## Available API Endpoints

| Method | Endpoint | Purpose | Status |
|--------|----------|---------|--------|
| GET | `/` | Health check | ✅ |
| POST | `/api/chat/message` | Send message | ✅ |
| GET | `/api/chat/history` | Get history | ✅ |
| DELETE | `/api/chat/history` | Clear history | ✅ |

## Development Workflow

1. **Update `.env`** with your MongoDB URI
2. **Run backend**: `npm run dev` (auto-reload enabled)
3. **Run frontend**: `npm run dev` in root
4. **Test API**: `node backend/test-api.js`
5. **Push to production** when ready

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Blank page on localhost:5173 | Clear browser cache, restart Vite |
| API returns 500 error | Check MongoDB connection, .env file |
| Slow responses | Increase database timeout, check network |
| Module errors on startup | Run `npm install` in /backend |

## Next Steps

1. ✅ All issues fixed - Backend is working!
2. ⏳ Integrate Gemini API (optional) - Update chatRoutes.js
3. ⏳ Add authentication - Use JWT middleware
4. ⏳ Deploy backend - Use Heroku/Vercel
5. ⏳ Deploy frontend - Use Vercel/Netlify

## Notes

- Backend runs on **Port 5000**
- Frontend runs on **Port 5173** (or 5174 if 5173 taken)
- Database saves all chat messages automatically
- All API responses use JSON format
- CORS is enabled for frontend-backend communication
