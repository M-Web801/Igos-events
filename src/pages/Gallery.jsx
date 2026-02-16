import React, { useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  // Gallery images - ADD HIS ACTUAL PHOTOS!
  const galleryImages = [
    // Weddings
    { id: 1, src: '/gallery/wedding1.jpg', category: 'weddings', title: 'Elegant Garden Wedding' },
    { id: 2, src: '/gallery/wedding2.jpg', category: 'weddings', title: 'Luxury Indoor Wedding' },
    { id: 3, src: '/gallery/wedding3.jpg', category: 'weddings', title: 'Wedding Fatiha' },
    { id: 4, src: '/gallery/wedding4.jpg', category: 'weddings', title: 'Traditional Wedding' },
    
    // Corporate
    { id: 5, src: '/gallery/corporate1.jpg', category: 'corporate', title: 'Corporate Gala' },
    { id: 6, src: '/gallery/corporate2.jpg', category: 'corporate', title: 'Prom Celebrations' },
    { id: 7, src: '/gallery/corporate3.jpg', category: 'corporate', title: 'Product Launch' },
    
    // Birthdays
    { id: 8, src: '/gallery/birthday1.jpg', category: 'birthdays', title: 'Milestone Birthday' },
    { id: 9, src: '/gallery/birthday2.jpg', category: 'birthdays', title: 'Themed Birthday Party' },
    { id: 10, src: '/gallery/birthday3.jpg', category: 'birthdays', title: 'Adult Birthday Celebration' },
    
    // Kiddies
    { id: 11, src: '/gallery/kiddies1.jpg', category: 'kiddies', title: 'Miraculousladybug Theme Party' },
    { id: 12, src: '/gallery/kiddies2.jpg', category: 'kiddies', title: 'Pawpatrol theme Birthday' },
    
    // Floral Arragements
    { id: 13, src: '/gallery/floral1.jpg', category: 'flowers', title: 'Intricate Floral Arrangement' },
    { id: 14, src: '/gallery/floral2.jpg', category: 'flowers', title: 'Beautiful Couple Entrance' },
    
    // Proposals
    { id: 15, src: '/gallery/proposal1.jpg', category: 'proposals', title: 'Romantic Proposal Setup' },
    { id: 16, src: '/gallery/proposal2.jpg', category: 'proposals', title: 'Roses Themed Proposal' },
     { id: 17, src: '/gallery/garland.jpg', category: 'proposals', title: 'Roses Themed Proposal' },
    
    // Themed
    { id: 18, src: '/gallery/themed1.jpg', category: 'themed', title: 'Halloween Party' },
    { id: 19, src: '/gallery/theme2.jpg', category: 'themed', title: 'Great Gatsby Theme' },
    
    // Anniversaries
    { id: 20, src: '/gallery/anniversary1.jpg', category: 'anniversaries', title: 'Golden Anniversary' },
    { id: 21, src: '/gallery/anniversary2.jpg', category: 'anniversaries', title: '25th Anniversary Celebration' },
  ];

  // Video gallery - ADD YOUR ACTUAL VIDEOS!
  const videos = [
    {
      id: 1,
      title: 'Luxury Wedding Highlights',
      thumbnail: '/gallery/video-thumb1.jpg',
      videoUrl: '/videos/wedding.mp4',
      description: 'A beautiful wedding setup and ceremony',
      category: 'weddings'
    },
    {
      id: 2,
      title: 'An Elegant Platinum-Jubilee event coverage',
      thumbnail: '/gallery/video-thumb2.jpg',
      videoUrl: '/videos/silver-jubilee.mp4',
      description: 'An Elegant Platinum-Jubilee event coverage',
      category: 'Birthdays'
    },
    {
      id: 3,
      title: 'Birthday Soiree',
      thumbnail: '/gallery/video-thumb3.jpg',
      videoUrl: '/videos/birthday-event.mp4',
      description: 'Pearl-Jubilee birthday party setup',
      category: 'Birthdays'
    },
    {
      id: 4,
      title: 'The Great Gatsby Themed Prom',
      thumbnail: '/gallery/video-thumb4.jpg',
      videoUrl: '/videos/prom.mp4',
      description: 'Vintage Vibes, Timeless memories',
      category: 'Themed Event'
    },
     {
      id: 5,
      title: 'Classy Wedding Reception Setup',
      thumbnail: '/gallery/video-thumb5.jpg',
      videoUrl: '/videos/reception.mp4',
      description: 'Elegant reception moment and decoration',
      category: 'Weddings'
    },
    {
      id: 6,
      title: 'Desert Bar Styling',
      thumbnail: '/gallery/video-thumb6.jpg',
      videoUrl: '/videos/drinks.mp4',
      description: 'A mini bar with Signature Drinks',
      category: 'Catering and Drinks'
    },
     {
      id: 7,
      title: 'Intimate Proposal Decor',
      thumbnail: '/gallery/video-thumb7.jpg',
      videoUrl: '/videos/intimateprop.mp4',
      description: 'A room elegantly decorated for a proposal moment',
      category: 'proposals'
    },
     {
      id: 8,
      title: 'Classy Bridal Shower Setup',
      thumbnail: '/gallery/video-thumb8.jpg',
      videoUrl: '/videos/Bridalshower.mp4',
      description: 'A classy and Aesthetically Pleasing Decoration',
      category: 'Bridals'
    },
      {
      id: 9,
      title: 'A walkthrough on our event Production',
      thumbnail: '/gallery/video-thumb9.jpg',
      videoUrl: '/videos/production.mp4',
      description: 'Transforming spaces, Producing perfection',
      category: 'Gallery'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Events'},
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'kiddies', label: 'Kiddies' },
    { id: 'Floral', label: 'Floral Arrangements' },
    { id: 'proposals', label: 'Proposals'},
    { id: 'themed', label: 'Themed Parties'},
    { id: 'anniversaries', label: 'Anniversaries' },
  ];

  // Filter images
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Open lightbox
  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  // Video modal functions
  const openVideoModal = (video) => {
    setVideoModal(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setVideoModal(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate lightbox
  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="container">
          <h1 className="gallery-hero-title">Our Portfolio</h1>
          <p className="gallery-hero-subtitle">
            Witness the magic we create, one event at a time
          </p>
        </div>
        <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
      </section>

      {/* Video Section */}
      <section className="video-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Event Highlights</h2>
            <p>Watch our events come to life</p>
          </div>

          <div className="video-grid">
            {videos.map(video => (
              <div 
                key={video.id} 
                className="video-card"
                onClick={() => openVideoModal(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                      <path d="M25 20L40 30L25 40V20Z" fill="#25D366"/>
                    </svg>
                  </div>
                  <div className="video-overlay">
                    <span className="video-duration">▶ Play Video</span>
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="gallery-filters-section">
        <div className="container">
          <div className="gallery-intro">
            <h2 className="fancy-title"> Explore Our Work</h2>
            <h3>Filter by event type to see what we do best</h3>
          </div>

          <div className="gallery-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span className="filter-label">{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="gallery-count">
            <p>Showing <strong>{filteredImages.length}</strong> {activeFilter === 'all' ? 'events' : activeFilter}</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>Click to view</p>
                  <span className="zoom-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container">
          <h2>Ready to Create Your Own Story?</h2>
          <p>Let's make your next event unforgettable</p>
          <a href="/contact" className="btn btn-primary btn-large">
            Book Your Event Now
          </a>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ❮
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.src} alt={lightboxImage.title} />
            <div className="lightbox-caption">
              <h3>{lightboxImage.title}</h3>
            </div>
          </div>

          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>
        </div>
      )}

      {/* Video Modal */}
      {videoModal && (
        <div className="video-modal" onClick={closeVideoModal}>
          <button className="video-modal-close" onClick={closeVideoModal}>✕</button>
          
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video 
              controls 
              autoPlay
              className="modal-video"
            >
              <source src={videoModal.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-modal-info">
              <h3>{videoModal.title}</h3>
              <p>{videoModal.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;