"use client"
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbarContainer}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <h3 style={styles.logoText}>Bandage</h3>
      </div>

      {/* Links Section */}
      <div style={styles.linksContainer}>
        <a href="#home" style={styles.navLink}>
          Home
        </a>
        <a href="#shop" style={styles.navLink}>
          Shop
        </a>
        <a href="#about" style={styles.navLink}>
          About
        </a>
        <a href="#blog" style={styles.navLink}>
          Blog
        </a>
        <a href="#content" style={styles.navLink}>
          Content
        </a>
        <a href="#pages" style={styles.navLink}>
          Pages
        </a>
      </div>

      {/* Action Section */}
      <div style={styles.actionContainer}>
        <a href="#login" style={styles.navLink}>
          Login / Register
        </a>
        <div style={styles.iconsContainer}>
          <img src="n (1).png" alt="Search" style={styles.icon} />
          <img src="n (2).png" alt="Cart" style={styles.icon} />
          <img src="n (3).png" alt="Favorite" style={styles.icon} />
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1437px",
    height: "58px",
    padding: "0px 17px 0px 38px",
    margin: "0 auto",
    background: "#FFFFFF",
    gap: "20px",
    borderBottom: "1px solid #E0E0E0", // Optional for separation
    flexWrap: "wrap",
  } as React.CSSProperties,
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "58px",
  } as React.CSSProperties,
  logoText: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "0.1px",
    textAlign: "left",
    color: "#000000",
  } as React.CSSProperties,
  linksContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
  } as React.CSSProperties,
  navLink: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 500,
    color: "#000000",
    textDecoration: "none",
    padding: "5px 10px",
    transition: "color 0.3s",
    cursor: "pointer",
  } as React.CSSProperties,
  actionContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  } as React.CSSProperties,
  iconsContainer: {
    display: "flex",
    gap: "10px",
  } as React.CSSProperties,
  icon: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  } as React.CSSProperties,
};

export default Navbar;
// Header Component

// Navbar Component
// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav style={styles.navbar}>
//       {/* Logo */}
//       <div style={styles.logoContainer}>
//         <h3 style={styles.logo}>Bandage</h3>
//       </div>

//       {/* Toggle Button for Mobile */}
//       <button style={styles.toggleButton} onClick={toggleMenu}>
//         ☰
//       </button>

//       {/* Links Section */}
//       <div
//         style={{
//           ...styles.linksContainer,
//           display: isMenuOpen ? "flex" : "none",
//         }}
//       >
//         <a href="#home" style={styles.link}>Home</a>
//         <a href="#shop" style={styles.link}>Shop</a>
//         <a href="#about" style={styles.link}>About</a>
//         <a href="#blog" style={styles.link}>Blog</a>
//         <a href="#content" style={styles.link}>Content</a>
//         <a href="#pages" style={styles.link}>Pages</a>
//         <a href="#login" style={styles.link}>Login / Register</a>
//       </div>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#ffffff",
//     borderBottom: "1px solid #e0e0e0",
//     maxWidth: "1440px",
//     margin: "0 auto",
//   },
//   logoContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logo: {
//     fontFamily: "Montserrat, sans-serif",
//     fontSize: "24px",
//     fontWeight: 700,
//     color: "#000000",
//   },
//   toggleButton: {
//     display: "none",
//     fontSize: "20px",
//     background: "none",
//     border: "none",
//     cursor: "pointer",
//   },
//   linksContainer: {
//     display: "flex",
//     gap: "15px",
//     flexDirection: "row",
//   },
//   link: {
//     fontFamily: "Montserrat, sans-serif",
//     fontSize: "14px",
//     fontWeight: 500,
//     textDecoration: "none",
//     color: "#000000",
//     padding: "5px 10px",
//     transition: "color 0.3s ease",
//   },
//   '@media (max-width: 768px)': {
//     toggleButton: {
//       display: "block",
//     },
//     linksContainer: {
//       display: "none",
//       flexDirection: "column",
//       gap: "10px",
//       backgroundColor: "#ffffff",
//       position: "absolute",
//       top: "50px",
//       right: "20px",
//       border: "1px solid #e0e0e0",
//       padding: "10px",
//       borderRadius: "5px",
//       width: "200px",
//     },
//     linksContainerOpen: {
//       display: "flex",
//     },
//   },
// };

// export default Navbar;
