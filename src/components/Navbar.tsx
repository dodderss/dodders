import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoSvg from '../assets/dodders-minilogo-transparent.svg'

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'films', href: '/films' },
  { label: 'services', href: '/services' },
  { label: 'about', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(238, 234, 192, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,26,24,0.1)' : '1px solid transparent',
        }}
      >
        <nav
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="dodders home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src={logoSvg}
              alt="dodders logo"
              style={{ height: '2rem', width: '2rem', display: 'block' }}
            />
            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: '1.125rem',
                letterSpacing: '-0.04em',
                color: '#1A1A18',
                textTransform: 'lowercase',
                lineHeight: 1,
              }}
            >
              dodders
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul
            role="list"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              listStyle: 'none',
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavDesktopLink to={link.href}>{link.label}</NavDesktopLink>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <Link
            to="/contact"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 600,
              fontSize: '0.8125rem',
              letterSpacing: '-0.01em',
              textTransform: 'lowercase',
              textDecoration: 'none',
              color: '#EEEAC0',
              background: '#1A1A18',
              padding: '0.5rem 1.25rem',
              borderRadius: '2px',
              transition: 'background 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = '#D94030'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = '#1A1A18'
            }}
            className="hidden-mobile"
          >
            get in touch
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? 'close menu' : 'open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
            }}
            className="show-mobile"
          >
            <span
              style={{
                display: 'block',
                height: '2px',
                background: '#1A1A18',
                borderRadius: '1px',
                transition: 'all 0.25s ease',
                width: menuOpen ? '22px' : '22px',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '2px',
                background: '#1A1A18',
                borderRadius: '1px',
                transition: 'all 0.25s ease',
                width: '16px',
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '2px',
                background: '#1A1A18',
                borderRadius: '1px',
                transition: 'all 0.25s ease',
                width: '22px',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: '#EEEAC0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.65, 0, 0.35, 1)',
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <ul role="list" style={{ listStyle: 'none', marginBottom: '3rem' }}>
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              style={{
                borderBottom: '1px solid rgba(26,26,24,0.12)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.4s ease ${i * 60 + 100}ms, transform 0.4s ease ${i * 60 + 100}ms`,
              }}
            >
              <Link
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 10vw, 4rem)',
                  letterSpacing: '-0.04em',
                  color: '#1A1A18',
                  textDecoration: 'none',
                  textTransform: 'lowercase',
                  display: 'block',
                  padding: '0.75rem 0',
                  lineHeight: 1.05,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#D94030'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#1A1A18'
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '-0.02em',
            textTransform: 'lowercase',
            textDecoration: 'none',
            color: '#EEEAC0',
            background: '#1A1A18',
            padding: '1rem 2rem',
            borderRadius: '2px',
            display: 'inline-block',
            alignSelf: 'flex-start',
          }}
        >
          get in touch
        </Link>
      </div>

      {/* Spacer so content starts below fixed navbar */}
      <div style={{ height: '4rem' }} />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}

// ── Desktop nav link with sliding underline ────────────────────────────────

function NavDesktopLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <Link
        to={to}
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 600,
          fontSize: '0.875rem',
          letterSpacing: '-0.01em',
          textDecoration: 'none',
          textTransform: 'lowercase',
          paddingBottom: '4px',
          display: 'block',
        }}
      >
        <motion.span
          variants={{
            rest: { color: '#1A1A18' },
            hover: { color: '#D94030' },
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ display: 'block' }}
        >
          {children}
        </motion.span>
      </Link>

      {/* Underline slides in from the left */}
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: '#D94030',
          transformOrigin: 'left center',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
