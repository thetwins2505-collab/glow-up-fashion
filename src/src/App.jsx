import React from "react";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Glow Up Fashion
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        مرحبا بيك في موقع تنظيم الحفلات و الأعراس.  
        الموقع مازال فارغ ونتا تكمّل المحتوى والصور بسهولة.
      </p>

      <div
        style={{
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          خدماتنا:
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>قاعات الأفراح (ضيفهم من بعد)</li>
          <li>تنظيم الأعراس</li>
          <li>إيفانتمون جديدة</li>
          <li>الحجز للزوج فقط</li>
        </ul>
      </div>

      <p style={{ marginTop: "30px", fontSize: "16px", opacity: 0.7 }}>
        تقدر تزيد صور، قاعات، عروض وتنظيم كامل من بعد.
      </p>
    </div>
  );
}
