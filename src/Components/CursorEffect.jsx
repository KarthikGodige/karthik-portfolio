import { useEffect, useState } from "react";

function CursorEffect() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isOverCard, setIsOverCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const card = e.target.closest(
        ".project-compact-card, .education-compact-card, .achievement-card, .skill-card, .about-card, .coding-profile-card, .learning-card, .progress-metric, .interactive-card"
      );

      if (card) {
        setIsOverCard(true);

        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      } else {
        setIsOverCard(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsOverCard(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`cursor-shine-aura ${isOverCard ? "is-active" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    />
  );
}

export default CursorEffect;