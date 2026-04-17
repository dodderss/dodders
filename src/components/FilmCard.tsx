import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Film } from '../data/films'

interface FilmCardProps {
  film: Film
}

export default function FilmCard({ film }: FilmCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/films/${film.slug}`}
      style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article>

        {/* Thumbnail — 16:9 with warm hover overlay */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            overflow: 'hidden',
            background: '#2E2E2B',
            marginBottom: '1.375rem',
          }}
        >
          <img
            src={film.thumbnail}
            alt={film.title}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.035)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform',
            }}
          />

          {/* Warm cream-orange overlay on hover */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(232, 117, 48, 0.22)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }}
          />

          {/* Issue number — top left corner */}
          <span
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 600,
              fontSize: '0.625rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(238, 234, 192, 0.7)',
              zIndex: 1,
            }}
          >
            {film.number.padStart(3, '0')}
          </span>

          {/* Arrow indicator — bottom right on hover */}
          <span
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1.25rem',
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#EEEAC0',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              zIndex: 1,
            }}
          >
            watch →
          </span>
        </div>

        {/* Card text */}
        <div>
          {/* Year */}
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontSize: '0.6875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(26, 26, 24, 0.38)',
              marginBottom: '0.4rem',
            }}
          >
            {film.year}
          </p>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textTransform: 'lowercase',
              color: '#1A1A18',
              marginBottom: '0.625rem',
              transition: 'color 0.2s ease',
              ...(hovered ? { color: '#D94030' } : {}),
            }}
          >
            {film.title}
          </h3>

          {/* One-liner */}
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '0.9375rem',
              lineHeight: 1.55,
              color: '#5C5C58',
            }}
          >
            {film.shortDescription}
          </p>
        </div>

      </article>
    </Link>
  )
}
