import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. How can I help you learn more about Shivam?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Note: Assuming the backend is running on localhost:5000 as per server.js
      // In production, this URL should be an environment variable
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.bot, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: "Sorry, I encountered an error connecting to the AI. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      {!isOpen && (
        <button 
          className={styles.toggleButton} 
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle size={30} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <h3>AI Assistant</h3>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.botMessage}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.botMessage}`}>
                <div className={styles.typingIndicator}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputArea} onSubmit={handleSendMessage}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ask about my projects..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || !inputValue.trim()}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}