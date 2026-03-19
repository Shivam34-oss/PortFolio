const Chat = require('../models/Chat');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini AI
// Make sure GEMINI_API_KEY is in your .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.handleChat = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // 1. Get response from AI
    // For a chat bot, we use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    const result = await model.generateContent(message);
    const response = await result.response;
    const botResponseText = response.text();

    // 2. Save conversation to MongoDB
    const newChat = new Chat({
      userMessage: message,
      botResponse: botResponseText
    });

    await newChat.save();

    // 3. Send response back to frontend
    res.status(200).json({
      user: message,
      bot: botResponseText,
      id: newChat._id
    });

  } catch (error) {
    console.error("Error in chat controller:", error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};