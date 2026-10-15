"use client";

import { useState } from "react";

export default function HomeContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
    company: "", // honeypot
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Honeypot check
    if (formState.company) {
      setFormState({
        name: "",
        email: "",
        service: "Website Development",
        message: "",
        company: "",
      });
      return;
    }

    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      setFormState({
        name: "",
        email: "",
        service: "Website Development",
        message: "",
        company: "",
      });
    }, 850);
  };

  return (
    <form className="form" id="form" onSubmit={handleContactSubmit}>
      {/* Anti-spam honeypot */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="f-company">Company</label>
        <input
          id="f-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={formState.company}
          onChange={(e) =>
            setFormState({ ...formState, company: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="f-name">Full name</label>
        <input
          id="f-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          value={formState.name}
          onChange={(e) =>
            setFormState({ ...formState, name: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="f-mail">Work email</label>
        <input
          id="f-mail"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
      </div>

      <div className="full">
        <label htmlFor="f-svc">I&apos;m interested in</label>
        <select
          id="f-svc"
          name="service"
          value={formState.service}
          onChange={(e) =>
            setFormState({ ...formState, service: e.target.value })
          }
        >
          <option>Website Development</option>
          <option>Ecommerce Solutions</option>
          <option>Mobile App Development</option>
          <option>AI &amp; Automation</option>
          <option>Custom Software / CRM</option>
          <option>Meta &amp; Google Ads</option>
          <option>Hire Developers</option>
        </select>
      </div>

      <div className="full">
        <label htmlFor="f-msg">Project details</label>
        <textarea
          id="f-msg"
          name="message"
          placeholder="Tell us a little about your idea…"
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
        />
      </div>

      <button
        className={`btn btn-primary full ${
          formLoading ? "loading" : ""
        }`}
        type="submit"
        id="submitBtn"
        disabled={formLoading}
      >
        <span className="btn-label">Send Message</span>
        <svg className="i arrow-ic">
          <use href="#i-arrow" />
        </svg>
        <span className="spinner" aria-hidden="true" />
      </button>

      {formSuccess && (
        <p className="ok" id="ok" role="status" aria-live="polite">
          Thanks! We&apos;ll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}
