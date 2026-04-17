import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLottie } from 'lottie-react'
import { FadeUp } from '../components/FadeUp'
import { PageTransition } from '../components/PageTransition'
import dodderAnimation from '../assets/dodders.json'
import heroVideo from '../assets/web-video.mp4'
import heroVideoPoster from '../assets/web-video.jpg'

const HERO_VIDEO        = heroVideo
const HERO_VIDEO_POSTER = heroVideoPoster

const FEATURED_VIDEO_ID = 'SO5C1fqIGI8'
const FILM = {
  title: 'this $2k wagon can beat a porsche, and fits a piano',
  number: 'no. 001',
  description:
    "what other car has 260 horsepower, room for 5 and all their stuff, but also feels special? this ain't no 330d. filmed in south wales",
  trackCredit: 'Music: Parcels - "Everyroad"',
}
// ──────────────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.46, 0.45, 0.94] as const

function LottieWordmark({ onComplete }: { onComplete: () => void }) {
  const { View } = useLottie(
    { animationData: dodderAnimation, loop: false, autoplay: true, onComplete },
    { width: '100%', display: 'block' },
  )
  return View
}

export default function Home() {
  // Wait for Lexend 500 before rendering the Lottie — the animation uses it
  const [fontLoaded, setFontLoaded] = useState(false)
  // Tagline reveals after the Lottie finishes (60 frames @ 60 fps = 1 second)
  const [lottieComplete, setLottieComplete] = useState(false)

  useEffect(() => {
    document.fonts
      .load("500 1em 'Lexend'")
      .then(() => setFontLoaded(true))
      .catch(() => setFontLoaded(true)) // show anyway if font fails to load
  }, [])

  return (
    <PageTransition>
      <main style={{ flex: 1 }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            height: '100svh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-4rem', // bleeds behind transparent fixed navbar
          }}
        >
          {/* ── Video background ─────────────────────────────────────────── */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_VIDEO_POSTER}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
            {/* Add a .webm source above the MP4 for better compression in
                browsers that support it — same path, different extension */}
          </video>

          {/* ── Warm charcoal overlay at 30% ─────────────────────────────── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(26, 24, 24, 0.30)',
              zIndex: 1,
            }}
          />

          {/* ── Lottie wordmark + tagline ─────────────────────────────────── */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              padding: '0 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none',
              userSelect: 'none',
              opacity: 0.7
            }}
          >
            {/*
             * Lottie container fades in as soon as Lexend is ready.
             * Width: 65 vw clamped between 280 px (mobile) and 900 px (wide).
             */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: fontLoaded ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ width: 'clamp(280px, 65vw, 900px)' }}
            >
              {fontLoaded && (
                <LottieWordmark onComplete={() => setLottieComplete(true)} />
              )}
            </motion.div>

            {/*
             * Tagline: hidden until the Lottie finishes, then 0.5s ease-in fade.
             * The `animate` key change re-triggers Framer Motion.
             */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: lottieComplete ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1rem, 2.2vw, 1.375rem)',
                letterSpacing: '0.005em',
                color: 'rgba(238, 234, 192, 0.78)',
                marginTop: '1.75rem',
              }}
            >
              cars but i try to make it cinematic
            </motion.p>
          </div>

          {/* ── Scroll indicator — appears after tagline settles ─────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 1.8 }}
            style={{
              position: 'absolute',
              bottom: '2.75rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.625rem',
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.625rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(238, 234, 192, 0.45)',
              }}
            >
              scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '3rem',
                background: 'rgba(238, 234, 192, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="dodders-scroll-drop" />
            </div>
          </motion.div>
        </section>

        {/* ── LATEST FILM ──────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: 'clamp(6rem, 10vw, 10rem)',
            paddingBottom: 'clamp(6rem, 10vw, 10rem)',
          }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 5vw, 4rem)',
            }}
          >
            {/* Section header */}
            <FadeUp>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: 'clamp(3.5rem, 6vw, 5rem)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#D94030',
                    flexShrink: 0,
                  }}
                >
                  latest film
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(26,26,24,0.15)' }} />
                <span
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,26,24,0.3)',
                    flexShrink: 0,
                  }}
                >
                  {FILM.number}
                </span>
              </div>
            </FadeUp>

            {/* Editorial grid */}
            <div className="dodders-film-grid" style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>

              {/* Left — title */}
              <FadeUp>
                <h2
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)',
                    lineHeight: 0.95,
                    letterSpacing: '-0.04em',
                    textTransform: 'lowercase',
                    color: '#1A1A18',
                    maxWidth: '14ch',
                    margin: 0,
                  }}
                >
                  {FILM.title}
                </h2>
              </FadeUp>

              {/* Right — description + credit */}
              <FadeUp delay={0.15}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontWeight: 400,
                      fontSize: '1.125rem',
                      lineHeight: 1.75,
                      color: '#2E2E2B',
                      maxWidth: '42ch',
                      marginBottom: '2.5rem',
                    }}
                  >
                    {FILM.description}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: '0.9375rem',
                      lineHeight: 1.5,
                      color: '#5C5C58',
                      borderLeft: '2px solid #E8C840',
                      paddingLeft: '1rem',
                      margin: 0,
                    }}
                  >
                    {FILM.trackCredit}
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Video embed */}
            <FadeUp duration={0.9}>
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  background: '#1A1A18',
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
                  title={`dodders — ${FILM.title}`}
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
            </FadeUp>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes dodders-scroll-drop {
          0%   { transform: translateY(-100%); opacity: 0; }
          25%  { opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
        .dodders-scroll-drop {
          position: absolute;
          inset: 0;
          background: rgba(238, 234, 192, 0.65);
          animation: dodders-scroll-drop 2.4s ease-in-out infinite;
        }
        .dodders-film-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: end;
        }
        @media (max-width: 768px) {
          .dodders-film-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </PageTransition>
  )
}
