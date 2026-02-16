import './Hero.css'

const heroStats = [
  { value: '99%', label: 'Claim accuracy' },
  { value: '24/7', label: 'Support available' },
  { value: '50+', label: 'Happy clients' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden>
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">Powered from India</p>
          <h1 className="hero-title">Global Outsourcing Solutions</h1>
          <p className="hero-subtitle">
            Delivering Efficiency, Accuracy & Growth for US and International Businesses. We
            specialize in providing high-quality, cost-effective third-party business support
            services to clients across the United States, Canada, UK, and Europe.
          </p>
          <a href="/contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-visual-orb hero-visual-orb-1" aria-hidden />
            <div className="hero-visual-orb hero-visual-orb-2" aria-hidden />
            <div className="hero-visual-orb hero-visual-orb-3" aria-hidden />
            <div className="hero-stats">
              {heroStats.map((stat, i) => (
                <div key={i} className="hero-stat" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
