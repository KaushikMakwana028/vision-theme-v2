"use client";

import { useState, useMemo } from "react";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  requireNda: true,
  honeypot: "",
};

/* ---------- small icon helper ---------- */
const Ico = ({ children, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [ticket, setTicket] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = useMemo(() => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!emailOk(form.email.trim()))
      e.email = "Please enter a valid work email.";
    if (form.message.trim().length < 15)
      e.message = "Tell us a bit more (at least 15 characters).";
    return e;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return; // spam trap
    if (Object.keys(errors).length) {
      setTouched({ name: true, email: true, message: true });
      const first = ["name", "email", "message"].find((k) => errors[k]);
      document.getElementById(`ct-${first}`)?.focus();
      return;
    }
    setSubmitting(true);
    // TODO: replace with a real API call (fetch("/api/contact", { method: "POST", body: ... }))
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setTicket(
        `VT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      );
      document
        .getElementById("brief")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1100);
  };

  const reset = () => {
    setDone(false);
    setForm(emptyForm);
    setTouched({});
  };

  const showErr = (k) => touched[k] && errors[k];

  return (
    <section
      id="brief"
      className="card form-card"
      aria-labelledby="brief-title"
    >
      {done ? (
        <div className="success" role="status">
          <div className="tick">
            <Ico strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </Ico>
          </div>
          <h2>Request received!</h2>
          <p className="lead">
            Thank you, <strong>{form.name}</strong>. A senior architect
            has been assigned to evaluate your requirements.
          </p>
          <div className="ticket">Tracking ID: {ticket}</div>
          <ol className="steps">
            <li>
              <b>1</b>
              <span>
                Architectural review of technical scope &amp; requirements.
              </span>
            </li>
            <li>
              <b>2</b>
              <span>
                {form.requireNda
                  ? "Mutual NDA generated and sent to your email."
                  : "NDA available on request."}
              </span>
            </li>
            <li>
              <b>3</b>
              <span>
                Invitation to a 30-minute discovery call with our tech
                lead.
              </span>
            </li>
            <li>
              <b>4</b>
              <span>
                Itemized estimate, sprint plan and delivery milestones.
              </span>
            </li>
          </ol>
          <button type="button" className="btn" onClick={reset}>
            Send another request →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-head">
            <h2 id="brief-title">Send Us a Message</h2>
            <p>
              Fill out the form below and our engineering leads will
              reply within 24 hours with a direct technical assessment.
            </p>
          </div>

          {/* honeypot */}
          <div
            style={{ position: "absolute", left: "-9999px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={set("honeypot")}
            />
          </div>

          <div className="fields" style={{ marginTop: "1.75rem" }}>
            <div className="field">
              <label htmlFor="ct-name">Full name *</label>
              <input
                id="ct-name"
                className={`input ${showErr("name") ? "bad" : ""}`}
                type="text"
                autoComplete="name"
                placeholder="Alex Morgan"
                value={form.name}
                onChange={set("name")}
                onBlur={blur("name")}
                aria-invalid={!!showErr("name")}
                aria-describedby={
                  showErr("name") ? "ct-name-e" : undefined
                }
              />
              {showErr("name") && (
                <span id="ct-name-e" className="err">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="field">
              <label htmlFor="ct-email">Work email *</label>
              <input
                id="ct-email"
                className={`input ${showErr("email") ? "bad" : ""}`}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="alex@organization.com"
                value={form.email}
                onChange={set("email")}
                onBlur={blur("email")}
                aria-invalid={!!showErr("email")}
                aria-describedby={
                  showErr("email") ? "ct-email-e" : undefined
                }
              />
              {showErr("email") && (
                <span id="ct-email-e" className="err">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="field">
              <label htmlFor="ct-phone">
                Phone / WhatsApp <small>(optional)</small>
              </label>
              <input
                id="ct-phone"
                className="input"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={set("phone")}
              />
            </div>
            <div className="field">
              <label htmlFor="ct-company">
                Company / Organization <small>(optional)</small>
              </label>
              <input
                id="ct-company"
                className="input"
                type="text"
                autoComplete="organization"
                placeholder="Acme Technologies"
                value={form.company}
                onChange={set("company")}
              />
            </div>
            <div className="field full">
              <label htmlFor="ct-message">
                Project details &amp; requirements *
              </label>
              <textarea
                id="ct-message"
                className={`input ${showErr("message") ? "bad" : ""}`}
                maxLength={2000}
                placeholder="Tell us about your project requirements, current tech stack (if any), scope and target outcomes..."
                value={form.message}
                onChange={set("message")}
                onBlur={blur("message")}
                aria-invalid={!!showErr("message")}
                aria-describedby={
                  showErr("message") ? "ct-message-e" : undefined
                }
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: ".5rem",
                }}
              >
                {showErr("message") ? (
                  <span id="ct-message-e" className="err">
                    {errors.message}
                  </span>
                ) : (
                  <span />
                )}
                <span className="counter">
                  {form.message.length}/2000
                </span>
              </div>
            </div>
          </div>

          <label className="nda" htmlFor="ct-nda">
            <input
              id="ct-nda"
              type="checkbox"
              checked={form.requireNda}
              onChange={(e) =>
                setForm({ ...form, requireNda: e.target.checked })
              }
            />
            <span>
              <strong>Request a mutual NDA.</strong> We&apos;ll send one
              before the technical discovery call.
            </span>
          </label>

          <button
            type="submit"
            className="btn submit"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="spinner" />
                <span>Sending your request…</span>
              </>
            ) : (
              <>
                <span>Send Request</span>
                <Ico width="18" height="18" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </Ico>
              </>
            )}
          </button>
          <p className="fine">
            🔒 Your details stay private and are never shared or used to
            train AI.
          </p>
        </form>
      )}
    </section>
  );
}
