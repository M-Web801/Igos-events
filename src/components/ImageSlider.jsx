import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slider images - ADD HIS ACTUAL PHOTOS HERE!
  const slides = [
    {
      image: '/slide1.jpeg',
      title: 'Timeless Elegance in grand venues',
      description: 'Creating magical moments in Ballroom and open-air receptions '
    },
    {
      image: '/slide2.jpeg',
      title: 'Corporate Excellence',
      description: 'Professional events that impress'
    },
    {
      image: '/slide3.jpeg',
      title: 'Birthday Celebrations',
      description: 'Making every milestone unforgettable'
    },
    {
      image: '/slide4.jpeg',
      title: 'Luxury Proposals',
      description: 'The perfect "Yes" moment'
    },
    {
      image: '/slide5.jpeg',
      title: 'Themed Parties',
      description: 'Bringing your vision to life'
    }
  ];

  // Auto-play slider every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider-header">
          <h2 className="section-title" >Featured Events</h2>
          <div className="title-accent"></div>
          <h3 className="section-subtitle">Have a peak at our Bespoke Experiences</h3>
        </div>

        <div className="image-slider">
          {/* Slides */}
          <div className="slides-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`
                }}
              >
                <div className="slide-content">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="slider-arrow prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="slider-arrow next" onClick={nextSlide}>
            ❯
          </button>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="slider-cta">
          <a href="/gallery" className="btn btn-primary btn-large">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;