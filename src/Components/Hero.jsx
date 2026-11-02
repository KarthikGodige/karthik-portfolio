
import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
  "Data Science Learner",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 65 : 110;

    if (!isDeleting && displayText === currentRole) {
      delay = 1600;
    }

    if (isDeleting && displayText === "") {
      delay = 400;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">
  COMPUTER SCIENCE & DATA SCIENCE STUDENT
  <span className="mobile-subtitle">
    FULL STACK DEVELOPMENT · AI/ML
  </span>
</p>

          <h1>
            Karthik
            <br />
            Godige<span className="hero-period"></span>
          </h1>

          <h2 className="hero-role" aria-live="polite">
            {displayText}
            <span className="typing-cursor" aria-hidden="true">|</span>
          </h2>

          <p className="hero-description">
            I build practical software applications and explore how
            web technologies, artificial intelligence, and data can
            solve real-world problems. I learn by building, testing,
            and improving projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              Explore my work <span aria-hidden="true">↗</span>
            </a>

            <a href="/resume.pdf" className="btn secondary-btn" download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/KarthikGodige"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/godige-karthik-b6353b368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
         <div className="hero-photo-area">
  <div className="hero-photo-wrapper">
    <img
      src={profileImage}
      alt="Karthik Godige"
      className="hero-profile-image"
    />
  </div>

  
<div className="hero-floating-label">
  <div className="identity-top">
    <span className="identity-monogram">KG</span>
    <span className="identity-status">
      <span className="status-dot"></span>
      PORTFOLIO
    </span>
  </div>

  <div className="identity-info">
    <strong>Building Digital Experiences</strong>
    <span>Web Development · AI · Data</span>
  </div>

  <div className="identity-bottom">
    <span>LEARN. BUILD. CREATE.</span>
    <span className="identity-arrow">↗</span>
  </div>
</div>

</div>

          <div className="hero-visual-caption">
            <span className="availability-dot" />
            LEARNING · BUILDING · IMPROVING
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
