// import React from "react";

// const Header: React.FC = () => {
//   return (
//     <header style={styles.headerContainer}>
//       {/* Left Section */}
//       <div style={styles.headerLeft}>
//         <div style={styles.contactItem}>
//           <img src="Vector (1).png" alt="Phone" style={styles.icon} />
//           <span style={styles.text}>(225) 555-0118</span>
//         </div>
//         <div style={styles.contactItem}>
//           {/* <img src="Vector.png" alt="Mail" style={styles.icon} /> */}
//           <span style={styles.text}>michelle.rivera@example.com</span>
//         </div>
//       </div>

//       {/* Center Section */}
//       <div style={styles.headerCenter}>
//         <p style={styles.text}>Follow Us and get a chance to win 80% off</p>
//       </div>

//       {/* Right Section */}
//       <div style={styles.headerRight}>
//         <span style={styles.text}>Contact Us:</span>
//         <div style={styles.socialIcons}>
//           <img src="social (1).png" alt="Social 1" style={styles.icon} />
//           <img src="social (2).png" alt="Social 2" style={styles.icon} />
//           <img src="social (3).png" alt="Social 3" style={styles.icon} />
//           <img src="social (4).png" alt="Social 4" style={styles.icon} />
//         </div>
//       </div>
//     </header>
//   );
// };

// const styles = {
//   headerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     maxWidth: "1439px",
//     height: "48px", // Thinner header
//     padding: "5px 20px", // Adjusted padding for thinner appearance
//     margin: "0 auto",
//     gap: "10px",
//     background: "#252B42",
//     opacity: 1,
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//   } as React.CSSProperties,
//   headerLeft: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//   } as React.CSSProperties,
//   contactItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//   } as React.CSSProperties,
//   icon: {
//     width: "16px", // Adjusted size for thinner header
//     height: "16px",
//   } as React.CSSProperties,
//   text: {
//     color: "#FFFFFF",
//     fontSize: "12px", // Reduced font size for thinner header
//     fontWeight: "500",
//   } as React.CSSProperties,
//   headerCenter: {
//     textAlign: "center",
//     padding: "5px 0",
//     flex: 1,
//   } as React.CSSProperties,
//   headerRight: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   } as React.CSSProperties,
//   socialIcons: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   } as React.CSSProperties,
// };

// export default Header;




import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.headerContainer}>
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <span style={styles.icon}></span> {/* Phone Icon */}
          <span>(225) 555-0118</span>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.icon}></span> {/* Email Icon */}
          <span>michelle.rivera@example.com</span>
        </div>
      </div>
      <div style={styles.promoInfo}>
        <span>Follow Us and get a chance to win 80% off</span>
      </div>
      <div style={styles.socialMedia}>
        <span style={styles.socialText}>Follow Us :</span>
        <div style={styles.iconsContainer}>
          <span style={styles.icon}><img src="social (2).png" alt="" /></span> {/* Instagram Icon */}
          <span style={styles.icon}><img src="social (3).png" alt="" /></span> {/* YouTube Icon */}
          <span style={styles.icon}><img src="social (4).png" alt="" /></span> {/* Facebook Icon */}
          <span style={styles.icon}><img src="social (1).png" alt="" /></span> {/* Twitter Icon */}
        </div>
      </div>
    </header>
  );
};

const styles = {
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E293B",
    color: "white",
    padding: "10px 20px",
    flexWrap: "wrap" as "wrap",
  },
  contactInfo: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  promoInfo: {
    flex: "1",
    textAlign: "center" as "center",
    fontSize: "14px",
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  socialText: {
    marginRight: "8px",
  },
  iconsContainer: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    fontSize: "16px",
  },
};

export default Header;
