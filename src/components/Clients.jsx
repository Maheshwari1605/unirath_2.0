import './Clients.css'

const clients = [
  'SYNBIZ GLOBUS',
  'SMART AND SECURE CONSULTANCY',
  'LAWOCACY LEGAL SERVICES',
  'LOADRIVE',
  'BROOM BUDDIES',
  'MAHI CONSULTANCY',
  'CHELSIA CONSTRUCTION',
  'PATEL TRADING COMPANY',
]

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="container">
        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-subtitle">
          Trusted by businesses across industries
        </p>
        <div className="clients-grid">
          {clients.map((name, i) => (
            <div key={i} className="clients-card">
              <span className="clients-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
