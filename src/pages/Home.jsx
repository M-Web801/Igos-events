import React from 'react';
import Hero from '../components/Hero';
import ImageSlider from '../components/ImageSlider';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';  
import SocialSection from '../components/SocialSection';

function Home() {
  return (
    <div className="home">
      <Hero />
      <ImageSlider />
      <StatsSection />
      <TestimonialsSection />
      <SocialSection />
    </div>
  );
}

export default Home;