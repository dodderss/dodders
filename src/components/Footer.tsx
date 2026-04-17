import logoSvg from '../assets/dodders-minilogo-transparent.svg'

const footerLinks = {
  work: [
    { label: 'films', href: '/films' },
    { label: 'services', href: '/services' },
  ],
  company: [
    { label: 'about', href: '/about' },
    { label: 'contact', href: '/contact' },
    { label: 'instagram', href: 'https://instagram.com/dodde.rs' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#1A1A18',
        color: '#EEEAC0',
        marginTop: 'auto',
      }}
    >
      {/* Top band with accent line */}
      <div
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, #D94030 0%, #E87530 50%, #E8C840 100%)',
        }}
      />

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '4rem 2rem 2.5rem',
        }}
      >
        {/* Main footer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 2' }}>
            <a
              href="/"
              aria-label="dodders home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                textDecoration: 'none',
                marginBottom: '1.25rem',
              }}
            >
              <img
                src={logoSvg}
                alt="dodders logo"
                style={{
                  height: '2.5rem',
                  width: '2.5rem',
                  display: 'block',
                  // filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                }}
              />
              <span
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.375rem',
                  letterSpacing: '-0.04em',
                  color: '#EEEAC0',
                  textTransform: 'lowercase',
                  lineHeight: 1,
                }}
              >
                dodders
              </span>
            </a>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: '0.9375rem',
                lineHeight: 1.65,
                color: 'rgba(238, 234, 192, 0.55)',
                maxWidth: '26ch',
              }}
            >
              Automotive cinematography & film production. basically i try to make cars cinematic
            </p>
          </div>

          {/* Work links */}
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(238, 234, 192, 0.4)',
                marginBottom: '1rem',
              }}
            >
              work
            </h3>
            <ul role="list" style={{ listStyle: 'none' }}>
              {footerLinks.work.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.625rem' }}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      letterSpacing: '-0.01em',
                      color: 'rgba(238, 234, 192, 0.75)',
                      textDecoration: 'none',
                      textTransform: 'lowercase',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = '#E8C840'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(238, 234, 192, 0.75)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(238, 234, 192, 0.4)',
                marginBottom: '1rem',
              }}
            >
              company
            </h3>
            <ul role="list" style={{ listStyle: 'none' }}>
              {footerLinks.company.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.625rem' }}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      letterSpacing: '-0.01em',
                      color: 'rgba(238, 234, 192, 0.75)',
                      textDecoration: 'none',
                      textTransform: 'lowercase',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = '#E8C840'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(238, 234, 192, 0.75)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(238, 234, 192, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontSize: '0.8125rem',
              letterSpacing: '-0.01em',
              color: 'rgba(238, 234, 192, 0.35)',
              textTransform: 'lowercase',
            }}
          >
            &copy; {year} dodders. all rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {/* {['privacy', 'terms'].map((label) => (
              <a
                key={label}
                href={`/${label}`}
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.8125rem',
                  letterSpacing: '-0.01em',
                  color: 'rgba(238, 234, 192, 0.35)',
                  textDecoration: 'none',
                  textTransform: 'lowercase',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(238, 234, 192, 0.7)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(238, 234, 192, 0.35)'
                }}
              >
                {label}
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </footer>
  )
}
