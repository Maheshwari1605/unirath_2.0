import Footer from '../components/Footer'
import './PrivacyPage.css'

export default function PrivacyPage() {
  return (
    <>
      <section className="privacy-page">
        <div className="container privacy-page-inner">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-updated">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="privacy-content">
            <p className="privacy-intro">
              At Unirath Infotech Solutions, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your personal
              information when you use our website or services.
            </p>

            <section className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>
                We may collect information you provide directly (e.g. name, email, phone,
                company name, and message content when you fill our contact or inquiry
                forms). We may also collect usage data such as IP address, browser type,
                and pages visited to improve our website and services.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                We use your personal information to respond to your inquiries, provide
                customized services, send relevant updates, improve our website and
                offerings, and comply with legal obligations. We do not sell your
                personal information to third parties.
              </p>
            </section>

            <section className="privacy-section">
              <h2>3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal data against unauthorized access, alteration, disclosure,
                or destruction. Our processes align with industry standards and
                applicable regulations.
              </p>
            </section>

            <section className="privacy-section">
              <h2>4. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to improve user
                experience, analyze traffic, and personalize content. You can manage
                cookie preferences through your browser settings.
              </p>
            </section>

            <section className="privacy-section">
              <h2>5. Sharing of Information</h2>
              <p>
                We may share your information with trusted service providers who assist
                us in operating our business, subject to confidentiality obligations.
                We may also disclose information when required by law or to protect our
                rights and safety.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct,
                or delete your personal data, or to object to or restrict certain
                processing. To exercise these rights or ask questions about this policy,
                please contact us.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Contact Us</h2>
              <p>
                For any privacy-related questions or requests, please contact us at:
              </p>
              <p className="privacy-contact">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@unirathinfo.com">info@unirathinfo.com</a>
                <br />
                <strong>Support:</strong>{' '}
                <a href="mailto:support@unirathinfo.com">support@unirathinfo.com</a>
                <br />
                <strong>Address:</strong> B-524, The Landmark, Kudasan, Gandhinagar,
                Gujarat 382419
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
