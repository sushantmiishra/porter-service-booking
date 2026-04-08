import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "40vh",
        minHeight: "220px",
        borderRadius: "0 0 24px 24px",
      }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 bg-neutral-200 animate-pulse"
          style={{ borderRadius: "0 0 24px 24px" }}
        />
      )}
      <img
        src="https://c.animaapp.com/mnq5awfheED1yM/img/ai_1.png"
        alt="Porter assisting traveler at airport"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ borderRadius: "0 0 24px 24px" }}
      />
    </div>
  );
};

export default HeroSection;
