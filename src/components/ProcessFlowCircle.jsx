import { useState, useRef, useEffect } from 'react'
import './ProcessFlowCircle.css'

const RADIUS = 140
const SIZE = 400
const STEPS_COUNT = 9
const STEP_ANGLE = 360 / STEPS_COUNT
const RING_R = RADIUS * 0.95
const ARROW_STEP_DURATION = 2200

export default function ProcessFlowCircle({ steps = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [arrowIndex, setArrowIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-advance arrow one step at a time when visible
  useEffect(() => {
    if (!isVisible) return
    const id = setInterval(() => {
      setArrowIndex((prev) => (prev + 1) % STEPS_COUNT)
      setActiveIndex((prev) => (prev + 1) % STEPS_COUNT)
    }, ARROW_STEP_DURATION)
    return () => clearInterval(id)
  }, [isVisible])

  const handleStepClick = (i) => {
    setActiveIndex(i)
    setArrowIndex(i)
  }

  const scale = (RADIUS / (SIZE / 2)) * 100
  const arrowAngleDeg = -90 + arrowIndex * STEP_ANGLE
  const arrowRad = (arrowAngleDeg * Math.PI) / 180
  const arrowX = 50 + (scale / 100) * 50 * Math.cos(arrowRad)
  const arrowY = 50 + (scale / 100) * 50 * Math.sin(arrowRad)

  return (
    <div className="process-flow-wrap" ref={containerRef}>
      <div className="process-flow-inner">
        <svg
          className="process-flow-track"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden
        >
          <circle
            className="process-flow-track-circle"
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RING_R}
            fill="none"
            strokeWidth="2"
          />
        </svg>

        <div
          className="process-flow-arrow-wrap"
          style={{
            left: `${arrowX}%`,
            top: `${arrowY}%`,
            transform: `translate(-50%, -50%) rotate(${arrowAngleDeg + 180}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" className="process-flow-arrow-svg" aria-hidden>
            <polygon points="4,12 18,6 18,18" fill="currentColor" />
          </svg>
        </div>

        <div className="process-flow-circle">
          {steps.slice(0, STEPS_COUNT).map((label, i) => {
            const angleDeg = -90 + i * STEP_ANGLE
            const rad = (angleDeg * Math.PI) / 180
            const x = 50 + (scale / 100) * 50 * Math.cos(rad)
            const y = 50 + (scale / 100) * 50 * Math.sin(rad)
            const isActive = activeIndex === i
            const [title, desc] = label.includes(' – ')
              ? label.split(' – ')
              : [label, '']
            return (
              <button
                key={i}
                type="button"
                className={`process-flow-step ${isActive ? 'process-flow-step-active' : ''}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%)`,
                }}
                onClick={() => handleStepClick(i)}
                aria-pressed={isActive}
                aria-label={label}
              >
                <span className="process-flow-step-num">{i + 1}</span>
                <span className="process-flow-step-title">{title}</span>
                {desc && (
                  <span className="process-flow-step-desc">{desc}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
