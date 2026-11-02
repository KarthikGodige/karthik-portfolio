
import { useEffect } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Achievements from "./Components/Achievements";
import Education from "./Components/Education";
import CodingProfiles from "./Components/CodingProfiles";
import DailyProgress from "./Components/DailyProgress";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".section-label, .about-card, .project-card, .skill-card, .achievement-card, .education-card, .coding-profile-card, .learning-card, .progress-metric, .contact-form-wrapper"
    );

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) =>
        element.classList.add("reveal-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <CodingProfiles />
        <DailyProgress />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
