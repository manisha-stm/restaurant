"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=80",
    alt: "Aesthetic brunch plate",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
    alt: "Beautiful pasta dish",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80",
    alt: "Dessert presentation",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop&q=80",
    alt: "Colourful salad bowl",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&auto=format&fit=crop&q=80",
    alt: "Latte art coffee",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    alt: "Instagram food bowl",
    span: "col-span-1 row-span-2",
  },
];

function GalleryItem({ photo }: { photo: (typeof photos)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 16px 40px rgba(244,114,182,0.3)"
          : "0 4px 16px rgba(0,0,0,0.08)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        minHeight: "200px",
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        style={{ objectFit: "cover" }}
        unoptimized
      />

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(135deg, rgba(244,114,182,0.7), rgba(167,139,250,0.6))"
            : "rgba(0,0,0,0)",
          transition: "background 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.8)",
            transition: "all 0.35s ease",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>♥</div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "white",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Save to Inspo
          </span>
        </div>
      </div>
    </div>
  );
}

export default function InstagramGallery() {
  return (
    <section
      id="gallery"
      style={{
        background: "linear-gradient(135deg, var(--lavender-light) 0%, var(--pink-light) 100%)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">📸 Our Story</span>
          <h2 className="section-title">
            Made for your{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Feed
            </span>
          </h2>
          <p className="section-subtitle">
            Every corner of Bloom & Bite is designed to be photographed. Share your moments with{" "}
            <strong style={{ color: "#f472b6" }}>#BloomAndBite</strong>
          </p>
        </div>

        {/* Gallery grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "16px",
          }}
        >
          {/* Row 1: tall | short | short */}
          <div style={{ gridRow: "span 2", minHeight: "440px" }}>
            <GalleryItem photo={photos[0]} />
          </div>
          <div style={{ minHeight: "210px" }}>
            <GalleryItem photo={photos[1]} />
          </div>
          <div style={{ minHeight: "210px" }}>
            <GalleryItem photo={photos[2]} />
          </div>
          {/* Row 2: (tall continued) | short | short */}
          <div style={{ minHeight: "210px" }}>
            <GalleryItem photo={photos[3]} />
          </div>
          <div style={{ minHeight: "210px" }}>
            <GalleryItem photo={photos[4]} />
          </div>
          {/* Row 3: wide spanning */}
          <div
            style={{
              gridColumn: "span 2",
              minHeight: "260px",
            }}
          >
            <GalleryItem photo={photos[5]} />
          </div>
          {/* Empty cell so grid rows fill */}
          <div />
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "0.92rem",
              color: "#f472b6",
              textDecoration: "none",
              padding: "12px 28px",
              borderRadius: "50px",
              border: "2px solid #f472b6",
              transition: "all 0.3s ease",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f472b6";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f472b6";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @bloomandbite
          </a>
        </div>
      </div>
    </section>
  );
}
