import './RetrievalProcessSteps.css'

const steps = [
  {
    title: 'Request submission',
    description:
      "Your request lands with us via written authorization from the patient or an authorized representative. We accept standard or provider-specific forms so nothing gets lost in translation.",
  },
  {
    title: 'Identity verification',
    description:
      "We verify who's asking for the records in a way that fits the channel—written, portal, or oral—so access stays secure and compliant from the first touch.",
  },
  {
    title: 'Record retrieval',
    description:
      "Our HIM and ROI specialists locate, pull, and prepare the exact records requested—no guesswork, no gaps.",
  },
  {
    title: 'Compliance documentation',
    description:
      "Every step is documented. Audit trails and proof of timely, good-faith response are built in, so you're always ready for a regulator or auditor.",
  },
  {
    title: 'Secure delivery',
    description:
      "Records go out in your requested format through secure, HIPAA-compliant channels. You get what you need, when you need it, without risk.",
  },
]

export default function RetrievalProcessSteps() {
  return (
    <div className="retrieval-process">
      <p className="retrieval-process-intro">
        We follow a compliant, auditable workflow so you get complete records on time.
      </p>
      <div className="retrieval-process-timeline">
        {steps.flatMap((step, i) => [
          <div
            key={`step-${i}`}
            className="retrieval-process-step-card"
            style={{ '--step-index': i }}
          >
            <span className="retrieval-process-step-num">{i + 1}</span>
            <div className="retrieval-process-step-content">
              <h3 className="retrieval-process-step-title">{step.title}</h3>
              <p className="retrieval-process-step-desc">{step.description}</p>
            </div>
          </div>,
          i < steps.length - 1 ? (
            <span
              key={`arrow-${i}`}
              className="retrieval-process-arrow-connector"
              style={{ '--arrow-order': i }}
              aria-hidden
            >
              <span className="retrieval-process-arrow-line" />
              <svg
                className="retrieval-process-arrow-head"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          ) : null,
        ].filter(Boolean))}
      </div>
    </div>
  )
}
