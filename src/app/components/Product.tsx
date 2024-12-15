"use client"
import React from "react";
import Image from "next/legacy/image";

const products = [
  { id: 1, image: "/p1.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 2, image: "/p2.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 3, image: "/p3.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 4, image: "/p4.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 5, image: "/p5.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 6, image: "/p6.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 7, image: "/p7.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
  { id: 8, image: "/p8.jpg", title: "Graphic Design", category: "English Department", price: 16.48, salePrice: 6.48 },
];

const styles = {
  featured: {
    textAlign: "center" as const,
    padding: "2rem",
  },
  heading3: {
    color: "#777",
    fontSize: "1.2rem",
  },
  heading1: {
    color: "#000",
    fontSize: "2rem",
    margin: "0.5rem 0",
  },
  paragraph: {
    color: "#777",
    fontSize: "1rem",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
  },
  cardImage: {
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  cardCategory: {
    fontSize: "0.9rem",
    color: "#666",
  },
  prices: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    margin: "0.5rem 0",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#999",
  },
  salePrice: {
    color: "#28a745",
    fontWeight: "bold" as const,
  },
  colors: {
    display: "flex",
    gap: "0.5rem",
  },
  colorDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "1px solid #ddd",
  },
};

const FeaturedProducts = () => {
  return (
    <section style={styles.featured}>
      <h3 style={styles.heading3}>Featured Products</h3>
      <h1 style={styles.heading1}>BESTSELLER PRODUCTS</h1>
      <p style={styles.paragraph}>Problems trying to resolve the conflict between</p>
      <div style={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            style={styles.card}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={300}
              style={styles.cardImage}
            />
            <h4 style={styles.cardTitle}>{product.title}</h4>
            <p style={styles.cardCategory}>{product.category}</p>
            <div style={styles.prices}>
              <span style={styles.originalPrice}>${product.price.toFixed(2)}</span>
              <span style={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
            </div>
            <div style={styles.colors}>
              <span style={{ ...styles.colorDot, backgroundColor: "blue" }}></span>
              <span style={{ ...styles.colorDot, backgroundColor: "green" }}></span>
              <span style={{ ...styles.colorDot, backgroundColor: "black" }}></span>
              <span style={{ ...styles.colorDot, backgroundColor: "red" }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
