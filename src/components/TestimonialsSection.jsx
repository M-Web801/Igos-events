import React, { useState, useEffect } from 'react';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria sidi-Ali',
      event: 'Wedding',
      rating: 5,
      text: 'Hi IgosEvents I am beyond grateful for the absolutely stunning decoration you delivered on my wedding day. Every detail was executed with excellence, elegance and so much creativity.you did not just decorate a venue, you transformed my wedding into a beautiful dream. I could not have asked for a better decorator for such a special day. Highly recommend!',
      image: '👰🏾'
    },
    {
      id: 2,
      name: 'Mr. Tunde Okafor',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional, efficient, and creative! They handled our company\'s annual gala with such excellence. Our guests were thoroughly impressed. Will definitely work with them again.',
      image: '🤵🏾'
    },
    {
      id: 3,
      name: 'Mrs. Blessing Eze',
      event: 'Birthday Party',
      rating: 5,
      text: 'My daughter\'s 10th birthday was magical! The themed decorations and activities were beyond amazing. IgosEvents brought our vision to life. Thank you so much!',
      image: '👩🏾'
    },
    {
      id: 4,
      name: 'Mr. David Nnamdi',
      event: 'Proposal Setup',
      rating: 5,
      text: 'They helped me create the perfect proposal moment! My fiancée said YES and she couldn\'t stop talking about how beautiful the setup was. I confidently recommend your services!',
      image: '🤵🏾‍♂️'
    },
    {
      id: 5,
      name: 'Fauziya Usman',
      event: 'Bridal Shower',
      rating: 4.5,
      text: 'Elegant, classy, and absolutely stunning! My bridal shower was everything I dreamed of. The attention to detail was impeccable. A job well done. you outdid yourself!',
      image: '👰🏾‍♀️'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="title-accent"></div>
          <p className="section-subtitle">
            Real experiences from real celebrations
          </p>
        </div>

        <div className="testimonials-carousel">
          <button className="testimonial-arrow prev" onClick={prevSlide}>
            ❮
          </button>

          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">"</div>
                
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="testimonial-text">
                  {testimonial.text}
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.image}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-event">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-arrow next" onClick={nextSlide}>
            ❯
          </button>

          {/* Dots Navigation */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="trust-badge">
          <div className="trust-item">
            <span className="trust-icon">✅</span>
            <span>100% Satisfaction Guaranteed</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏆</span>
            <span>Award-Winning Service</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <span>5.0 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;