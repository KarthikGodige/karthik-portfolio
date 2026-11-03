
import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Smart Retail Data Mining",
    category: "DATA ANALYTICS",
    description:
      "Interactive retail dashboard exploring purchasing behavior via RFM analysis, K-Means segmentation, and Apriori market basket analysis over 392,000+ records.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Apriori"],
    status: "Completed",
    symbol: "◈",
    github: "https://github.com/KarthikGodige",
  },
  {
    number: "02",
    title: "Face Recognition Attendance System",
    category: "COMPUTER VISION",
    description:
      "Automated attendance system using Python and OpenCV to detect and recognize faces in real time, logging timestamps directly to a database.",
    technologies: ["Python", "OpenCV", "face_recognition", "Flask", "MySQL"],
    status: "Verified Code",
    symbol: "◎",
    github:
      "https://github.com/KarthikGodige/ATTENDANCE-USING-FACE-RECOGNITION",
  },
  {
    number: "03",
    title: "AI for Smart Academic Management",
    category: "HACKATHON PROJECT",
    description:
      "Academic monitoring dashboard analyzing attendance and marks to flag performance insights. Won 3rd Prize in a collegiate hackathon.",
    technologies: ["Python", "Streamlit", "Pandas", "Data Analysis"],
    status: "3rd Prize Winner",
    symbol: "✳",
    github: "https://github.com/KarthikGodige",
  },
  {
    number: "04",
    title: "Quiz System",
    category: "SOFTWARE ENGINEERING",
    description:
      "Enterprise test platform engineered during 6-month industrial training. Features dynamic question banks, automated scoring, and database persistence.",
    technologies: ["Java", "MySQL", "React", "Node.js"],
    status: "Industrial Project",
    symbol: "⌘",
    github: "https://github.com/KarthikGodige/QUIZ-SYSTEM",
  },
  {
    number: "05",
    title: "Personalized Book Recommendation System",
    category: "NLP · MACHINE LEARNING",
    description:
      "Content-based recommendation engine matching readers to relevant literature using TF-IDF vectorization and cosine similarity over 5,197 books.",
    technologies: [
      "Python",
      "TF-IDF",
      "Cosine Similarity",
      "NLP",
      "Pandas",
    ],
    status: "Completed",
    symbol: "⌕",
    github: "https://github.com/KarthikGodige",
  },
  {
    number: "06",
    title: "UniWheel EV",
    category: "ENGINEERING CONCEPT",
    description:
      "Electric vehicle concept exploring single-wheel drive dynamics, battery placement, chassis ergonomics, and throttle mechanics. Associated with a patent.",
    technologies: [
      "EV Engineering",
      "Battery Management",
      "Chassis Design",
    ],
    status: "Patent Project",
    symbol: "⚡",
    github: "https://github.com/KarthikGodige",
  },
];

function Projects() {
  const projectsGridRef = useRef(null);

  useEffect(() => {
    const grid = projectsGridRef.current;

    if (!grid) return;

    const cards = grid.querySelectorAll(".project-compact-card");

    // Respect reduced-motion accessibility settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cards.forEach((card, index) => {
      card.style.transitionDelay = `${(index % 3) * 120}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
  const cards = document.querySelectorAll(".project-compact-card");

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  cards.forEach((card) => {
    card.addEventListener("mousemove", handleMouseMove);
  });

  return () => {
    cards.forEach((card) => {
      card.removeEventListener("mousemove", handleMouseMove);
    });
  };
}, []);
  

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">MY WORK</p>
          <h2>Things I've been building.</h2>
          <p>
            A selection of projects where I've turned ideas,
            experiments, and learning into practical applications.
          </p>
        </div>

        <div className="projects-compact-grid" ref={projectsGridRef}>
          {projects.map((project) => (
            <article
              className="project-compact-card interactive-card"
              key={project.number}
            >
              <div className="card-top-row">
                <span className="compact-number">/{project.number}</span>
                <span className="compact-category">
                  {project.category}
                </span>
                <span className="compact-status-badge">
                  {project.status}
                </span>
              </div>

              <h3 className="compact-title">{project.title}</h3>

              <p className="compact-desc">{project.description}</p>

              <div className="compact-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="compact-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="compact-card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg
                    className="github-svg-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>

                  <span>GitHub Repository</span>

                  <span className="github-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>Interested in exploring more source code?</p>

          <a
            href="https://github.com/KarthikGodige"
            target="_blank"
            rel="noopener noreferrer"
            className="github-project-link"
          >
            Explore GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
