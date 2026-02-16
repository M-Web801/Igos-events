import React, { useState } from 'react';
import '../styles/WhatsAppWidget.css';

function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace with his actual WhatsApp number!
  const phoneNumber = '2348155870098';
  
  const quickMessages = [
    "Hi! I'd like to book an event",
    "What are your packages?",
    "I need a quote for a wedding",
    "Tell me about your services"
  ];

  const sendMessage = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Quick Messages Popup */}
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <h4>Chat with us on WhatsApp</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="popup-body">
            <p>Quick messages:</p>
            {quickMessages.map((msg, index) => (
              <button 
                key={index}
                className="quick-msg-btn"
                onClick={() => sendMessage(msg)}
              >
                {msg}
              </button>
            ))}
            <button 
              className="custom-msg-btn"
              onClick={() => sendMessage('Hi IgosEvents!')}
            >
              💬 Start Custom Chat
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button 
        className="whatsapp-float"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
        <span className="pulse-ring"></span>
      </button>
    </>
  );
}

export default WhatsAppWidget;