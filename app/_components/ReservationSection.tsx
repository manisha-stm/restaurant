"use client";

import { useState } from "react";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
];

export default function ReservationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (name: string) => ({
    width: "100%",
    padding: "14px 18px",
    borderRadius: "14px",
    border: `2px solid ${focused === name ? "#f472b6" : "rgba(244,114,182,0.25)"}`,
    background: focused === name ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.93rem",
    color: "var(--text-dark)",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === name ? "0 0 0 4px rgba(244,114,182,0.12)" : "none",
    boxSizing: "border-box" as const,
  });

  const labelStyle = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "var(--text-mid)",
    marginBottom: "8px",
    letterSpacing: "0.04em",
  };

  return (
    <section
      id="reserve"
      style={{
        background: "linear-gradient(135deg, var(--cream) 0%, var(--peach-light) 50%, var(--lavender-light) 100%)",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">Book a Table</span>
          <h2 className="section-title">
            Reserve Your{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Moment
            </span>
          </h2>
          <p className="section-subtitle">
            Secure your table for a dining experience you'll want to relive again and again.
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(244,114,182,0.25)",
            borderRadius: "32px",
            padding: "48px",
            boxShadow: "0 16px 48px rgba(244,114,182,0.12)",
          }}
        >
          {submitted ? (
            /* Success state */
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🌸</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  color: "var(--text-dark)",
                  margin: "0 0 16px",
                }}
              >
                You&apos;re confirmed!
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.65,
                }}
              >
                Thank you, <strong>{form.name}</strong>! We&apos;ve sent a confirmation to{" "}
                <strong style={{ color: "#f472b6" }}>{form.email}</strong>.<br />
                We can&apos;t wait to welcome you to Bloom & Bite. ✨
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary"
                style={{ marginTop: "28px" }}
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                    required
                  />
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" style={labelStyle}>
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    onFocus={() => setFocused("date")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("date")}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" style={labelStyle}>
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    onFocus={() => setFocused("time")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("time")}
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="guests" style={labelStyle}>
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    onFocus={() => setFocused("guests")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("guests")}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Occasion */}
                <div>
                  <label htmlFor="occasion" style={labelStyle}>
                    Special Occasion (optional)
                  </label>
                  <input
                    id="occasion"
                    name="occasion"
                    type="text"
                    placeholder="Birthday, Anniversary…"
                    value={form.occasion}
                    onChange={handleChange}
                    onFocus={() => setFocused("occasion")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("occasion")}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "16px",
                  fontSize: "1rem",
                  marginTop: "8px",
                }}
              >
                🌸 Confirm Reservation
              </button>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--text-light)",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                Free cancellation up to 2 hours before your reservation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
