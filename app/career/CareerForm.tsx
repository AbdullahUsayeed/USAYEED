"use client";

import { useState } from "react";

// The application form is processed by a small API you host yourself.
// Point NEXT_PUBLIC_CAREER_API_URL at your server (see /server/career-api).
const API_BASE =
  process.env.NEXT_PUBLIC_CAREER_API_URL || "http://localhost:4000";
const ENDPOINT = `${API_BASE}/api/careers/apply`;

const ROLES = [
  "Embedded Engineer",
  "Mechanical Engineer (FreeCAD)",
  "General application",
];

const MAX_CV_BYTES = 5 * 1024 * 1024;

type Status = "idle" | "submitting" | "success" | "error";

export default function CareerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const role = String(data.get("role") || "").trim();
    const cv = data.get("cv");

    if (!name || !email || !role) {
      setStatus("error");
      setMessage("Please fill in your name, email, and the role you are applying for.");
      return;
    }

    if (cv instanceof File) {
      if (cv.size === 0) {
        setStatus("error");
        setMessage("Please attach your CV before submitting.");
        return;
      }
      if (cv.size > MAX_CV_BYTES) {
        setStatus("error");
        setMessage("Your CV must be 5 MB or smaller.");
        return;
      }
    } else {
      setStatus("error");
      setMessage("Please attach your CV before submitting.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(payload?.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setMessage(
        "Application received. If your profile matches, our team will reach out."
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again, or email info@usayeed.com."
      );
    }
  }

  return (
    <form className="career-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className="form-field">
          <span>Full name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>

        <label className="form-field">
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Applying for</span>
          <select name="role" defaultValue={ROLES[0]} required>
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span>
            Portfolio / LinkedIn <em>(optional)</em>
          </span>
          <input type="url" name="portfolio" placeholder="https://" />
        </label>
      </div>

      <label className="form-field">
        <span>
          Anything we should know? <em>(optional)</em>
        </span>
        <textarea name="message" rows={4} />
      </label>

      <label className="form-field form-file">
        <span>CV / resume (PDF, DOC, DOCX — max 5 MB)</span>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
        />
      </label>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="form-honeypot"
      />

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting…" : "Submit Application"}
        </button>
      </div>

      {message && (
        <p
          className={`form-status${status === "success" ? " is-success" : " is-error"}`}
          role="status"
        >
          {message}
        </p>
      )}

      <p className="form-note">
        Prefer email? Send your CV to{" "}
        <a href="mailto:info@usayeed.com?subject=Career%20Application">
          info@usayeed.com
        </a>
        .
      </p>
    </form>
  );
}
