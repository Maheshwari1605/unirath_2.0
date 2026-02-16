import { useState, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Revenue Cycle Management', to: '/services/revenue-cycle-management' },
      { label: 'Medical Record Retrieval', to: '/services/medical-record-retrieval' },
      { label: 'Customer Support Services', to: '/services/customer-support-services' },
      { label: 'Back-Office & Administrative Support', to: '/services/back-office-administrative-support' },
      { label: 'IT & Automation Services', to: '/services/it-automation-services' },
      { label: 'Accounting Services', to: '/services/accounting-services' },
    ],
  },
]

const SERVICES_INDEX = navItems.findIndex((item) => item.children)

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 })
  const triggerRef = useRef(null)

  const closeMenu = () => setMobileOpen(false)

  const isMobileNav = () => window.matchMedia('(max-width: 991px)').matches

  const handleDropdownToggle = (i) => {
    if (isMobileNav()) {
      setOpenDropdown((prev) => (prev === i ? null : i))
    }
  }

  // Position dropdown under the Services button on desktop (avoids backdrop-filter containing block)
  useLayoutEffect(() => {
    if (openDropdown !== SERVICES_INDEX || isMobileNav() || !triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setDropdownPosition({ left: rect.left, top: rect.bottom + 4 })
  }, [openDropdown])

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          <img
            src="/images/logo.png"
            alt=""
            className="logo-img"
          />
          <span className="logo-text-wrap">
            <span className="logo-name">UNIRATH INFOTECH</span>
            <span className="logo-tagline">ELEVATE. EXCEL. EMPOWER</span>
          </span>
        </Link>

        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`} aria-hidden={!mobileOpen}>
          {navItems.map((item, i) => (
            <div
              key={i}
              className={`nav-item-wrap${openDropdown === i && item.children ? ' nav-item-wrap-dropdown-open' : ''}`}
              onMouseEnter={() => item.children && !isMobileNav() && setOpenDropdown(i)}
              onMouseLeave={() => !isMobileNav() && setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button
                    ref={item.children ? triggerRef : null}
                    type="button"
                    className="nav-link nav-link-dropdown"
                    aria-expanded={openDropdown === i}
                    onClick={() => handleDropdownToggle(i)}
                  >
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden className={openDropdown === i ? 'nav-chevron-open' : ''}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {openDropdown === i && (
                    <div
                      className="dropdown dropdown-fixed"
                      style={
                        !isMobileNav()
                          ? {
                              position: 'fixed',
                              left: dropdownPosition.left,
                              top: dropdownPosition.top,
                            }
                          : undefined
                      }
                    >
                      {item.children.map((child, j) => (
                        <Link
                          key={j}
                          to={child.to}
                          className="dropdown-link"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.to} className="nav-link" onClick={closeMenu}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
