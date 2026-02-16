import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section 
  className="hero" 
  style={{
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
      <div className="hero-overlay"></div>
      <div className="hero-content">
 <h1 className="hero-title" style={{
     fontFamily: ' "Great Vibes", "Dancing Script", cursive',
  fontWeight: '400',
  fontStyle: 'normal',
  
}}>
  Nigeria's Leading <span style={{color: 'var(--white)'}}>Event Planners</span>
</h1>
 <p className="hero-subtitle">
  From intimate proposals to grand celebrations – serving clients across Nigeria<br/>
  <span style={{color: 'var(--gold)', fontWeight: '600', fontSize: '1.4rem'}}>Abuja • Lagos • Port Harcourt • Nationwide</span>
</p>
<div className="hero-services">
  <span className="service-tag">Weddings</span>
  <span className="service-tag">Proposals</span>
  <span className="service-tag">Bridal Showers</span>
  <span className="service-tag">Corporate Events</span>
  <span className="service-tag">Birthdays</span>
  <span className="service-tag">Kiddies Parties</span>
  <span className="service-tag">Themed Parties</span>
  <span className="service-tag">Anniversaries</span>
</div>

        <div className="hero-buttons">
          <a href="/gallery" className="btn btn-primary">View Our Work</a>
          <a href="/contact" className="btn btn-secondary">Get a Quote</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;
