import React from 'react';
import '../styles/SocialSection.css';

function SocialSection() {
  const socials = [
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/share/1CyxcQ85vu/?mibextid=wwXIfr',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://www.instagram.com/igos.events?igsh=MmlsYnZ1c3k0NjU3&utm_source=qr',
      color: '#E4405F'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://www.tiktok.com/@igosevents?_r=1&_t=ZS-93IS1SyiTUz',
      color: '#000000'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'Hello%20Igos%20Events!%20I%20would%20like%20to%20book%20your%20services%20for%20my%20event.',
      color: '#25D366'
    }
  ];

  return (
    <section className="social-section">
      <div className="container">
        <h2 className="social-title">Follow Our Journey</h2>
        <p className="social-subtitle">
          Stay connected and get daily event inspiration
        </p>

        <div className="social-grid">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{'--social-color': social.color}}
            >
              <div className="social-icon-wrapper">
                <span className="social-icon">{social.icon}</span>
              </div>
              <h3 className="social-name">{social.name}</h3>
              <p className="social-cta">Follow Us →</p>
            </a>
          ))}
        </div>

        <div className="social-hashtag">
          <p>#Igosevents #EventPlanningNigeria #AbujaEvents</p>
        </div>
      </div>
    </section>
  );
}

export default SocialSection;