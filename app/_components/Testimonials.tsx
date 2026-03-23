"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    handle: "@priyaeats",
    rating: 5,
    text: "Absolutely obsessed with this place! The Truffle Pasta is divine, and the ambience is straight out of a Pinterest board. My favourite Sunday brunch spot in the city 🌸",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya&backgroundColor=fce7f3",
    verified: true,
  },
  {
    id: 2,
    name: "Mia Thompson",
    handle: "@mia.foodie",
    rating: 5,
    text: "I came for the aesthetics and stayed for the food. The Rose Petal Tiramisu is the most beautiful dessert I've ever had. Can't stop thinking about it! ✨",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mia&backgroundColor=ede9fe",
    verified: true,
  },
  {
    id: 3,
    name: "Sophie Laurent",
    handle: "@sophieinparis",
    rating: 5,
    text: "Bloom & Bite has the most Instagrammable food I've seen! We celebrated my birthday here and it was absolutely magical. The staff treated us like queens 👑",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sophie&backgroundColor=fce7f3",
    verified: true,
  },
  {
    id: 4,
    name: "Anaya Gupta",
    handle: "@anaya_bites",
    rating: 5,
    text: "The perfect date spot. Soft lighting, gorgeous presentation, and the Lavender Latte is a revelation. Went twice in one week. No regrets! ☕💜",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Anaya&backgroundColor=fff7ed",
    verified: false,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill={i < rating ? "#f59e0b" : "#e5e7eb"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: (typeof reviews)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? "rgba(244,114,182,0.4)" : "rgba(255,255,255,0.8)"}`,
        borderRadius: "24px",
        padding: "32px 28px",
        boxShadow: hovered
          ? "0 20px 48px rgba(244,114,182,0.15)"
          : "0 4px 20px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        display: "flex",
        flexDirection: "column" as const,
        gap: "20px",
        minWidth: "286px",
      }}
    >
      {/* Quote mark */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4rem",
          lineHeight: 0.8,
          color: "#f472b6",
          opacity: 0.3,
          marginTop: "-8px",
        }}
      >
        "
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.92rem",
          color: "var(--text-mid)",
          lineHeight: 1.75,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {review.text}
      </p>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #fce7f3",
            flexShrink: 0,
          }}
        >
          <Image
            src={review.avatar}
            alt={review.name}
            width={48}
            height={48}
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--text-dark)",
              }}
            >
              {review.name}
            </span>
            {review.verified && (
              <span style={{ fontSize: "0.75rem", color: "#f472b6" }} title="Verified">
                ✓
              </span>
            )}
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              color: "#f472b6",
            }}
          >
            {review.handle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--pink-light) 0%, var(--lavender-light) 100%)",
        padding: "100px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Loved by All</span>
          <h2 className="section-title">
            What Our{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Guests Say
            </span>
          </h2>
          <p className="section-subtitle">
            Real reviews from real people who fell in love with Bloom & Bite.
          </p>
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>

        {/* Trust badges */}
        <div
          style={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "4.9★", label: "Google Rating" },
            { value: "2,400+", label: "Happy Guests" },
            { value: "#1", label: "Trending Cafe" },
          ].map((badge) => (
            <div key={badge.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {badge.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  color: "var(--text-mid)",
                  fontWeight: 500,
                }}
              >
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
