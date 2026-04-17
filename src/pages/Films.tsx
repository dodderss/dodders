import { films } from '../data/films'
import FilmCard from '../components/FilmCard'
import { FadeUp } from '../components/FadeUp'
import { PageTransition } from '../components/PageTransition'

export default function Films() {
  return (
    <PageTransition>
      <main style={{ flex: 1 }}>

        {/* ── Page header ──────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem) 0',
          }}
        >
          <FadeUp>
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
              the archive
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              <h1
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.05em',
                  textTransform: 'lowercase',
                  color: '#1A1A18',
                  margin: 0,
                }}
              >
                films
              </h1>

              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: '#5C5C58',
                  paddingBottom: '0.5rem',
                }}
              >
                {films.length} films &amp; counting
              </p>
            </div>

            <div
              style={{
                height: '1px',
                background: 'rgba(26, 26, 24, 0.15)',
                marginTop: 'clamp(2rem, 4vw, 3rem)',
              }}
            />
          </FadeUp>
        </section>

        {/* ── Film grid ────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 9rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 3.5rem)',
          }}
          className="films-grid"
        >
          {films.map((film, i) => (
            <FadeUp key={film.slug} delay={i * 0.1}>
              <FilmCard film={film} />
            </FadeUp>
          ))}
        </section>

        <style>{`
          @media (max-width: 640px) {
            .films-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

      </main>
    </PageTransition>
  )
}
