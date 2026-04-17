// ─── SWAP THESE ───────────────────────────────────────────────────────────
// Drop your cinematic car still at /public/services-hero.jpg
const HERO_IMAGE = "/services-hero.jpg";

// Add paths to your best stills/frames — they live in /public/services/
const GALLERY_STILLS = [
  "/services/still-01.jpeg",
  "/services/still-02.jpeg",
  "/services/still-03.jpeg",
  "/services/still-04.jpeg",
  "/services/still-05.jpeg",
  "/services/still-06.jpeg",
];
// ──────────────────────────────────────────────────────────────────────────

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../components/FadeUp";
import { PageTransition } from "../components/PageTransition";
import { useContactForm } from "../hooks/useContactForm";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Types ────────────────────────────────────────────────────────────────

type FormState = { name: string; email: string; message: string };
type FocusedField = keyof FormState | null;

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <PageTransition>
      <main style={{ flex: 1 }}>
        <HeroSection />
        <ManifestoSection />
        <GallerySection />
        <ContactSection />
        <style>{`
          .services-gallery-track::-webkit-scrollbar { display: none; }
        `}</style>
      </main>
    </PageTransition>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "90svh",
        overflow: "hidden",
        marginTop: "-4rem", // bleed behind transparent navbar
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Gradient: dark at the very bottom for any caption, light elsewhere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.52) 100%)",
        }}
      />

      {/* Bottom-left caption — fades in on mount */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: EASE, delay: 0.55 }}
        style={{
          position: "absolute",
          bottom: "clamp(1.75rem, 3vw, 2.75rem)",
          left: "clamp(1.5rem, 5vw, 4rem)",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(238, 234, 192, 0.6)",
            marginBottom: "0.4rem",
          }}
        >
          automotive cinematography
        </p>
        <p
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(238, 234, 192, 0.85)",
            letterSpacing: "0.01em",
          }}
        >
          work worth making, slowly.
        </p>
      </motion.div>
    </section>
  );
}

// ─── Manifesto ────────────────────────────────────────────────────────────

function ManifestoSection() {
  return (
    <section
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding:
          "clamp(6rem, 11vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(6rem, 11vw, 10rem)",
      }}
    >
      <div className="services-manifesto-grid">
        {/* Left: label + thin vertical rule */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.25rem",
            paddingTop: "0.35rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#D94030",
            }}
          >
            the approach
          </span>
          <div
            style={{
              width: "1px",
              flex: 1,
              background:
                "linear-gradient(to bottom, rgba(26,26,24,0.2) 0%, rgba(26,26,24,0) 100%)",
              minHeight: "4rem",
            }}
          />
        </div>

        {/* Right: manifesto text */}
        <FadeUp delay={0.1}>
          <div>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontWeight: 400,
                fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
                lineHeight: 1.65,
                letterSpacing: "-0.01em",
                color: "#1A1A18",
                maxWidth: "54ch",
                marginBottom: "2rem",
              }}
            >
              I make films about cars the way a portrait photographer makes
              films about people — by spending time with them first,
              understanding their character, and then finding the light and the
              moment where all of that becomes visible.
            </p>

            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                lineHeight: 1.78,
                color: "#5C5C58",
                maxWidth: "54ch",
                marginBottom: "2rem",
              }}
            >
              Most of what I do happens before the camera comes out. The scout,
              the drive, the conversation with the owner. I want to know if the
              heater works and what the seats smell like and which corner they
              love the most. That research doesn't make it into the film
              directly — but it's the reason the film feels like it knows the
              car.
            </p>

            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                lineHeight: 1.78,
                color: "#5C5C58",
                maxWidth: "54ch",
              }}
            >
              I work on personal projects, commissions, and long-form
              documentary work. If there's a car you think deserves to be filmed
              properly, I want to hear about it.
            </p>

            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "1rem",
                color: "rgba(26,26,24,0.4)",
                marginTop: "2.5rem",
                letterSpacing: "0.01em",
              }}
            >
              — william
            </p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        .services-manifesto-grid {
          display: grid;
          grid-template-columns: clamp(5rem, 10vw, 9rem) 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }
        @media (max-width: 640px) {
          .services-manifesto-grid {
            grid-template-columns: 1fr;
          }
          .services-manifesto-grid > div:first-child {
            flex-direction: row !important;
            align-items: center;
          }
          .services-manifesto-grid > div:first-child > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────

function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.setPointerCapture(e.pointerId);
    trackRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = scrollLeft - (e.clientX - startX);
  };

  const onPointerUp = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section
      style={{
        borderTop: "1px solid rgba(26,26,24,0.12)",
        paddingTop: "clamp(4rem, 7vw, 6rem)",
        paddingBottom: "clamp(5rem, 9vw, 8rem)",
      }}
    >
      {/* Label row */}
      <FadeUp>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
            marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(26, 26, 24, 0.38)",
              flexShrink: 0,
            }}
          >
            selected frames
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(26, 26, 24, 0.12)",
            }}
          />
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
              color: "rgba(26,26,24,0.28)",
              flexShrink: 0,
            }}
          >
            drag to explore
          </span>
        </div>
      </FadeUp>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="services-gallery-track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          display: "flex",
          gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          scrollbarWidth: "none",
          paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
          paddingRight: "clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        {GALLERY_STILLS.map((src, i) => (
          <div
            key={src}
            style={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              height: "clamp(240px, 32vw, 480px)",
              // Alternate between landscape 3:2 and slightly taller 4:3 for rhythm
              aspectRatio: i % 3 === 1 ? "4 / 3" : "3 / 2",
              background: "#2E2E2B",
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt={`dodders — selected frame ${i + 1}`}
              loading="lazy"
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────

function ContactSection() {
  const { form, status, errorMessage, handleChange, handleSubmit } =
    useContactForm<FormState>({
      name: "",
      email: "",
      message: "",
    });
  const [focused, setFocused] = useState<FocusedField>(null);
  const submitted = status === "success";
  const submitting = status === "submitting";

  const inputBase: React.CSSProperties = {
    fontFamily: "'Source Serif 4', serif",
    fontWeight: 400,
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
    color: "#1A1A18",
    background: "transparent",
    border: "none",
    borderBottom: "1.5px solid rgba(26,26,24,0.2)",
    borderRadius: 0,
    outline: "none",
    width: "100%",
    padding: "0.75rem 0",
    display: "block",
    transition: "border-color 0.2s ease",
    WebkitAppearance: "none",
  };

  const labelBase: React.CSSProperties = {
    fontFamily: "'Instrument Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.625rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(26,26,24,0.42)",
    display: "block",
    marginBottom: "0.375rem",
    transition: "color 0.2s ease",
  };

  return (
    <section
      style={{
        borderTop: "1px solid rgba(26,26,24,0.12)",
        paddingTop: "clamp(5rem, 9vw, 8rem)",
        paddingBottom: "clamp(6rem, 11vw, 10rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <div className="services-contact-grid">
          {/* Left: heading + intro */}
          <FadeUp>
            <div>
              <p
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#D94030",
                  marginBottom: "1.5rem",
                }}
              >
                contact
              </p>

              <h2
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.05em",
                  textTransform: "lowercase",
                  color: "#1A1A18",
                  marginBottom: "clamp(1.75rem, 3vw, 2.5rem)",
                  maxWidth: "12ch",
                }}
              >
                let's make something
              </h2>

              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "#5C5C58",
                  maxWidth: "36ch",
                }}
              >
                Tell me about the car, the project, or just the idea. I'll get
                back to you within a day or two.
              </p>
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.15}>
            <div>
              {submitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2.75rem",
                    }}
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          ...labelBase,
                          color:
                            focused === "name"
                              ? "#1A1A18"
                              : "rgba(26,26,24,0.42)",
                        }}
                      >
                        your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder="first and last"
                        style={{
                          ...inputBase,
                          borderBottomColor:
                            focused === "name"
                              ? "#1A1A18"
                              : "rgba(26,26,24,0.2)",
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          ...labelBase,
                          color:
                            focused === "email"
                              ? "#1A1A18"
                              : "rgba(26,26,24,0.42)",
                        }}
                      >
                        email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="you@example.com"
                        style={{
                          ...inputBase,
                          borderBottomColor:
                            focused === "email"
                              ? "#1A1A18"
                              : "rgba(26,26,24,0.2)",
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          ...labelBase,
                          color:
                            focused === "message"
                              ? "#1A1A18"
                              : "rgba(26,26,24,0.42)",
                        }}
                      >
                        your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="The car, the project, the idea — whatever's on your mind."
                        style={{
                          ...inputBase,
                          resize: "none",
                          lineHeight: 1.65,
                          borderBottomColor:
                            focused === "message"
                              ? "#1A1A18"
                              : "rgba(26,26,24,0.2)",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <button
                        type="submit"
                        disabled={submitting}
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          letterSpacing: "-0.01em",
                          textTransform: "lowercase",
                          color: "#EEEAC0",
                          background: submitting ? "#5C5C58" : "#D94030",
                          border: "none",
                          borderRadius: "2px",
                          padding: "0.9375rem 2.25rem",
                          cursor: submitting ? "wait" : "pointer",
                          transition:
                            "background 0.2s ease, transform 0.15s ease",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          if (!submitting)
                            (
                              e.currentTarget as HTMLButtonElement
                            ).style.background = "#D94030";
                        }}
                        onMouseLeave={(e) => {
                          if (!submitting)
                            (
                              e.currentTarget as HTMLButtonElement
                            ).style.background = "#1A1A18";
                        }}
                      >
                        {submitting ? "sending…" : "get in touch"}
                      </button>
                      {errorMessage && (
                        <p
                          style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "0.9375rem",
                            color: "#D94030",
                            margin: 0,
                          }}
                        >
                          {errorMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        .services-contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(3rem, 8vw, 8rem);
          align-items: start;
        }
        @media (max-width: 768px) {
          .services-contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        /* Input placeholder colour */
        input::placeholder,
        textarea::placeholder {
          color: rgba(26, 26, 24, 0.28);
          font-style: italic;
        }
      `}</style>
    </section>
  );
}

function SuccessMessage() {
  return (
    <div
      style={{
        paddingTop: "1rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          width: "2rem",
          height: "2px",
          background: "#E8C840",
          marginBottom: "2rem",
        }}
      />
      <p
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          textTransform: "lowercase",
          color: "#1A1A18",
          marginBottom: "1.25rem",
        }}
      >
        message sent.
      </p>
      <p
        style={{
          fontFamily: "'Source Serif 4', serif",
          fontStyle: "italic",
          fontSize: "1.0625rem",
          lineHeight: 1.65,
          color: "#5C5C58",
          maxWidth: "38ch",
        }}
      >
        Thanks for reaching out. I'll read it properly and get back to you soon.
      </p>
    </div>
  );
}
