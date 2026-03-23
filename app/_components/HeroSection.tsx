"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&auto=format&fit=crop&q=80"
          alt="Elegant restaurant ambience with beautiful food"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          unoptimized
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(135deg, rgba(74,25,66,0.78) 0%, rgba(244,114,182,0.4) 50%, rgba(74,25,66,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {/* Pill label */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "50px",
            padding: "8px 20px",
            marginBottom: "28px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#fce7f3",
            }}
          >
            ✨ Est. 2020 · Fine Casual Dining
          </span>
        </div>

        {/* Restaurant name */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.2rem, 8vw, 5.5rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.05,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease 0.25s",
          }}
        >
          Bloom{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #f9a8d4, #e879f9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            &amp; Bite
          </span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.88)",
            margin: "0 0 48px",
            lineHeight: 1.6,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease 0.4s",
          }}
        >
          Where Taste Meets Aesthetic
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease 0.55s",
          }}
        >
          <a
            href="#reserve"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            🌸 Reserve Table
          </a>
          <a
            href="#dishes"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#dishes")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Menu →
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: loaded ? 0.6 : 0,
            transition: "opacity 1.2s ease 1s",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Scroll to explore
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, white, transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Decorative floating circles */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(244,114,182,0.15)",
          backdropFilter: "blur(8px)",
          zIndex: 1,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(167,139,250,0.15)",
          backdropFilter: "blur(8px)",
          zIndex: 1,
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />
    </section>
  );
}
