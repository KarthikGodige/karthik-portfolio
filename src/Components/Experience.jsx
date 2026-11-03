import { useState } from "react";

function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  const highlights = [
    {
      number: "01",
      title: "Software Development",
      description:
        "Contributed to the full development lifecycle, translating specifications into modular application components.",
    },
    {
      number: "02",
      title: "Quiz System Architecture",
      description:
        "Architected an enterprise Quiz System project with dynamic question retrieval, user sessions, and database persistence.",
    },
    {
      number: "03",
      title: "Database & Backend Engineering",
      description:
        "Designed relational database schemas in MySQL, optimized queries, and applied clean code practices under mentorship.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">PROFESSIONAL JOURNEY</p>
          <h2>Learning beyond the classroom.</h2>
          <p>
            Practical industry exposure through software development
            training and project-based learning.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>

          <article className="experience-card">
            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-content">
              <div className="experience-topline">
                <span className="experience-type">INDUSTRIAL TRAINING</span>
                <span className="experience-duration">6 MONTHS</span>
              </div>

              <h3>Software Development Trainee</h3>

              <h4 className="experience-company">AIML Services Pvt. Ltd.</h4>

              <p className="experience-date">
                18 November 2024 — 17 May 2025 · Hyderabad
              </p>

              <p className="experience-summary">
                Completed six months of intensive industrial training in Software Development, gaining hands-on exposure to modular software engineering, MySQL database design, and completing the Quiz System project.
              </p>

              <div className="experience-highlights">
                {highlights.map((item) => (
                  <div className="experience-highlight" key={item.number}>
                    <span className="highlight-symbol">{item.number}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="experience-certificate">
                <span>✓ Training completed · May 2025</span>

                <button
                  type="button"
                  onClick={() => setShowCertificate(true)}
                  className="certificate-button"
                >
                  View Certificate <span>↗</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Certificate Preview Popup */}
      {showCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setShowCertificate(false)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-close"
              onClick={() => setShowCertificate(false)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <p className="certificate-modal-title">
              INDUSTRIAL TRAINING CERTIFICATE
            </p>

            <img
              src="/images/internship-certificate.jpeg"
              alt="AIML Services Pvt. Ltd. Industrial Training Certificate"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
