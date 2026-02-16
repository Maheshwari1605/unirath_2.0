import './About.css'

const aboutStats = [
  { value: '99%', label: 'Claim Accuracy' },
  { value: '24/7', label: 'Global Coverage' },
  { value: '70%', label: 'Cost Savings' },
]

const industries = [
  {
    title: 'Healthcare & Insurance',
    description:
      'Comprehensive RCM services, medical record retrieval, and administrative support for healthcare providers, hospitals, and insurance companies.',
    icon: 'healthcare',
  },
  {
    title: 'Legal & Financial Services',
    description:
      'Specialized support for legal firms and financial institutions including document processing, data management, and customer service.',
    icon: 'legal',
  },
  {
    title: 'Technology & SaaS',
    description:
      'IT automation, technical support, CRM management, and customer success services for tech companies and SaaS platforms.',
    icon: 'tech',
  },
  {
    title: 'E-commerce & Retail',
    description:
      '24/7 customer support, order processing, inventory management, and back-office operations for e-commerce and retail businesses.',
    icon: 'ecommerce',
  },
]

const whyPartner = [
  {
    title: 'Experienced Professionals',
    description: 'Skilled specialists trained to global standards, combining domain expertise with technological innovation.',
    icon: 'team',
  },
  {
    title: 'Data Security First',
    description: 'Full compliance with HIPAA, GDPR, and ISO protocols ensuring your data is always protected.',
    icon: 'shield',
  },
  {
    title: 'Scalable Operations',
    description: 'Expand or downsize quickly as per project demand with flexible resource allocation.',
    icon: 'scale',
  },
  {
    title: '24/7 Global Coverage',
    description: 'Continuous support across time zones ensuring your business never stops.',
    icon: 'clock',
  },
  {
    title: 'Proven Cost Advantage',
    description: 'Save up to 60–70% on operational expenses without compromising on quality.',
    icon: 'cost',
  },
  {
    title: 'Client-Centric Approach',
    description: 'Dedicated project managers and real-time reporting for complete transparency.',
    icon: 'client',
  },
]

const Icon = ({ name, className }) => {
  const icons = {
    team: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    scale: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    cost: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    client: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    healthcare: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    legal: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    tech: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    ecommerce: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  }
  return <span className={className}>{icons[name] || null}</span>
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-theme" aria-hidden>
        <div className="about-theme-gradient" />
        <div className="about-theme-pattern" />
      </div>
      <div className="container about-container">
        <header className="about-hero">
          <span className="about-label">Who we are</span>
          <h1 className="about-title">About Us</h1>
          <p className="about-lead">
            We are a professional outsourcing and process management company helping global
            organizations streamline their non-core operations.
          </p>
          <div className="about-intro-text">
            <p className="about-text">
              Our mission is to deliver exceptional service quality at a fraction of global
              operating costs — powered by skilled professionals, process automation, and a
              strong compliance framework. Our teams combine domain expertise, technological
              innovation, and cultural alignment to provide seamless support that feels truly
              in-house.
            </p>
            <p className="about-text">
              From Healthcare RCM and Medical Record Retrieval to Customer Support and
              Back-Office Operations, our India-based team acts as your trusted global partner
              — delivering speed, precision, and reliability 24/7.
            </p>
          </div>
        </header>

        <div className="about-stats">
          {aboutStats.map((stat, i) => (
            <div key={i} className="about-stat-card" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-features">
          <div className="about-section-head">
            <span className="about-section-label">Our strengths</span>
            <h2 className="about-features-title">Why Partner with Us</h2>
          </div>
          <div className="about-features-grid">
            {whyPartner.map((item, i) => (
              <div key={i} className="about-feature-card" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="about-feature-icon">
                  <Icon name={item.icon} className="about-feature-icon-svg" />
                </span>
                <h3 className="about-feature-title">{item.title}</h3>
                <p className="about-feature-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-industries">
          <div className="about-section-head">
            <span className="about-section-label">Sectors</span>
            <h2 className="about-industries-title">Industries We Serve</h2>
          </div>
          <div className="about-industries-grid">
            {industries.map((item, i) => (
              <div key={i} className="about-industry-card" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="about-industry-icon">
                  <Icon name={item.icon} className="about-industry-icon-svg" />
                </span>
                <h3 className="about-industry-title">{item.title}</h3>
                <p className="about-industry-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
