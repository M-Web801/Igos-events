import React from 'react';
import SocialSection from '../components/SocialSection';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <h1 className="about-hero-title">Our Story</h1>
          <h3 className="about-hero-subtitle">Where Passion Meets Perfection</h3>

        </div>
        <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
      </section>

      {/* Story Section with Image */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            {/* Image Side */}
            <div className="story-image-side">
              <div className="founder-image-wrapper">
                <img 
                  src="/founder.jpeg" 
                  alt="IgosEvents Founder & CEO" 
                  className="founder-image"
                />
                <div className="image-badge">
                  <span className="badge-icon"></span>
                  <p>Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Story Side */}
            <div className="story-content-side">
              <h2 className="fancy-title">From Passion to Perfection</h2>
              <div className="title-accent-left"></div>
              
              <div className="story-text">
                <p>
                  In <span className="highlight">2019</span>, a young visionary discovered his calling - not in books or boardrooms, but in the art of creating unforgettable moments. What began as late-night research sessions and countless hours watching industry mentors transformed into <span className="highlight-gold">IgosEvents</span>, Nigeria's premier event planning destination.
                </p>

                <p>
                  Our founder's journey started with a simple passion: the belief that every celebration deserves to be extraordinary. While others slept, he studied. While others settled, he perfected his craft. This dedication to excellence became the foundation of what IgosEvents represents today.
                </p>

                <div className="story-quote">
                  <div className="quote-mark">"</div>
                  <p>We don't just plan events; we craft experiences that linger in memories long after the last guest has left.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="about-difference">
        <div className="container">
          <h2 className="section-title">What Sets Us Apart</h2>
          <div className="title-accent"></div>
          <p className="section-subtitle">Excellence in Every Detail</p>

          <div className="difference-grid">
            <div className="difference-card">
              <div className="difference-icon"></div>
              <h3>Attention to Detail</h3>
              <p>In an industry where details are often overlooked, we obsess over them. Every centerpiece placement, every color coordination, every timeline - nothing escapes our attention.</p>
            </div>

            <div className="difference-card">
              <div className="difference-icon"></div>
              <h3>Uncompromising Quality</h3>
              <p>We don't follow trends - we set them. We don't compromise on quality - we define it. Your celebration deserves nothing less than perfection.</p>
            </div>

            <div className="difference-card">
              <div className="difference-icon"></div>
              <h3>Uniqueness in Execution</h3>
              <p>No two events are alike because no two clients are alike. We bring fresh creativity and personalized touches to every celebration we craft.</p>
            </div>

            <div className="difference-card">
              <div className="difference-icon"></div>
              <h3>Passion-Driven Service</h3>
              <p>We treat your vision as our own. From intimate proposals to grand celebrations, we bring the same unwavering commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="about-why-overlay"></div>
        <div className="container">
          <div className="why-content">
            <h2 className="why-title" style={{fontFamily: "'Dancing Script', 'Great Vibes', cursive"}}>Why Choose IgosEvents?</h2>
            <div className="title-accent"></div>
            
            <p className="why-text">
              Because your celebration deserves more than a checklist. It deserves passion, precision, and a team that treats your vision as their own.
            </p>

            <div className="why-features">
              <div className="why-feature">
                <span className="feature-check">✓</span>
                <span>6+ Years of Excellence</span>
              </div>
              <div className="why-feature">
                <span className="feature-check">✓</span>
                <span>500+ Successful Events</span>
              </div>
              <div className="why-feature">
                <span className="feature-check">✓</span>
                <span>100% Client Satisfaction</span>
              </div>
              <div className="why-feature">
                <span className="feature-check">✓</span>
                <span>Personalized Approach</span>
              </div>
            </div>

            <div className="why-cta">
              <a href="/contact" className="btn btn-primary btn-large">
                Start Your Journey With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="title-accent"></div>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Excellence</h3>
              <p>We pursue perfection in every aspect of event planning, from concept to execution.</p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Integrity</h3>
              <p>Transparency, honesty, and ethical practices guide every decision we make.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Innovation</h3>
              <p>We constantly evolve, bringing fresh ideas and creative solutions to every event.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Dedication</h3>
              <p>Your dream is our mission. We go above and beyond to bring your vision to life.</p>
            </div>
          </div>
        </div>
      </section>
      <SocialSection />
    </div>
  );
}

export default About;