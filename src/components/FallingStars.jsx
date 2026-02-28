import { useEffect, useRef } from "react";

export const FallingStars = () => {
  const containerRef = useRef(null);

  // ⭐ mouse parallax
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="stars-container">
      {/* far stars */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span key={`far-${i}`} className="star star-far" />
      ))}

      {/* near stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={`near-${i}`} className="star star-near" />
      ))}

      {/* shooting stars */}
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={`shoot-${i}`} className="shooting-star" />
      ))}
    </div>
  );
};