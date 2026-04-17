import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { getFilmBySlug } from '../data/films'
import { FadeUp } from '../components/FadeUp'
import { PageTransition } from '../components/PageTransition'

export default function FilmDetail() {
  const { slug } = useParams<{ slug: string }>()
  const film = getFilmBySlug(slug ?? '')

  if (!film) return <Navigate to="/films" replace />

  // Split story into paragraphs on double-newline
  const storyParagraphs = film.story.split('\n\n').filter(Boolean)

  return (
    <PageTransition>
    <main style={{ flex: 1 }}>

      {/* ── Full-bleed video embed ────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          background: '#1A1A18',
          // Bleed behind navbar spacer
          marginTop: '-4rem',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${film.youtubeId}?rel=0&modestbranding=1&color=white`}
          title={film.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
        />
      </div>

      {/* ── Film metadata + story ─────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: 'clamp(4rem, 7vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        }}
      >

        {/* Back link */}
        <FadeUp>
        <Link
          to="/films"
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(26, 26, 24, 0.45)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: 'clamp(3rem, 5vw, 4.5rem)',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.color = '#D94030'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(26, 26, 24, 0.45)'
          }}
        >
          ← all films
        </Link>
        </FadeUp>

        {/* Two-column layout: meta left, story right */}
        <div className="film-detail-grid">

          {/* ── Left column: title + metadata ── */}
          <FadeUp delay={0.05}><div>
            {/* Issue number */}
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#D94030',
                marginBottom: '1.25rem',
              }}
            >
              no. {film.number}
            </p>

            {/* Film title */}
            <h1
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                textTransform: 'lowercase',
                color: '#1A1A18',
                margin: 0,
                marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
                maxWidth: '16ch',
              }}
            >
              {film.title}
            </h1>

            {/* Metadata list */}
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <MetaItem
                label="featuring"
                value={film.car}
              />

              <MetaItem
                label="year"
                value={String(film.year)}
              />

              <MetaItem
                label="soundtrack"
                value={film.soundtrack}
                italic
              />

            </dl>
          </div></FadeUp>

          {/* ── Right column: story prose ── */}
          <FadeUp delay={0.18}><div>
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(26, 26, 24, 0.35)',
                marginBottom: '1.75rem',
              }}
            >
              the story
            </p>

            <div
              style={{
                borderTop: '1px solid rgba(26, 26, 24, 0.15)',
                paddingTop: '2rem',
              }}
            >
              {storyParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
                    lineHeight: 1.78,
                    color: '#2E2E2B',
                    maxWidth: '58ch',
                    marginBottom: i < storyParagraphs.length - 1 ? '1.5em' : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div></FadeUp>

        </div>
      </section>

      {/* ── Behind the scenes ─────────────────────────────────────────────── */}
      {film.btsStills.length > 0 && (
        <section
          style={{
            borderTop: '1px solid rgba(26, 26, 24, 0.12)',
            paddingTop: 'clamp(4rem, 7vw, 6rem)',
            paddingBottom: 'clamp(5rem, 9vw, 8rem)',
          }}
        >
          {/* Section header */}
          <FadeUp>
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 5vw, 4rem)',
              marginBottom: 'clamp(2rem, 3.5vw, 3rem)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(26, 26, 24, 0.38)',
                flexShrink: 0,
              }}
            >
              behind the scenes
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'rgba(26, 26, 24, 0.12)',
              }}
            />
          </div>
          </FadeUp>

          {/* Horizontal scroll gallery */}
          <FadeUp delay={0.1}>
            <BtsGallery stills={film.btsStills} title={film.title} />
          </FadeUp>
        </section>
      )}

      {/* Layout helpers */}
      <style>{`
        .film-detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(3rem, 7vw, 7rem);
          align-items: start;
        }
        @media (max-width: 768px) {
          .film-detail-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>

    </main>
    </PageTransition>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────

function MetaItem({
  label,
  value,
  italic = false,
}: {
  label: string
  value: string
  italic?: boolean
}) {
  return (
    <div>
      <dt
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 600,
          fontSize: '0.625rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(26, 26, 24, 0.38)',
          marginBottom: '0.3rem',
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontFamily: italic ? "'Source Serif 4', serif" : "'Instrument Sans', sans-serif",
          fontStyle: italic ? 'italic' : 'normal',
          fontWeight: italic ? 400 : 600,
          fontSize: italic ? '1rem' : '0.9375rem',
          letterSpacing: italic ? '0' : '-0.01em',
          color: '#1A1A18',
          margin: 0,
        }}
      >
        {value}
      </dd>
    </div>
  )
}

function BtsGallery({ stills, title }: { stills: string[]; title: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onPointerDown = (e: React.PointerEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.clientX)
    setScrollLeft(trackRef.current.scrollLeft)
    trackRef.current.setPointerCapture(e.pointerId)
    trackRef.current.style.cursor = 'grabbing'
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return
    const delta = e.clientX - startX
    trackRef.current.scrollLeft = scrollLeft - delta
  }

  const onPointerUp = () => {
    setIsDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        display: 'flex',
        gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        cursor: 'grab',
        scrollbarWidth: 'none',
        // First image flush with the page's content margin
        paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      {stills.map((src, i) => (
        <div
          key={src}
          style={{
            flexShrink: 0,
            scrollSnapAlign: 'start',
            // Fixed height, width derived from 3:2 ratio
            height: 'clamp(220px, 30vw, 400px)',
            aspectRatio: '3 / 2',
            background: '#2E2E2B',
            overflow: 'hidden',
          }}
        >
          <img
            src={src}
            alt={`${title} — behind the scenes ${i + 1}`}
            loading="lazy"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              pointerEvents: 'none',
            }}
          />
        </div>
      ))}

      {/* Hide scrollbar in WebKit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}
