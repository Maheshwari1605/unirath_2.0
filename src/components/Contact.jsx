import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <h2 className="contact-title">Let's Talk</h2>
        <p className="contact-subtitle">
          Ready to transform your business? Get in touch and we'll help you scale with
          outsourcing and AI solutions.
        </p>
        <a href="/contact" className="btn btn-primary contact-cta">
          Contact Us
        </a>
      </div>
    </section>
  )
}
