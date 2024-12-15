import React from "react";
import Image from "next/legacy/image";

const HeroSection: React.FC = () => {
  return (
    <section style={styles.heroContainer}>
      {/* Left Content */}
      <div style={styles.contentContainer}>
        <p style={styles.subheading}>SUMMER 2020</p>
        <h1 style={styles.heading}>NEW COLLECTION</h1>
        <p style={styles.description}>
          We know how large objects will act, but things on a small scale.
        </p>
        <button style={styles.shopButton}>SHOP NOW</button>
      </div>

      {/* Right Image */}
      <div style={styles.imageContainer}>
      <Image src="/he1.png"  alt="Hero Background"  layout="fill"  objectFit="cover"  quality={100}/>
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  } as React.CSSProperties,
  contentContainer: {
    flex: 1,
    padding: "0 2rem",
    zIndex: 2,
  } as React.CSSProperties,
  subheading: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "uppercase",
    marginBottom: "10px",
  } as React.CSSProperties,
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#FFFFFF",
    margin: "10px 0",
  } as React.CSSProperties,
  description: {
    fontSize: "16px",
    color: "#FFFFFF",
    marginBottom: "20px",
  } as React.CSSProperties,
  shopButton: {
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  } as React.CSSProperties,
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  } as React.CSSProperties,
  "@media (max-width: 768px)": {
    heroContainer: {
      flexDirection: "column",
      textAlign: "center",
    },
    contentContainer: {
      padding: "1rem",
    },
    heading: {
      fontSize: "32px",
    },
    description: {
      fontSize: "14px",
    },
    shopButton: {
      padding: "10px 20px",
      fontSize: "14px",
    },
  },
};

export default HeroSection;
