"use client"

import React from "react";

const Loader: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(5px)",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        border: "16px solid #f3f3f3",
        borderRadius: "50%",
        borderTop: "16px solid #3498db",
        width: "120px",
        height: "120px",
        animation: "spin 2s linear infinite",
      }}
    />
    <style jsx global>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loader;
