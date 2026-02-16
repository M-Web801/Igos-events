import React, { useState } from 'react';
import '../styles/Services.css';

function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedPackage, setExpandedPackage] = useState(null);

 const services = [
  {
    id: 1,
    title: 'Wedding Planning',
    iconClass: 'fa-solid fa-heart',
    iconColor: 'red',
    shortDesc: 'Create the wedding of your dreams with our comprehensive planning services.',
    features: [
      'Full venue decoration & setup',
      'Bridal party coordination',
      'Vendor management & coordination',
      'Custom color scheme & theme design',
      'Ceremony & reception planning',
      'Timeline creation & management',
      'Guest seating arrangements',
      'Day-of coordination team',
      'Rehearsal coordination',
      'Emergency kit & backup plans',
      'Post-event cleanup'
    ]
  },
  {
    id: 2,
    title: 'Corporate Events',
    iconClass: 'fa-solid fa-briefcase', 
    iconColor: '#1E90FF',
    shortDesc: 'Professional events that enhance your brand and engage your audience.',
    features: [
      'Professional venue setup',
      'Brand integration & theming',
      'Audio-visual equipment coordination',
      'Registration & guest management',
      'Corporate branding & signage',
      'Keynote speaker coordination',
      'Networking area setup',
      'Product launch support',
      'Team building activities',
      'Conference room arrangements',
      'Corporate catering coordination'
    ]
  },
  {
    id: 3,
    title: 'Birthday Parties',
    iconClass: 'fa-solid fa-cake-candles', 
    iconColor: '#e4c413ff',
    shortDesc: 'Celebrate your special day with style and unforgettable memories.',
    features: [
      'Custom theme design',
      'Venue decoration & styling',
      'Entertainment coordination',
      'Guest list management',
      'Photo booth setup',
      'Cake & dessert table styling',
      'Party favors & gift arrangements',
      'Music & DJ coordination',
      'Surprise element planning',
      'Balloon installations',
      'Lighting & ambiance setup'
    ]
  },
  {
    id: 4,
    title: 'Kids Parties',
    iconClass: 'fa-solid fa-children',
    iconColor: '#87CEEB',
    shortDesc: 'Magical celebrations that bring joy to your little ones and their friends.',
    features: [
      'Age-appropriate theme design',
      'Character appearances/mascots',
      'Games & activities coordination',
      'Bouncing castle arrangements',
      'Face painting & entertainment',
      'Kid-friendly catering options',
      'Party bags & favors',
      'Cartoon/themed decorations',
      'Safe play area setup',
      'Parent seating arrangements',
      'Cake cutting ceremony'
    ]
  },
  {
    id: 5,
    title: 'Bridal Showers',
    iconClass: 'fa-solid fa-champagne-glasses', 
    iconColor: '#fa3b57ff',
    shortDesc: 'Elegant and intimate celebrations for the bride-to-be.',
    features: [
      'Elegant venue decoration',
      'Bridal games & activities',
      'Gift table & display setup',
      'Floral arrangements',
      'Dessert bar styling',
      'Photo backdrop design',
      'Guest book station',
      'Bridal throne/chair decoration',
      'Champagne toast coordination',
      'Intimate atmosphere creation',
      'Bridal party coordination'
    ]
  },
  {
    id: 6,
    title: 'Proposals',
    iconClass: 'fa-solid fa-ring', 
    iconColor: '#DC143C',
    shortDesc: 'Picture-perfect proposal moments that lead to a lifetime of happiness.',
    features: [
      'Romantic setup & decoration',
      'Surprise coordination',
      'Photographer/videographer arrangement',
      'Candlelight & floral arrangements',
      'Custom signage ("Will You Marry Me")',
      'Music & ambiance setup',
      'Privacy & timing coordination',
      'Champagne & celebration setup',
      'Witness coordination (if needed)',
      'Backup plan for weather',
      'Post-proposal celebration setup'
    ]
  },
  {
    id: 7,
    title: 'Anniversaries',
    iconClass: 'fa-solid fa-gift', 
    iconColor: '#FF6347',
    shortDesc: 'Honor your love story with celebrations as timeless as your commitment.',
    features: [
      'Milestone celebration theming',
      'Romantic/elegant decoration',
      'Memory lane photo displays',
      'Renewal ceremony coordination',
      'Guest entertainment',
      'Toast & speech coordination',
      'Custom cake & dessert table',
      'Slideshow/video presentation setup',
      'Dance floor & music',
      'Special couple recognition',
      'Guest favors'
    ]
  },
  {
    id: 8,
    title: 'Themed Parties',
    iconClass: 'fa-solid fa-masks-theater',
    iconColor: '#9370DB',
    shortDesc: 'Immersive experiences that transport your guests to another world.',
    features: [
      'Custom theme conceptualization',
      'Immersive decor & props',
      'Costume coordination assistance',
      'Themed entertainment',
      'Specialty lighting & effects',
      'Themed food & beverage stations',
      'Interactive photo opportunities',
      'Themed music playlist',
      'Props & accessories',
      'Entrance/welcome area theming',
      'Themed party favors'
    ]
  }
];
   
  
  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      color: '#FFD700',
      tagline: 'Perfect Start',
      price: 'Contact for Pricing',
      features: [
        'Event consultation',
        'Basic decoration',
        'Venue coordination',
        'Timeline planning',
        'Limited vendor coordination',
        'Setup & breakdown'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      color: '#c21164',
      tagline: 'Enhanced Experience',
      price: 'Contact for Pricing',
      popular: true,
      features: [
        'Everything in Basic',
        'Enhanced decorations',
        'Full vendor management',
        'Catering coordination',
        'Day-of coordinator',
        'Custom theme design',
        'Entertainment coordination'
      ]
    },
    {
      id: 'luxury',
      name: 'Luxury',
      color: '#e648a9ff',
      tagline: 'Ultimate Excellence',
      price: 'Contact for Pricing',
      features: [
        'Everything in Premium',
        'Luxury decorations & props',
        'Full catering service',
        'Security personnel',
        'Photography/videography',
        'Transportation coordination',
        'VIP guest services',
        'Complete A-Z planning',
        'Unlimited revisions'
      ]
    }
  ];

  const addOns = [
    {
      category: 'Catering Services',
      items: ['Full buffet service', 'Cakes and small chops', 'Plated meals', 'Cocktail hour', 'Dessert stations', 'Bar service', 'Custom menu design']
    },
    {
      category: 'Content Creation',
      items: ['Professional photography', 'Videography', 'Same-day content', 'Social media coverage']
    },
    {
      category: 'Technical Setup',
      items: ['Stage setup', 'Lighting design', 'Sound systems', 'Visual effects']
    },
    {
      category: 'Logistics',
      items: ['Security personnel', 'Guest management', 'Crowd control']
    },
    {
      category: 'Styling',
      items: ['Floral arrangements', 'Custom invitations', 'Themed decorations']
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Crafting Unforgettable Moments</h1>
          <p className="services-hero-subtitle">
            From vision to execution, we handle every detail so you don't have to
          </p>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="special-section">
        <div className="container">
          <h2 className="section-title">Why Choose IgosEvents?</h2>
          <p className="section-subtitle">Your One-Stop Event Solution</p>
          
          <div className="special-grid">
            <div className="special-card">
              <div className="special-icon"></div>
              <h3>Full Coordination</h3>
              <p>Complete event management from start to finish</p>
              <p>Ushers and Hostesses</p>
            </div>
            <div className="special-card">
              <div className="special-icon"></div>
              <h3>Catering Included</h3>
              <p>Delicious menus tailored to your taste <br />Includes cakes, Canapes, Small chops</p>
            </div>
            <div className="special-card">
              <div className="special-icon"></div>
              <h3>Security Services</h3>
              <p>Professional security for your peace of mind</p>
            </div>
            <div className="special-card">
              <div className="special-icon"></div>
              <h3>Training Services</h3>
              <p>Event planning workshops and consultations</p>
            </div>
            <div className="special-card">
              <div className="special-icon"></div>
              <h3>Custom Packages</h3>
              <p>Tailored solutions for your unique needs</p>
            </div>
            <div className="special-card">
              <div className="special-icon"></div>
              <h3>No Outsourcing Needed</h3>
              <p>Everything you need under one roof</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <h2 className="elegant-title">Our Services</h2>
          <p className="section-subtitle">Excellence in every celebration</p>

          
              <div className="services-grid">
  {services.map(service => (
    <div key={service.id} className="service-card">
      
      {/* Icon Wrapper */}
      <div className="service-icon-wrapper">
        <i 
          className={service.iconClass || 'fa-solid fa-star'}
          style={{ 
            color: service.iconColor || '#887613ff', 
            fontSize: '4.5rem' 
          }}
        ></i>
      </div>
      
      {/* Background Image Area WITH TITLE */}
      <div className="service-image">
        <div className="service-overlay">
          <h3>{service.title}</h3> {/* ← MAKE SURE THIS IS HERE! */}
        </div>
      </div>
      
      {/* Service Content */}
      <div className="service-content">
        <p className="service-desc">{service.shortDesc}</p>
        <p className="service-price">Contact for Pricing</p>
        
        <div className={`service-features ${expandedService === service.id ? 'expanded' : ''}`}>
          <h4>Key Features:</h4>
          <ul>
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            {expandedService === service.id && service.features.slice(3).map((feature, index) => (
              <li key={index + 3}>{feature}</li>
            ))}
          </ul>
        </div>

        <button 
          className="see-more-btn"
          onClick={() => toggleService(service.id)}
        >
          {expandedService === service.id ? 'Show Less' : 'See All Features'} 
          <span className={expandedService === service.id ? 'rotate' : ''}>▼</span>
        </button>
      </div>
    </div>
  ))}
</div>
</div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Our Packages</h2>
          <p className="section-subtitle">Choose the perfect plan for your event</p>

          <div className="packages-grid">
            {packages.map(pkg => (
              <div 
                key={pkg.id} 
                className={`package-card ${pkg.popular ? 'popular' : ''}`}
                style={{ '--package-color': pkg.color }}
              >
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <p className="package-tagline">{pkg.tagline}</p>
                  <p className="package-price">{pkg.price}</p>
                </div>

                <div className={`package-features ${expandedPackage === pkg.id ? 'expanded' : ''}`}>
                  <ul>
                    {pkg.features.slice(0, 4).map((feature, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                    {expandedPackage === pkg.id && pkg.features.slice(4).map((feature, index) => (
                      <li key={index + 4}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.features.length > 4 && (
                  <button 
                    className="package-see-more"
                    onClick={() => togglePackage(pkg.id)}
                  >
                    {expandedPackage === pkg.id ? 'Show Less' : 'See All Features'}
                    <span className={expandedPackage === pkg.id ? 'rotate' : ''}>▼</span>
                  </button>
                )}

                <a href="/contact" className="package-btn">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="addons-section">
        <div className="container">
          <h2 className="section-title">Available Add-Ons</h2>
          <p className="section-subtitle">Enhance your event with our premium extras</p>

          <div className="addons-grid">
            {addOns.map((addon, index) => (
              <div key={index} className="addon-card">
                <h3>{addon.category}</h3>
                <ul>
                  {addon.items.map((item, i) => (
                    <li key={i}>
                      <span className="addon-bullet"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">Simple, seamless, spectacular</p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Share your vision and we'll understand your needs</p>
            </div>
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a customized plan and handle all details</p>
            </div>
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Sit back and enjoy while we bring your event to life</p>
            </div>
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Celebration</h3>
              <p>Create unforgettable memories with your guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Start Planning?</h2>
          <p>Let's create something extraordinary together</p>
          <a href="/contact" className="btn btn-primary btn-large">
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;