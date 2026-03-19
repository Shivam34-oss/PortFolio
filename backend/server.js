require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/chat', chatRoutes);

// Basic Health Check
app.get('/', (req, res) => {
  res.send('AI Chat Bot API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});