import Footer from '../components/Footer'
import './TermsPage.css'

export default function TermsPage() {
  return (
    <>
      <section className="terms-page">
        <div className="container terms-page-inner">
          <h1 className="terms-title">Terms of Use</h1>
          <p className="terms-updated">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="terms-content">
            <p className="terms-intro">
              Welcome to Unirath Infotech Solutions. By accessing or using our website
              and services, you agree to be bound by these Terms of Use. Please read them
              carefully.
            </p>

            <section className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing this website or using our services, you accept and agree to
                comply with these Terms of Use and our Privacy Policy. If you do not
                agree, please do not use our website or services.
              </p>
            </section>

            <section className="terms-section">
              <h2>2. Use of Website and Services</h2>
              <p>
                You may use our website and services only for lawful purposes and in
                accordance with these terms. You agree not to use the website in any way
                that could harm, disable, or impair the site or interfere with any other
                party’s use of it. You must not attempt to gain unauthorized access to
                any systems or data.
              </p>
            </section>

            <section className="terms-section">
              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and
                images, is the property of Unirath Infotech Solutions or its licensors
                and is protected by applicable intellectual property laws. You may not
                copy, modify, distribute, or use any content without our prior written
                consent.
              </p>
            </section>

            <section className="terms-section">
              <h2>4. Services and Engagement</h2>
              <p>
                Specific outsourcing, BPO, or consulting services are subject to
                separate agreements, statements of work, or contracts. These Terms of
                Use govern your use of the website; the terms of any service engagement
                will be set out in the relevant agreement.
              </p>
            </section>

            <section className="terms-section">
              <h2>5. Disclaimer</h2>
              <p>
                Our website and content are provided “as is” without warranties of any
                kind. We do not guarantee that the website will be error-free or
                uninterrupted. We are not liable for any reliance you place on
                information available on the website.
              </p>
            </section>

            <section className="terms-section">
              <h2>6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Unirath Infotech Solutions shall
                not be liable for any indirect, incidental, special, or consequential
                damages arising from your use of the website or services. Our total
                liability shall not exceed the amount you have paid to us, if any, in the
                twelve months preceding the claim.
              </p>
            </section>

            <section className="terms-section">
              <h2>7. Changes to Terms</h2>
              <p>
                We may update these Terms of Use from time to time. The “Last updated”
                date at the top will reflect the latest version. Continued use of the
                website after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="terms-section">
              <h2>8. Governing Law</h2>
              <p>
                These Terms of Use are governed by the laws of India. Any disputes
                arising in connection with these terms or the website shall be subject
                to the exclusive jurisdiction of the courts of Gandhinagar, Gujarat.
              </p>
            </section>

            <section className="terms-section">
              <h2>9. Contact</h2>
              <p>
                For questions about these Terms of Use, please contact us at:
              </p>
              <p className="terms-contact">
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
