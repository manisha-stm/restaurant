"use client";

import Image from "next/image";
import { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Truffle Pasta",
    price: "$24",
    description: "Silky homemade tagliatelle tossed in black truffle cream, finished with aged parmesan shavings.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop&q=80",
    tag: "Chef's Pick",
    tagColor: "#f472b6",
  },
  {
    id: 2,
    name: "Avocado Rose Toast",
    price: "$16",
    description: "Artisan sourdough topped with smashed avocado, micro-herbs, edible flowers, and pink salt.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&auto=format&fit=crop&q=80",
    tag: "Trending",
    tagColor: "#a78bfa",
  },
  {
    id: 3,
    name: "Strawberry Pavlova",
    price: "$14",
    description: "Delicate meringue topped with rose cream, fresh strawberries, and gold leaf dust.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
    tag: "Bestseller",
    tagColor: "#f472b6",
  },
  {
    id: 4,
    name: "Pink Lemonade Salmon",
    price: "$32",
    description: "Pan-seared salmon on lemon butter risotto with citrus beurre blanc and micro greens.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
    tag: "New",
    tagColor: "#34d399",
  },
  {
    id: 5,
    name: "Rose Petal Tiramisu",
    price: "$12",
    description: "Classic Italian tiramisu with a rose water twist, layered in a glass with crystallized petals.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=80",
    tag: "Sweet",
    tagColor: "#fb7185",
  },
  {
    id: 6,
    name: "Lavender Latte",
    price: "$8",
    description: "House-made lavender syrup with velvety oat milk, espresso, and a purple butterfly-pea swirl.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
    tag: "Drink",
    tagColor: "#a78bfa",
  },
];

function DishCard({ dish }: { dish: (typeof dishes)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.8)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 48px rgba(244,114,182,0.2)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
          unoptimized
        />
        {/* Tag badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: dish.tagColor,
            color: "white",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 12px",
            borderRadius: "50px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {dish.tag}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--text-dark)",
              margin: 0,
            }}
          >
            {dish.name}
          </h3>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              fontWeight: 600,
              color: "#f472b6",
              flexShrink: 0,
              marginLeft: "8px",
            }}
          >
            {dish.price}
          </span>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            color: "var(--text-mid)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {dish.description}
        </p>

        {/* Add to order */}
        <button
          style={{
            marginTop: "18px",
            width: "100%",
            padding: "11px",
            borderRadius: "50px",
            border: `2px solid ${dish.tagColor}`,
            background: hovered ? dish.tagColor : "transparent",
            color: hovered ? "white" : dish.tagColor,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {hovered ? "✓ Add to Order" : "Order Now"}
        </button>
      </div>
    </div>
  );
}

export default function PopularDishes() {
  return (
    <section id="dishes" style={{ background: "var(--cream)", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Our Specialties</span>
          <h2 className="section-title">
            Popular{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dishes
            </span>
          </h2>
          <p className="section-subtitle">
            Every plate is a work of art — crafted with seasonal ingredients, love, and an eye for the beautiful.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* View full menu button */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "16px 40px" }}
          >
            🌸 View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
