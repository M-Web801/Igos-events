import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const [visibleWords, setVisibleWords] = useState(0);
  
  const taglineWords = [
    "Aesthetic",
    "Moments",
    "Competently",
    "Crafted",
    "In Excellence,",
    "Unforgettable"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleWords < taglineWords.length) {
        setVisibleWords(visibleWords + 1);
      } else {
        setTimeout(() => setVisibleWords(0), 3000);
      }
    }, 600);
    
    return () => clearTimeout(timer);
  }, [visibleWords, taglineWords.length]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            {/* Left Column - Animated Tagline */}
            <div className="footer-col footer-main">
              <h3>IgosEvents!</h3>
              <div className="footer-tagline">
                {taglineWords.map((word, index) => (
                  <span
                    key={index}
                    className={`tagline-word ${index < visibleWords ? 'visible' : ''}`}
                  >
                    {word}{' '}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h3>Services we offer</h3>
              <ul>
                <li>&#x2728;Weddings</li>
                <li>&#x2728;Corporate Events</li>
                <li>&#x2728;Birthdays</li>
                <li>&#x2728;Proposals</li>
                <li>&#x2728;Bridal Showers</li>
                <li>&#x2728;Themed Parties</li>
              </ul>
            </div>

            {/* Contact with WhatsApp */}
            <div className="footer-col">
              <h3>Contact Us</h3>
              <ul className='contact-list-horizontal'>
                <li>No 1 Peshe road Karu-site Abuja Nigeria</li>
                <li>
                  📧 <a href="mailto:igosevents1@gmail.com" className="contact-link">info@igosevents.com.ng
                  </a> 
                </li>
                <li>
                  📱 <a href="tel:+2349162499055" className="contact-link">
                    +234 916 249 9055
                  </a>
                </li>
                 <li>
                  📱 <a href="tel:+2349027868319" className="contact-link">
                    +234 902 786 8319
                  </a>
                </li>
                <li>
                  💬 <a 
                    href="https://wa.me/23408155870098?text="
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link whatsapp-link"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
              </div>
             
            </div>
          
          </div>
        </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 IgosEvents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;