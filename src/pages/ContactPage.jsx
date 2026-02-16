import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './ContactPage.css'

const serviceOptions = [
  '',
  'Revenue Cycle Management',
  'Medical Record Retrieval',
  'Customer Support Services',
  'Back-Office & Administrative Support',
  'IT & Automation Services',
  'Accounting Services',
  'Other',
]

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    label: 'Email us',
    value: 'info@unirath.com',
    href: 'mailto:info@unirath.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Company location',
    value: 'B-524, The Landmark, Kudasan, Gandhinagar, Gujarat 382419',
  },
]

// In dev, Vite proxies /api/contact → Google Apps Script (avoids CORS). In production, set VITE_CONTACT_API_URL to your backend or use the script URL if CORS is fixed.
const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
const CONTACT_SUBMIT_URL =
  import.meta.env.VITE_CONTACT_API_URL || '/api/contact'
const URL_IS_PLACEHOLDER =
  typeof GOOGLE_APPS_SCRIPT_URL === 'string' &&
  GOOGLE_APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    company: '',
    requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSubmitError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.requirements,
      company: formData.company,
    }

    const isConfigured = GOOGLE_APPS_SCRIPT_URL || import.meta.env.VITE_CONTACT_API_URL
    if (!isConfigured) {
      setSubmitError('Form backend not set. In .env set VITE_GOOGLE_APPS_SCRIPT_URL=your_script_exec_url (see docs/GOOGLE_SHEETS_SETUP.md).')
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch(CONTACT_SUBMIT_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const text = await res.text()
      let data = {}
      try {
        data = text ? JSON.parse(text) : {}
      } catch (_) {}

      if (import.meta.env.DEV) {
        console.log('[Contact form]', res.status, data.success !== undefined ? data : text.slice(0, 200))
      }

      // Google Apps Script often returns 302 redirect; treat as success. Otherwise rely on JSON.
      if (res.status === 302 || data.success === true) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          company: '',
          requirements: '',
        })
      } else if (data.success === false && data.message) {
        setSubmitError(data.message)
      } else if (res.ok && res.status >= 200 && res.status < 300) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          company: '',
          requirements: '',
        })
      } else if (res.status === 404) {
        setSubmitError(
          'Form URL not found (404). In .env set VITE_GOOGLE_APPS_SCRIPT_URL to your full Web App URL from Google: Sheet → Extensions → Apps Script → Deploy → Manage deployments → copy the Web app URL (must end with /exec). Replace any placeholder like YOUR_SCRIPT_ID with your real deployment ID, then restart the dev server.'
        )
      } else {
        setSubmitError(
          data.message ||
            `Submission failed (${res.status}). Check that your Apps Script runs without errors and the sheet name/tab is correct.`
        )
      }
    } catch (err) {
      const msg = err.message || 'Something went wrong. Please try again.'
      const isNetwork = /fetch|network|cors/i.test(msg)
      setSubmitError(isNetwork
        ? 'Request blocked (check your Apps Script has CORS: add doOptions and setHeaders — see docs/GOOGLE_SHEETS_SETUP.md).'
        : msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="contact-page">
        <div className="contact-page-theme" aria-hidden>
          <div className="contact-page-gradient" />
          <div className="contact-page-pattern" />
        </div>
        <div className="container contact-page-inner">
          <header className="contact-page-header">
            <span className="contact-page-label">Get in touch</span>
            <h1 className="contact-page-title">Contact Us</h1>
            <p className="contact-page-intro">
              Ready to streamline your operations and reduce costs? Tell us about your
              outsourcing requirements—our team will get back to you within 24 hours.
            </p>
          </header>

          <div className="contact-page-grid">
            <div className="contact-page-left">
              <div className="contact-page-info">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className={`contact-info-card ${!item.href ? 'contact-info-card-static' : ''}`}
                    style={{ animationDelay: `${100 + i * 80}ms` }}
                  >
                    {item.href ? (
                      <a href={item.href} className="contact-info-card-link">
                        <span className="contact-info-icon">{item.icon}</span>
                        <div className="contact-info-text">
                          <span className="contact-info-label">{item.label}</span>
                          <span className="contact-info-value">{item.value}</span>
                        </div>
                      </a>
                    ) : (
                      <>
                        <span className="contact-info-icon">{item.icon}</span>
                        <div className="contact-info-text">
                          <span className="contact-info-label">{item.label}</span>
                          <span className="contact-info-value">{item.value}</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="contact-page-map-wrap">
                <iframe
                  title="Company location - B-524, The Landmark, Kudasan, Gandhinagar"
                  src="https://maps.google.com/maps?q=B-524,+The+Landmark,+Kudasan,+Gandhinagar,+Gujarat+382419&z=15&output=embed"
                  className="contact-page-map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact-form-card-wrap" style={{ animationDelay: '200ms' }}>
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send a message</h2>
                <p className="contact-form-note">
                  Fields marked with <span className="contact-required">*</span> are required
                </p>
                {(!GOOGLE_APPS_SCRIPT_URL || URL_IS_PLACEHOLDER) && !import.meta.env.VITE_CONTACT_API_URL && (
                  <div className="contact-form-config-notice" role="alert">
                    {URL_IS_PLACEHOLDER
                      ? 'Replace YOUR_SCRIPT_ID in .env with your real Web App URL from Google (Deploy → Manage deployments → copy URL). It must end with /exec.'
                      : 'Form not connected. In .env set VITE_GOOGLE_APPS_SCRIPT_URL to your Apps Script exec URL (see docs/GOOGLE_SHEETS_SETUP.md), then restart the dev server.'}
                  </div>
                )}

                {submitted ? (
                  <div className="contact-form-success">
                    <span className="contact-form-success-icon">✓</span>
                    <h3 className="contact-form-success-title">Thank you</h3>
                    <p className="contact-form-success-text">
                      We have received your details and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-row">
                      <label htmlFor="contact-name" className="contact-label">
                        Your name <span className="contact-required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-row contact-form-row-split">
                      <div className="contact-form-row">
                        <label htmlFor="contact-email" className="contact-label">
                          Email <span className="contact-required">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="contact-input"
                        />
                      </div>
                      <div className="contact-form-row">
                        <label htmlFor="contact-phone" className="contact-label">
                          Phone <span className="contact-required">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="contact-input"
                        />
                      </div>
                    </div>
                    <div className="contact-form-row">
                      <label htmlFor="contact-service" className="contact-label">
                        Service of interest
                      </label>
                      <p className="contact-field-hint">Helps us respond faster</p>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="contact-input contact-select"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt || 'empty'} value={opt}>
                            {opt || '— Select service —'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="contact-form-row">
                      <label htmlFor="contact-company" className="contact-label">
                        Company name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-row">
                      <label htmlFor="contact-requirements" className="contact-label">
                        Requirements <span className="contact-required">*</span>
                      </label>
                      <textarea
                        id="contact-requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your requirements..."
                        className="contact-input contact-textarea"
                      />
                    </div>
                    {submitError && (
                      <p className="contact-form-error" role="alert">
                        {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary contact-submit"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending…' : 'Submit'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <p className="contact-privacy">
            We use your information only to provide tailored services and improve your
            experience. <Link to="/privacy" className="contact-privacy-link">Privacy Policy</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
