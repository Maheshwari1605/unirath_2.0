import { Link } from 'react-router-dom'
import './Footer.css'

const ourLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact Us', to: '/contact' },
]

const ourServices = [
  'Revenue Cycle Management',
  'Medical Record Retrieval',
  'Customer Support',
  'Back-Office Support',
  'IT & Automation',
  'Accounting Services',
]

const otherLinks = [
  { label: 'FAQ', to: '/#faq' },
  { label: 'About Us', to: '/about' },
  { label: 'Support', to: '/contact' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-wrap">
              <img
                src="/images/logo.png"
                alt=""
                className="footer-logo-img"
              />
              <span className="footer-logo-text">
                <span className="footer-logo-name">UNIRATH INFOTECH</span>
                <span className="footer-logo-tagline">ELEVATE. EXCEL. EMPOWER</span>
              </span>
            </Link>
            <p className="footer-brand-desc">
              Delivering Efficiency, Accuracy & Growth for US and International
              Businesses. Professional outsourcing and process management powered from
              India.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Our links</h3>
            <ul>
              {ourLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Our Services</h3>
            <ul>
              {ourServices.map((service) => (
                <li key={service}>
                  <Link to="/#services" className="footer-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Other links</h3>
            <ul>
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <a href="mailto:info@unirathinfo.com" className="footer-email">
              info@unirathinfo.com
            </a>
            <a href="mailto:support@unirathinfo.com" className="footer-email">
              support@unirathinfo.com
            </a>
            <p className="footer-address">
              B-524, The Landmark, Kudasan, Gandhinagar, Gujarat 382419
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Unirath Infotech. Safe. Flexible. Innovative.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-link">Privacy</Link>
            <Link to="/terms" className="footer-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
