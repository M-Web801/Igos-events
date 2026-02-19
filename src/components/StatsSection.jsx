import React, { useState, useEffect, useRef } from 'react';
import '../styles/StatsSection.css';

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    events: 0,
    satisfaction: 0,
    years: 0,
    clients: 0,
  });

  const sectionRef = useRef(null);

  // Final target numbers
  const targets = {
    events: 200,
    satisfaction: 100,
    years: 8,
    clients: 50,
  };

  // 1. Visibility observer – only depends on sectionRef (stable ref object)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible]); // isVisible is ok here – prevents re-observing unnecessarily

  // 2. Counter animation – depends only on isVisible (no missing deps)
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(targets).forEach((key) => {
          if (prev[key] < targets[key]) {
            const increment = Math.ceil(targets[key] / steps);
            newCounts[key] = Math.min(prev[key] + increment, targets[key]);
            allComplete = false;
          } else {
            newCounts[key] = targets[key];
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return { ...prev, ...newCounts };
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]); // ← only real dependency is isVisible

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-overlay"></div>
      <div className="container">
        <div className="stats-header">
          <h2 className="section-title" style={{ color: 'var(--maroon)' }}>
            Excellence in Numbers
          </h2>
          <div className="title-accent"></div>
          <p className="section-subtitle" style={{ color: 'var(--black)' }}>
            Trusted by clients across Nigeria
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎉</div>
            <div className="stat-number">{counts.events}+</div>
            <div className="stat-label">Events Planned</div>
            <div className="stat-description">Successfully executed celebrations</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">{counts.satisfaction}%</div>
            <div className="stat-label">Client Satisfaction</div>
            <div className="stat-description">Happy clients, every time</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">{counts.years}+</div>
            <div className="stat-label">Years Experience</div>
            <div className="stat-description">Mastering the art of events</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{counts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
            <div className="stat-description">Building lasting relationships</div>
          </div>
        </div>

        <div className="stats-footer">
          <div className="rating-badge">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Rated 5.0 by our clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;