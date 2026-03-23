"use client";

import { useState } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    emoji: "🌿",
    title: "Fresh Ingredients",
    description:
      "We source seasonal, organic produce daily from local farms. Every ingredient is chosen for flavour, freshness, and beauty.",
    color: "#34d399",
    bg: "#d1fae5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    emoji: "🪴",
    title: "Cozy Ambience",
    description:
      "Warm fairy lights, curated playlists, and soft colours make Bloom & Bite the perfect spot to linger for hours.",
    color: "#a78bfa",
    bg: "#ede9fe",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    emoji: "💑",
    title: "Perfect for Dates",
    description:
      "Intimate seating, candlelit corners, and a romantic menu make every date night feel like a fairy tale.",
    color: "#f472b6",
    bg: "#fce7f3",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5C9.3 2.5 10.6 2 12 2" />
      </svg>
    ),
    emoji: "✨",
    title: "Beautiful Presentation",
    description:
      "Our chefs are artists. Each dish is plated with the same care as a painting — because you eat with your eyes first.",
    color: "#fdba74",
    bg: "#fff7ed",
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? feature.color + "55" : "rgba(255,255,255,0.8)"}`,
        borderRadius: "24px",
        padding: "40px 32px",
        textAlign: "center",
        boxShadow: hovered
          ? `0 20px 48px ${feature.color}20`
          : "0 4px 20px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: feature.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: feature.color,
          fontSize: "2rem",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
          transition: "transform 0.4s ease",
        }}
      >
        <span>{feature.emoji}</span>
      </div>

      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--text-dark)",
          margin: "0 0 14px",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9rem",
          color: "var(--text-mid)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {feature.description}
      </p>

      {/* Bottom accent bar */}
      <div
        style={{
          marginTop: "28px",
          height: "3px",
          borderRadius: "2px",
          background: feature.color,
          transform: `scaleX(${hovered ? 1 : 0.3})`,
          transformOrigin: "left",
          transition: "transform 0.4s ease",
          opacity: hovered ? 1 : 0.4,
        }}
      />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--peach-light) 100%)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Why We're Different</span>
          <h2 className="section-title">
            The Bloom & Bite{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Promise
            </span>
          </h2>
          <p className="section-subtitle">
            We believe dining is an experience — not just a meal. Here's what makes every visit unforgettable.
          </p>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
