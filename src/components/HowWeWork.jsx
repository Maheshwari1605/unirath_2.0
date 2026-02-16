import './HowWeWork.css'

const STEP_ICONS = {
  connect: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 28h-4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h4" />
      <path d="M28 20h4a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-4" />
      <path d="M28 16V8a4 4 0 0 0-8 0v8h8zM20 32v8a4 4 0 0 0 8 0v-8h-8z" />
    </svg>
  ),
  discover: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="10" />
      <path d="m30 30 8 8" />
      <path d="M22 16v12M16 22h12" />
    </svg>
  ),
  align: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8h24a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" />
      <path d="M16 18h16M16 26h12M16 34h8" />
      <path d="m20 14 2 2 4-4" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8v32M24 8l-8 12h16l-8-12z" />
      <path d="M24 40 14 28h20L24 40z" />
      <path d="M12 20 8 24l4 4M36 20l4 4-4 4" />
    </svg>
  ),
  deliver: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 32h6l4-16 6 20 4-12 6 8" />
      <path d="M8 32H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2" />
      <path d="M42 32h-2a2 2 0 0 0-2 2v-4a2 2 0 0 0 2 2h2" />
      <circle cx="14" cy="36" r="2" />
      <circle cx="34" cy="36" r="2" />
    </svg>
  ),
}

const steps = [
  {
    number: '01',
    icon: 'connect',
    title: 'Connect',
    tagline: 'You reach out. We respond.',
    description:
      'Share your goals via our form or a quick call. Our team gets back within 24 hours—no runaround, no gatekeeping. We listen first, then we align.',
  },
  {
    number: '02',
    icon: 'discover',
    title: 'Discover',
    tagline: 'We map your world.',
    description:
      'We dive into your requirements, scope a pilot or proof-of-concept, and give you a clear ballpark. You see the path and the price before you commit.',
  },
  {
    number: '03',
    icon: 'align',
    title: 'Align',
    tagline: 'Pricing, contract, SLAs—crystal clear.',
    description:
      'Final numbers, proposal (if needed), and a clean contract with SLAs. Everyone signs with full clarity so we start on the same page.',
  },
  {
    number: '04',
    icon: 'launch',
    title: 'Launch',
    tagline: 'Right people. Right setup. Go.',
    description:
      'We assign your dedicated team, run training and knowledge transfer, and hold a formal kick-off. From day one you know who does what and how to reach them.',
  },
  {
    number: '05',
    icon: 'deliver',
    title: 'Deliver & grow',
    tagline: 'Steady execution. Continuous improvement.',
    description:
      "Ongoing delivery with regular reporting and feedback loops. We don't just run the process—we refine it so quality and efficiency keep improving.",
  },
]

export default function HowWeWork() {
  return (
    <section className="how-we-work" id="how-we-work">
      <div className="how-we-work-bg">
        <span className="how-we-work-bg-orb how-we-work-bg-orb--1" aria-hidden />
        <span className="how-we-work-bg-orb how-we-work-bg-orb--2" aria-hidden />
        <span className="how-we-work-bg-orb how-we-work-bg-orb--3" aria-hidden />
        <div className="how-we-work-bg-grid" aria-hidden />
      </div>
      <div className="container how-we-work-container">
        <header className="how-we-work-header">
          <p className="how-we-work-eyebrow">The Unirath way</p>
          <h2 className="how-we-work-title">
            <span className="how-we-work-title-line">From first handshake</span>
            <span className="how-we-work-title-line how-we-work-title-line--accent">to steady state</span>
          </h2>
          <div className="how-we-work-title-underline" />
          <p className="how-we-work-subtitle">
            No black boxes. Five clear steps—connect, discover, align, launch, and deliver—so you always know where you stand.
          </p>
        </header>
        <div className="how-we-work-journey">
          <div className="how-we-work-timeline-line" aria-hidden />
          {steps.map((step, i) => (
            <article
              key={i}
              className={`how-we-work-step how-we-work-step--${i % 2 === 0 ? 'left' : 'right'}`}
              style={{ '--step-index': i }}
            >
              <div className="how-we-work-step-inner">
                <div className="how-we-work-step-visual">
                  <div className="how-we-work-step-icon-wrap">
                    <span className="how-we-work-step-icon" aria-hidden>
                      {STEP_ICONS[step.icon]}
                    </span>
                    <span className="how-we-work-step-icon-glow" aria-hidden />
                  </div>
                </div>
                <div className="how-we-work-step-content">
                  <div className="how-we-work-card">
                    <span className="how-we-work-card-accent" />
                    <div className="how-we-work-card-inner">
                      <span className="how-we-work-number">{step.number}</span>
                      <h3 className="how-we-work-step-title">{step.title}</h3>
                      <p className="how-we-work-step-tagline">{step.tagline}</p>
                      <p className="how-we-work-step-desc">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
