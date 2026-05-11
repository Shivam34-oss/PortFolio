import React, { useState } from 'react';
import styles from './aiAssistant.module.css';
import { MessageSquare, Send, X, Sparkles, RefreshCw } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am your AI assistant. I can help you refine your portfolio content or answer questions about my services.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMessage = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.reply,
        projects: data.projects // Optional: specialized UI for project links
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={styles.aiWrapper}>
      {!isOpen && (
        <button className={styles.toggleBtn} onClick={() => setIsOpen(true)} aria-label="Open AI Assistant">
          <Sparkles size={24} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.headerTitle}>
              <Sparkles size={18} className={styles.sparkle} />
              <span>AI Assistant</span>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className={styles.messagesList}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.message} ${styles[msg.role]}`}>
                <div className={styles.bubble}>{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className={styles.typingIndicator}>AI is analyzing data...</div>
            )}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask to refine text or generate FAQs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={isTyping}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}