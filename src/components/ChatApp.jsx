import React, { useState } from 'react';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [responseIndex, setResponseIndex] = useState(0);

  const chatbotResponses = [
    'Hey! I am Boyan\'s chatbot',
    'I am a good boy',
    'What\'s up?',
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: newMessage, sender: 'user' }]);

      const chatbotResponse = chatbotResponses[responseIndex];
      setMessages(prevMessages => [...prevMessages, { text: chatbotResponse, sender: 'bot' }]);

      setResponseIndex((prevIndex) => (prevIndex + 1) % chatbotResponses.length);

      setNewMessage('');
    }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div>
      <h1>Chat with Chatbot</h1>

      <div id="chat-container">

        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
            <strong>{message.sender === 'user' ? 'You:' : 'Bot:'}</strong> {message.text}
          </div>
        ))}
      </div>

      <form id="input-container" onSubmit={handleFormSubmit}>
  <input
    type="text"
    placeholder="Type your message..."
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
  />
  <button type="submit">Send</button>
  </form>
    </div>
  );
};

export default ChatApp;
