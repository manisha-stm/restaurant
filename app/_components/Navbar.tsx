"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#dishes" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(255,255,255,0.82)"
          : "rgba(255,255,255,0.0)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(244,114,182,0.15)"
          : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(244,114,182,0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            fontWeight: 700,
            textDecoration: "none",
            background: "linear-gradient(135deg, #f472b6, #a78bfa)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.01em",
          }}
        >
          Bloom & Bite 🌸
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: scrolled ? "var(--text-dark)" : "white",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#f472b6")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = scrolled
                    ? "var(--text-dark)"
                    : "white")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve button */}
        <a
          href="#reserve"
          onClick={(e) => handleNavClick(e, "#reserve")}
          className="hidden md:inline-flex"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
            padding: "10px 24px",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #f472b6, #e879f9)",
            color: "white",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(244,114,182,0.35)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(244,114,182,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(244,114,182,0.35)";
          }}
        >
          Reserve Table
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: scrolled ? "var(--text-dark)" : "white",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transformOrigin: "center",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(244,114,182,0.2)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: "block",
                padding: "12px 0",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                color: "var(--text-dark)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(244,114,182,0.1)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={(e) => handleNavClick(e, "#reserve")}
            className="btn-primary"
            style={{ marginTop: "16px", justifyContent: "center" }}
          >
            Reserve Table
          </a>
        </div>
      )}
    </nav>
  );
}
