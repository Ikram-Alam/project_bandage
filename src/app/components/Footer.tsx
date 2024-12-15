import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <h2 style={styles.brand}>Bandage</h2>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>Facebook</a>
            <a href="#" style={styles.icon}>Instagram</a>
            <a href="#" style={styles.icon}>Twitter</a>
          </div>
        </div>

        <div style={styles.linksSection}>
          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Company Info</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>About Us</li>
              <li style={styles.linkItem}>Carrier</li>
              <li style={styles.linkItem}>We are hiring</li>
              <li style={styles.linkItem}>Blog</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Legal</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>About Us</li>
              <li style={styles.linkItem}>Carrier</li>
              <li style={styles.linkItem}>We are hiring</li>
              <li style={styles.linkItem}>Blog</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Features</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>Business Marketing</li>
              <li style={styles.linkItem}>User Analytic</li>
              <li style={styles.linkItem}>Live Chat</li>
              <li style={styles.linkItem}>Unlimited Support</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Resources</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>iOS & Android</li>
              <li style={styles.linkItem}>Watch a Demo</li>
              <li style={styles.linkItem}>Customers</li>
              <li style={styles.linkItem}>API</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeader}>Get In Touch</h3>
            <form style={styles.form}>
              <input type="email" placeholder="Your Email" style={styles.input} />
              <button type="submit" style={styles.subscribeButton}>Subscribe</button>
            </form>
            <p style={styles.note}>Lore imp sum dolor Amit</p>
          </div>
        </div>
{/* 
        <div style ={styles.bottomSection}> */}
          <p style={styles.footerText}>Made With Love By Finland All Right Reserved</p>
        {/* </div> */}
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f9f9f9",
    padding: "2rem 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1rem",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#222",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
  },
  icon: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
  linksSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  column: {},
  columnHeader: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
  },
  linkItem: {
    marginBottom: "0.5rem",
    color: "#555",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  subscribeButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  note: {
    marginTop: "1rem",
    color: "#777",
    fontSize: "0.9rem",
  },
  bottomSection: {
    marginTop: "2rem",
    borderTop: "1px solid #ddd",
    paddingTop: "1rem",
    textAlign: "center",
  },
  footerText: {
    color: "#555",
  },
};

export default Footer;
