import './Stats.css'

const stats = [
  { value: '9,500+', label: 'Team Members' },
  { value: '15', label: 'Locations Globally' },
  { value: '37%', label: 'NYSE-listed Clients' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-inner">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
