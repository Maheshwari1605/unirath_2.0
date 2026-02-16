import { Link } from 'react-router-dom'
import './OurServices.css'

/* Simple, recognizable icons — one concept per service */
const SERVICE_ICONS = {
  rcm: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="our-service-icon">
      <path d="M18 14h28a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2z" />
      <path d="M22 24h16M22 32h12M22 40h20" />
      <path d="M44 28v16M40 32h8M40 40h8" />
    </svg>
  ),
  mrr: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="our-service-icon">
      <path d="M20 10h24a4 4 0 0 1 4 4v36a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" />
      <path d="M26 22h12M26 30h16M26 38h10" />
      <path d="M32 48v4M28 52h8" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="our-service-icon">
      <path d="M18 34V22a14 14 0 0 1 28 0v12" />
      <path d="M32 38a4 4 0 0 1 4 4v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4z" />
      <path d="M22 38a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-4a4 4 0 0 1 4-4z" />
      <path d="M42 38a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-4a4 4 0 0 1 4-4z" />
    </svg>
  ),
  backoffice: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="our-service-icon">
      <path d="M20 12h24v40H20z" />
      <path d="M28 12v40M20 24h24M20 32h24M20 40h24" />
      <path d="M24 28h4M24 36h4M32 28h8M32 36h6" />
    </svg>
  ),
  it: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="our-service-icon">
      <circle cx="32" cy="32" r="12" />
      <path d="M32 20v-4M32 48v-4M20 32h-4M48 32h4M25 25l-3-3M43 43l-3-3M43 25l3-3M25 43l-3 3" />
      <path d="M32 26v12M26 32h12" />
    </svg>
  ),
  accounting: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="our-service-icon">
      <rect x="14" y="14" width="36" height="36" rx="4" />
      <path d="M22 26h20M22 34h20M22 42h12" />
      <path d="M26 26v16M34 26v16M38 30h4M38 38h4" />
    </svg>
  ),
}

const services = [
  {
    slug: 'revenue-cycle-management',
    title: 'Revenue Cycle Management',
    description:
      'Efficient, compliant, and accurate medical billing and RCM solutions for healthcare providers, billing firms, and hospitals. HIPAA-compliant processes with 99% claim accuracy, reduced AR days & faster reimbursements.',
    illustration: 'rcm',
    image: '/images/rcm-service.png',
  },
  {
    slug: 'medical-record-retrieval',
    title: 'Medical Record Retrieval',
    description:
      'Reliable and secure retrieval of medical records for insurance companies, attorneys, and healthcare networks. Rapid turnaround (24–48 hours) with automated tracking, reporting, and fully HIPAA compliant workflows.',
    illustration: 'mrr',
    image: '/images/medical-record-retrieval-service.png',
  },
  {
    slug: 'customer-support-services',
    title: 'Customer Support Services',
    description:
      'Enhance customer experience with our multilingual, round-the-clock support teams. Voice, Email, Chat, Social Media, and Technical Helpdesk services. Trained, English-proficient agents with 24/7 availability aligned with US time zones.',
    illustration: 'support',
    image: '/images/customer-support-service.png',
  },
  {
    slug: 'back-office-administrative-support',
    title: 'Back-Office & Administrative Support',
    description:
      'Simplify your operations with specialized back-office teams managing critical functions. Data entry, document indexing, claims processing, appointment scheduling, CRM management, and virtual assistant support.',
    illustration: 'backoffice',
    image: '/images/back-office-service.png',
  },
  {
    slug: 'it-automation-services',
    title: 'IT & Automation Services',
    description:
      'Digital enablement and automation to help your business work smarter. AI-based workflow automation, CRM/ERP integration, API setup, dashboard creation, reporting tools, and cloud support & maintenance.',
    illustration: 'it',
    image: '/images/it-automation-service.png',
  },
  {
    slug: 'accounting-services',
    title: 'Accounting Services',
    description:
      'Comprehensive accounting solutions including bookkeeping, accounts payable/receivable, payroll management, sales tax, financial analysis, Virtual CFO services, and specialized e-commerce accounting.',
    illustration: 'accounting',
    image: '/images/accounting-service.png',
  },
]

export default function OurServices() {
  return (
    <section className="our-services" id="services">
      <div className="our-services-theme">
        <div className="our-services-theme-gradient" aria-hidden />
        <div className="our-services-theme-pattern" aria-hidden />
      </div>
      <div className="container our-services-container">
        <div className="our-services-header">
          <span className="our-services-label">What we offer</span>
          <h2 className="our-services-title">Our Services</h2>
          <p className="our-services-subtitle">
            End-to-end outsourcing and process management for healthcare, support, and operations.
          </p>
        </div>
        <div className="our-services-grid">
          {services.map((service, i) => (
            <Link
              key={i}
              to={`/services/${service.slug}`}
              className="our-service-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="our-service-card-image">
                <span className="our-service-card-image-inner">
                  {service.image ? (
                    <img src={service.image} alt="" className="our-service-photo" />
                  ) : (
                    SERVICE_ICONS[service.illustration]
                  )}
                </span>
                <span className="our-service-card-image-overlay" aria-hidden />
              </div>
              <div className="our-service-card-body">
                <h3 className="our-service-title">{service.title}</h3>
                <p className="our-service-desc">{service.description}</p>
                <span className="our-service-cta">
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
