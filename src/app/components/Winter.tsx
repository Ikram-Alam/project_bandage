"use client"
import React from "react";

const WinterComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <img  src="w1.png"  alt="Winter"  style={{    flex: "1 1 50%",    maxWidth: "50%",    borderRadius: "10px",    objectFit: "cover",  }}/>

        {/* Text Section */}
        <div
          style={{
            flex: "1 1 50%",
            maxWidth: "50%",
            padding: "20px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#888888",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            SUMMER 2020
          </p>
          <h1
            style={{
              fontSize: "32px",
              color: "#0d253f",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Part of the Neural Universe
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#4d4d4d",
              marginBottom: "20px",
            }}
          >
            We know how large objects will act, but things on a small scale.
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {/* Buy Now Button */}
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#218838")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#28a745")
              }
            >
              BUY NOW
            </button>

            {/* Read More Button */}
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                color: "#28a745",
                border: "2px solid #28a745",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#28a745";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#28a745";
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterComponent;
