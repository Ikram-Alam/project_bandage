"use client"
import React from "react";

const Summer: React.FC = () => {
  const handleClick = () => {
    alert("Winter Image Clicked!"); // Replace this with your desired click action
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <img src="s1.png"  alt="Winter Image"  style={styles.image} onClick={handleClick}/>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100%", // Set width to 100% for responsiveness
    height: "auto",
    gap: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    background: "#F5F5F5",
    overflow: "hidden",
    padding: "20px", // Add padding for smaller screens
  } as React.CSSProperties,
  imageContainer: {
    width: "100%", // Allow the container to adjust width dynamically
    maxWidth: "1200px", // Add max width for better scaling
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  } as React.CSSProperties,
  image: {
    width: "100%", // Ensure the image is responsive
    maxWidth: "600px", // Limit the maximum width for better scaling
    height: "auto",
    objectFit: "cover",
    cursor: "pointer", // Add a pointer cursor to indicate the image is clickable
    borderRadius: "8px", // Optional: Add rounded corners
    transition: "transform 0.3s ease", // Smooth hover effect
  } as React.CSSProperties,
};

export default Summer;
