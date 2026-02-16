import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() { 
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', eventDate: '',
    guestCount: '', budgetRange: '', message: ''
  }); 

  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');

  useEffect(() => {
    emailjs.init('xua3U1IlcXBjEYgLs');
  }, []);

  const showCustomAlert = (type) => {
    setAlertType(type);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const serviceID = 'service_gj2azto';
    const templateID = 'template_1fidsq7';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      event_type: formData.eventType,
      event_date: formData.eventDate || 'Not specified',
      guest_count: formData.guestCount || 'Not specified',
      budget_range: formData.budgetRange || 'Not specified',
      message: formData.message,
    };

    try {
      console.log('Sending email...');
      
      const response = await emailjs.send(serviceID, templateID, templateParams);

      console.log('✅ SUCCESS!', response);
      
      showCustomAlert('success');

      setFormData({
        name: '', email: '', phone: '', eventType: '', eventDate: '',
        guestCount: '', budgetRange: '', message: ''
      });

    } catch (error) {
      console.error('❌ ERROR:', error);
      
      showCustomAlert('error');
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // ← ALL const declarations and helper functions MOVED HERE (before return)
  const eventTypes = [
    'Wedding Planning',
    'Corporate Events',
    'Birthday Parties',
    'Kids Parties',
    'Bridal Showers',
    'Proposals',
    'Anniversaries',
    'Themed Parties',
    'Other'
  ];

  const budgetRanges = [
    'Under ₦500,000',
    '₦500,000 - ₦1,000,000',
    '₦1,000,000 - ₦2,000,000',
    '₦2,000,000 - ₦5,000,000',
    'Above ₦5,000,000',
    'Flexible/Not Sure'
  ];

  const faqs = [
    {
      id: 1,
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 3-6 months in advance for major events like weddings and corporate functions. However, we can accommodate shorter timelines depending on availability and event complexity.'
    },
    {
      id: 2,
      question: 'Do you provide catering services?',
      answer: 'Yes! We offer full catering services as part of our packages. We can customize menus to suit your preferences, dietary requirements, and cultural traditions.'
    },
    {
      id: 3,
      question: 'Can I customize my package?',
      answer: 'Absolutely! All our packages are fully customizable. We work with you to create a tailored solution that fits your vision, needs, and budget.'
    },
    {
      id: 4,
      question: 'Do you handle venue selection?',
      answer: 'Yes, we assist with venue selection and coordinate all logistics. We have partnerships with premium venues across the region and can help you find the perfect location.'
    },
    {
      id: 5,
      question: 'What areas do you serve?',
      answer: 'We primarily serve the local area and surrounding regions. For destination events, please contact us to discuss availability and travel arrangements.'
    },
    {
      id: 6,
      question: 'How does payment work?',
      answer: 'We typically require a deposit to secure your date, with the balance due closer to the event. We offer flexible payment plans and will discuss all details during your consultation.'
    },
    {
      id: 7,
      question: 'What if I need to reschedule?',
      answer: 'We understand that plans can change. Please contact us as soon as possible, and we will work with you to find a solution based on your specific circumstances.'
    },
    {
      id: 8,
      question: 'Do you provide security services?',
      answer: 'Yes! Professional security personnel can be arranged as part of your event package or as an add-on service to ensure your event runs smoothly and safely.'
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // ← ONLY ONE return statement
  return (
    <div className="contact-page">
      {/* Custom Alert - placed at the top so it overlays everything */}
      {showAlert && (
        <>
          <div className="alert-overlay" onClick={closeAlert}></div>
          <div className={`custom-alert ${alertType}`}>
            <div className="custom-alert-icon">
              {alertType === 'success' ? '✅' : '❌'}
            </div>
            <h3 className="custom-alert-title">
              {alertType === 'success' ? 'Message Sent!' : 'Oops!'}
            </h3>
            <p className="custom-alert-message">
              {alertType === 'success' 
                ? 'Thank you! Your message has been sent successfully. We will get back to you within 12 hours.'
                : 'Something went wrong. Please try again or contact us directly via WhatsApp.'
              }
            </p>
            <button className="custom-alert-button" onClick={closeAlert}>
              OK
            </button>
          </div>
        </>
      )}

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <h1 className="contact-hero-title">Let's Plan Your Dream Event</h1>
          <p className="contact-hero-subtitle">Get In Touch Today</p>
        </div>
         <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
      </section>

      {/* Response Promise */}
      <section className="response-promise">
        <div className="container">
          <div className="promise-content">
            <span className="promise-icon"></span>
            <p>We respond to all inquiries within <strong>12 hours</strong></p>
          </div>
        </div>
      </section>

      {/* Contact Section - Split Screen */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-split">
            
            {/* LEFT: Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we'll get back to you shortly</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventType">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Event Type</option>
                      {eventTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guestCount">Number of Guests</label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="e.g., 100"
                      min="1"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budgetRange">Budget Range</label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Event *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Share your vision, special requests, or any questions you have..."
                  ></textarea>
                </div>
              <button 
  type="submit" 
  className="submit-btn"
  disabled={isSubmitting}
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>
              </form>
            </div>

            {/* RIGHT: Contact Info */}
            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <p className="info-subtitle">Reach out to us through any of these channels</p>

              <div className="contact-info-cards">
                
                {/* Phone */}
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <h3>Phone</h3>
                  <a href="tel:+2349162499055">+234 916 249 9055</a>
                  <a href="tel:+2349027868319">+234 902 786 8319</a>
                </div>

                {/* Email */}
                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <h3>Email</h3>
                  <a href="mailto:igosevents1@gmail.com">igosevents1@gmail.com</a> {/* Fixed text */}
                </div>

                {/* Address */}
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <h3>Office Location</h3>
                  <p>No 1 Peshe road<br />Karu-Site, Abuja,<br />Nigeria</p>
                </div>

                {/* Business Hours */}
                <div className="info-card">
                  <div className="info-icon">🕒</div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 6pm<br />
                     Saturday: 10am - 4pm<br />
                     Sunday: By Appointment</p>
                </div>

              </div>

              {/* Social Media */}
              <div className="social-media-section">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/igos.events?igsh=MmlsYnZ1c3k0NjU3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                    <span className="social-icon">📷</span>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/share/1CyxcQ85vu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                    <span className="social-icon">👍</span>
                    Facebook {/* Fixed extra quote */}
                  </a>
                  <a href="https://www.tiktok.com/@igosevents?_r=1&_t=ZS-93IS1SyiTUz" target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
                    <span className="social-icon">🎵</span>
                    Tiktok
                  </a>
                  <a href="https://wa.me/2348155870098" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                    <span className="social-icon">💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="whatsapp-cta">
                <p>Need immediate assistance?</p>
                <a href="https://wa.me/2348155870098?text=Hi! I'd like to inquire about event planning services" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="whatsapp-btn-large">
                  <span className="wa-icon">💬</span>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">Visit our office or get directions</p>
          
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.594580980267!2d7.565585674066669!3d9.009400389297394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f277e6bcafd%3A0x52f39d1a3e25087!2s1%20Peshe%20Road%2C%20Karu%2C%20Abuja%20900101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1770228586754!5m2!1sen!2sng" width="100%" height="450" style={{border:0}}
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='IgosEvents Office Location'>
            </iframe>
          </div>

          <div className="map-actions">
            <a 
              href="https://maps.google.com/?q=1 Peshe Road, Karu-Site, Abuja, Nigeria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-btn"
            >
              <span className="map-icon">🧭</span>
              Get Directions
            </a>
            <a 
              href="https://maps.google.com/?q=1 Peshe Road, Karu-Site, Abuja, Nigeria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-btn"
            >
              <span className="map-icon">📍</span>
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions</p>

          <div className="faq-container">
            {faqs.map(faq => (
              <div key={faq.id} className={`faq-item ${expandedFaq === faq.id ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${expandedFaq === faq.id ? 'rotate' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${expandedFaq === faq.id ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's bring your vision to life</p>
          <a href="#contact-form" className="btn btn-primary btn-large">
            Request Free Quote
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;