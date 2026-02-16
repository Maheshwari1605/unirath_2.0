import './ITAutomationDiagram.css'

const BENEFIT_CARDS = [
  { label: 'Increased Efficiency', icon: 'clock' },
  { label: 'Process Optimization', icon: 'magnify' },
  { label: 'Cost Savings', icon: 'cost' },
  { label: 'Enhanced Security', icon: 'shield' },
]

const CORE_ITEMS = [
  { label: 'APPLICATIONS', icon: 'app' },
  { label: 'SERVICES', icon: 'services' },
  { label: 'INFRASTRUCTURE', icon: 'server' },
  { label: 'SOLUTIONS', icon: 'solutions' },
  { label: 'AUTOMATION', icon: 'automation', highlight: true },
  { label: 'DATA', icon: 'data' },
  { label: 'CLOUD', icon: 'cloud' },
  { label: 'AI', icon: 'ai' },
  { label: 'CONFIGURING', icon: 'config' },
]

const cardIcons = {
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  magnify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  cost: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

const coreIcons = {
  app: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
      <line x1="10" y1="6" x2="10.01" y2="6" />
      <line x1="10" y1="18" x2="10.01" y2="18" />
    </svg>
  ),
  solutions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 8V4H8" />
      <rect x="2" y="12" width="20" height="8" rx="2" />
      <path d="M6 16v2M18 16v2M9 16h6" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5a3 3 0 1 0-5.998.125 4 4 0 0 0-2.86 8.872A5 5 0 1 0 12 20a5 5 0 0 0 8.858-6.003 4 4 0 0 0-2.86-8.872A3 3 0 1 0 12 5z" />
    </svg>
  ),
  config: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
}

function CardIcon({ name }) {
  return (
    <span className="automation-diagram-card-icon">
      {cardIcons[name] || null}
    </span>
  )
}

export default function ITAutomationDiagram() {
  return (
    <div className="automation-diagram">
      <div className="automation-diagram-scene">
        {/* Lines: from central cluster up to each of the 4 cards */}
        <svg className="automation-diagram-lines" viewBox="0 0 400 260" preserveAspectRatio="none">
          <defs>
            <linearGradient id="automationLineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.7)" />
            </linearGradient>
          </defs>
          <line x1="200" y1="200" x2="80" y2="95" className="automation-diagram-line" />
          <line x1="200" y1="200" x2="160" y2="95" className="automation-diagram-line" />
          <line x1="200" y1="200" x2="240" y2="95" className="automation-diagram-line" />
          <line x1="200" y1="200" x2="320" y2="95" className="automation-diagram-line" />
        </svg>

        {/* Top row: 4 benefit cards */}
        <div className="automation-diagram-cards">
          {BENEFIT_CARDS.map((card, i) => (
            <div
              key={i}
              className="automation-diagram-card"
              style={{ '--node-index': i }}
            >
              <CardIcon name={card.icon} />
              <span className="automation-diagram-card-label">{card.label}</span>
            </div>
          ))}
        </div>

        {/* Central cluster: icon + label chips (core process / services) */}
        <div className="automation-diagram-core">
          <div className="automation-diagram-core-inner">
            {CORE_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`automation-diagram-core-chip ${item.highlight ? 'automation-diagram-core-chip--highlight' : ''}`}
              >
                <span className="automation-diagram-core-chip-icon">
                  {coreIcons[item.icon] || null}
                </span>
                <span className="automation-diagram-core-chip-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
