import { FadeUp } from "../components/FadeUp";
import { PageTransition } from "../components/PageTransition";
import { Link } from "react-router-dom";

// ─── SWAP THESE ───────────────────────────────────────────────────────────
// Drop a portrait or BTS still at /public/about-portrait.jpg
const PORTRAIT_IMAGE = "/about-portrait.jpg";
// ──────────────────────────────────────────────────────────────────────────

const GEAR = [
  { label: "primary camera", value: "Canon C200" },
  {
    label: "lenses",
    value: "Sigma 18-35mm f/1.8, Helios 44-2, Canon 17-55 f/2.8",
  },
  { label: "stabilisation", value: "DJI RS 2" },
  { label: "aerial", value: "DJI Phantom 3 SE 4k" },
  { label: "audio", value: "Røde Wireless Go II, Røde NTG2" },
  { label: "colour", value: "DaVinci Resolve + custom LUTs" },
];

export default function About() {
  return (
    <PageTransition>
      <main style={{ flex: 1 }}>
        {/* ── OPENING STATEMENT ────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "clamp(5rem, 10vw, 9rem)",
            paddingBottom: "clamp(4rem, 8vw, 7rem)",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "0 clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            {/* Label */}
            <FadeUp>
              <span
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#D94030",
                  display: "block",
                  marginBottom: "2rem",
                }}
              >
                about
              </span>
            </FadeUp>

            {/* Big statement */}
            <FadeUp delay={0.08}>
              <h1
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.75rem, 6.5vw, 7rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                  textTransform: "lowercase",
                  color: "#1A1A18",
                  maxWidth: "18ch",
                  margin: "0 0 0",
                }}
              >
                i film cars the way they deserve to be filmed.
              </h1>
            </FadeUp>
          </div>
        </section>

        {/* ── PORTRAIT + STORY ─────────────────────────────────────────────── */}
        <section
          style={{
            paddingBottom: "clamp(6rem, 10vw, 10rem)",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "0 clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            <div className="dodders-about-grid">
              {/* Left — portrait */}
              <FadeUp>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    background: "#2E2E2B",
                  }}
                >
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="dodders — behind the lens"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      // hide broken img if placeholder not yet dropped
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </div>
              </FadeUp>

              {/* Right — text */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "clamp(0px, 2vw, 2rem)",
                }}
              >
                <FadeUp delay={0.12}>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                      lineHeight: 1.75,
                      color: "#2E2E2B",
                      marginBottom: "2rem",
                      maxWidth: "44ch",
                    }}
                  >
                    i'm will — a car enthusiast and filmmaker based in the UK. this is my creative outlet for making the kind of car films i want to watch: cinematic, characterful, and unpretentious. i'm not a car reviewer, or too much of a hoon (on most days). i just want to capture the essence of a car, and the feeling of being in it, as honestly as possible.
                  </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                      lineHeight: 1.75,
                      color: "#2E2E2B",
                      marginBottom: "2rem",
                      maxWidth: "44ch",
                    }}
                  >
                    Everything is shot on location, in natural light, without a
                    crew. Just the car wherever it belongs.
                  </p>
                </FadeUp>

                <FadeUp delay={0.28}>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                      lineHeight: 1.75,
                      color: "#5C5C58",
                      maxWidth: "44ch",
                      borderLeft: "2px solid #E8C840",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    Based in the south of england, but happy to travel for the right car and story.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ──────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          <div style={{ height: "1px", background: "rgba(26,26,24,0.12)" }} />
        </div>

        {/* ── GEAR ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "clamp(5rem, 8vw, 8rem)",
            paddingBottom: "clamp(5rem, 8vw, 8rem)",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "0 clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            <FadeUp>
              <h2
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.04em",
                  textTransform: "lowercase",
                  color: "#1A1A18",
                  marginBottom: "clamp(3rem, 5vw, 4.5rem)",
                }}
              >
                the kit
              </h2>
            </FadeUp>

            <div className="dodders-gear-grid">
              {GEAR.map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.07}>
                  <div
                    style={{
                      borderTop: "1px solid rgba(26,26,24,0.12)",
                      paddingTop: "1.5rem",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.6875rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#5C5C58",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4', serif",
                        fontWeight: 400,
                        fontSize: "1.0625rem",
                        color: "#1A1A18",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingBottom: "clamp(6rem, 10vw, 10rem)",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "0 clamp(1.5rem, 5vw, 4rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2rem",
            }}
          >
            <FadeUp>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.5,
                  color: "#2E2E2B",
                  maxWidth: "36ch",
                  margin: 0,
                }}
              >
                Have a car worth filming? I'd love to hear about it.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link
                to="/contact"
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  letterSpacing: "-0.01em",
                  textTransform: "lowercase",
                  textDecoration: "none",
                  color: "#EEEAC0",
                  background: "#1A1A18",
                  padding: "0.875rem 2rem",
                  borderRadius: "2px",
                  display: "inline-block",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#D94030";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#1A1A18";
                }}
              >
                get in touch
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <style>{`
        .dodders-about-grid {
          display: grid;
          grid-template-columns: 0.75fr 1fr;
          gap: clamp(3rem, 6vw, 7rem);
          align-items: start;
        }
        .dodders-gear-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 clamp(2rem, 4vw, 4rem);
        }
        @media (max-width: 900px) {
          .dodders-gear-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .dodders-about-grid { grid-template-columns: 1fr; }
          .dodders-gear-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageTransition>
  );
}
