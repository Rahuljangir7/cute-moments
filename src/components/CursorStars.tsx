import { useEffect } from "react";

const CursorStars = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const star = document.createElement("div");
      star.className = "cm-cursor-star";
      star.innerHTML = "✨";
      
      // Randomize position slightly
      const x = e.clientX + (Math.random() * 20 - 10);
      const y = e.clientY + (Math.random() * 20 - 10);
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      // Randomize size and rotation
      const size = Math.random() * 20 + 10;
      star.style.fontSize = `${size}px`;
      star.style.setProperty("--rotation", `${Math.random() * 360}deg`);
      
      document.body.appendChild(star);
      
      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // This component handles its own DOM elements
};

export default CursorStars;
