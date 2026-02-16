import './Services.css'

const services = [
  {
    title: 'Remote Teams',
    description: 'Scale with dedicated remote teams that integrate seamlessly with your operations.',
  },
  {
    title: 'Co-source',
    description: 'Blend your in-house team with our experts for flexible capacity and expertise.',
  },
  {
    title: 'AI Solutions',
    description: 'AI strategy, implementation, and automation to drive efficiency and outcomes.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-title">How We Deliver</h2>
        <p className="services-subtitle">
          High-performance outsourcing and AI solutions tailored to your business.
        </p>
        <div className="services-grid">
          {services.map((service, i) => (
            <article key={i} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
