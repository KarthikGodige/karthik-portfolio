import { useState } from "react";

const education = [
  {
    number: "01",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Data Science",
    institution: "Vardhaman College of Engineering",
    period: "2025 – 2028",
    score: "8.37",
    scoreLabel: "CGPA",
    status: "Currently Pursuing",
    certificate: null,
  },
  {
    number: "02",
    degree: "Diploma in Computer Science & Engineering",
    field: "Computer Science and Engineering",
    institution: "Government Polytechnic, Nalgonda",
    period: "2022 – 2025",
    score: "9.20",
    scoreLabel: "CGPA",
    status: "Completed",
    certificate: "/certificates/diploma-certificate.jpeg",
  },
  {
    number: "03",
    degree: "Secondary Education (SSC)",
    field: "School Education",
    institution: "MJPTBCWRS (Boys), Telkapally",
    period: "Completed 2022",
    score: "9.7",
    scoreLabel: "GPA",
    status: "Completed",
    certificate: "/certificates/ssc-certificate.jpeg",
  },
];

function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">EDUCATION</p>
          <h2>My Academic Journey</h2>
          <p>
            Building a strong foundation in technology and engineering.
          </p>
        </div>

        <div className="education-compact-grid">
          {education.map((item) => (
            <article className="education-compact-card" key={item.number}>
              <div className="edu-compact-header">
                <span className="edu-compact-num">{item.number}</span>
                <span className={`edu-compact-badge ${item.status === "Completed" ? "badge-done" : "badge-active"}`}>
                  {item.status}
                </span>
              </div>

              <h3 className="edu-compact-degree">{item.degree}</h3>
              <p className="edu-compact-inst">{item.institution}</p>
              <p className="edu-compact-field">{item.field}</p>

              <div className="edu-compact-meta">
                <span className="edu-compact-period">{item.period}</span>
                <span className="edu-compact-score">
                  {item.scoreLabel}: <strong>{item.score}</strong>
                </span>
              </div>

              {item.certificate && (
                <button
                  type="button"
                  className="edu-compact-btn"
                  onClick={() => setSelectedCertificate(item)}
                >
                  View Certificate ↗
                </button>
              )}
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <p className="certificate-modal-title">{selectedCertificate.degree}</p>

            <img
              src={selectedCertificate.certificate}
              alt={`${selectedCertificate.degree} certificate`}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
