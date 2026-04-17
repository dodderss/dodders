import { useState, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "../components/FadeUp";
import { PageTransition } from "../components/PageTransition";
import { useContactForm } from "../hooks/useContactForm";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

type FormState = { name: string; email: string; car: string; message: string };
type FocusedField = keyof FormState | null;

const EMPTY: FormState = { name: "", email: "", car: "", message: "" };

export default function Contact() {
  const { form, status, errorMessage, handleChange, handleSubmit } =
    useContactForm(EMPTY);
  const [focused, setFocused] = useState<FocusedField>(null);
  const submitted = status === "success";
  const submitting = status === "submitting";

  return (
    <PageTransition>
      <main style={{ flex: 1 }}>
        <section
          style={{
            paddingTop: "clamp(5rem, 10vw, 9rem)",
            paddingBottom: "clamp(6rem, 12vw, 12rem)",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "0 clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            <div className="dodders-contact-grid">
              {/* ── Left — heading block ──────────────────────────────────── */}
              <div>
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
                    get in touch
                  </span>
                </FadeUp>

                <FadeUp delay={0.08}>
                  <h1
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
                      lineHeight: 0.92,
                      letterSpacing: "-0.04em",
                      textTransform: "lowercase",
                      color: "#1A1A18",
                      margin: "0 0 clamp(2rem, 4vw, 3.5rem)",
                      maxWidth: "14ch",
                    }}
                  >
                    let's make something worth watching.
                  </h1>
                </FadeUp>

                <FadeUp delay={0.16}>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontWeight: 400,
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      color: "#5C5C58",
                      maxWidth: "38ch",
                    }}
                  >
                    Tell me about the car. Where you are, what you're after,
                    whether there's a specific road or location in mind. No
                    brief is too loose — we'll figure it out.
                  </p>
                </FadeUp>
              </div>

              {/* ── Right — form ─────────────────────────────────────────── */}
              <div style={{ paddingTop: "clamp(0px, 2vw, 1rem)" }}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <SuccessMessage key="success" />
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      onSubmit={handleSubmit}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0",
                      }}
                    >
                      <Field
                        label="name"
                        name="name"
                        type="text"
                        value={form.name}
                        focused={focused === "name"}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <Field
                        label="email"
                        name="email"
                        type="email"
                        value={form.email}
                        focused={focused === "email"}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <Field
                        label="the car"
                        name="car"
                        type="text"
                        value={form.car}
                        focused={focused === "car"}
                        onChange={handleChange}
                        onFocus={() => setFocused("car")}
                        onBlur={() => setFocused(null)}
                        placeholder="year, make, model"
                      />
                      <TextareaField
                        label="message"
                        name="message"
                        value={form.message}
                        focused={focused === "message"}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                      />

                      <div
                        style={{
                          marginTop: "3rem",
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
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                            letterSpacing: "-0.01em",
                            textTransform: "lowercase",
                            color: "#EEEAC0",
                            background: submitting ? "#5C5C58" : "#1A1A18",
                            border: "none",
                            padding: "0.875rem 2.5rem",
                            borderRadius: "2px",
                            cursor: submitting ? "default" : "pointer",
                            transition: "background 0.2s ease",
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
                          {submitting ? "sending…" : "send it"}
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
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .dodders-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(4rem, 8vw, 10rem);
          align-items: start;
        }
        @media (max-width: 900px) {
          .dodders-contact-grid { grid-template-columns: 1fr; gap: 3.5rem; }
        }
      `}</style>
    </PageTransition>
  );
}

// ── Field components ──────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  focused: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
  placeholder?: string;
}

function Field({
  label,
  name,
  type,
  value,
  focused,
  onChange,
  onFocus,
  onBlur,
  required,
  placeholder,
}: FieldProps) {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "1.75rem",
        marginBottom: "0.25rem",
        borderBottom: `1px solid ${focused ? "#1A1A18" : "rgba(26,26,24,0.2)"}`,
        transition: "border-color 0.2s ease",
      }}
    >
      <label
        style={{
          position: "absolute",
          top: focused || value ? "0.25rem" : "1.85rem",
          left: 0,
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: focused || value ? 600 : 400,
          fontSize: focused || value ? "0.6875rem" : "1rem",
          letterSpacing: focused || value ? "0.08em" : "0",
          textTransform: focused || value ? "uppercase" : "none",
          color: focused ? "#D94030" : "rgba(26,26,24,0.4)",
          transition: "all 0.2s ease",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        placeholder={focused ? (placeholder ?? "") : ""}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "'Source Serif 4', serif",
          fontWeight: 400,
          fontSize: "1.0625rem",
          color: "#1A1A18",
          padding: "0.5rem 0 0.75rem",
          caretColor: "#D94030",
        }}
      />
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  focused: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
}

function TextareaField({
  label,
  name,
  value,
  focused,
  onChange,
  onFocus,
  onBlur,
  required,
}: TextareaFieldProps) {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "1.75rem",
        marginTop: "0.25rem",
        borderBottom: `1px solid ${focused ? "#1A1A18" : "rgba(26,26,24,0.2)"}`,
        transition: "border-color 0.2s ease",
      }}
    >
      <label
        style={{
          position: "absolute",
          top: focused || value ? "0.25rem" : "1.85rem",
          left: 0,
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: focused || value ? 600 : 400,
          fontSize: focused || value ? "0.6875rem" : "1rem",
          letterSpacing: focused || value ? "0.08em" : "0",
          textTransform: focused || value ? "uppercase" : "none",
          color: focused ? "#D94030" : "rgba(26,26,24,0.4)",
          transition: "all 0.2s ease",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        rows={5}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          resize: "none",
          fontFamily: "'Source Serif 4', serif",
          fontWeight: 400,
          fontSize: "1.0625rem",
          lineHeight: 1.7,
          color: "#1A1A18",
          padding: "0.5rem 0 0.75rem",
          caretColor: "#D94030",
        }}
      />
    </div>
  );
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{
        paddingTop: "2rem",
      }}
    >
      <div
        style={{
          width: "2.5rem",
          height: "2px",
          background: "#E8C840",
          marginBottom: "2.5rem",
        }}
      />
      <p
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          letterSpacing: "-0.04em",
          textTransform: "lowercase",
          color: "#1A1A18",
          marginBottom: "1.25rem",
          lineHeight: 1.05,
        }}
      >
        message received.
      </p>
      <p
        style={{
          fontFamily: "'Source Serif 4', serif",
          fontWeight: 400,
          fontSize: "1.0625rem",
          lineHeight: 1.75,
          color: "#5C5C58",
          maxWidth: "38ch",
        }}
      >
        I'll get back to you within a couple of days. In the meantime, have a
        look at the films.
      </p>
    </motion.div>
  );
}
