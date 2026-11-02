
import { useState } from "react";

const education = [
  {
    number: "01",
    degree: "Bachelor of Technology",
    field: "Computer Science and Design",
    institution: "Vardhaman College of Engineering",
    period: "2025 – 2028",
    score: "8.35",
    scoreLabel: "CGPA",
    status: "Currently Pursuing",
    certificate: "/certificates/btech.jpg",
  },
  {
    number: "02",
    degree: "Diploma in Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "Government Polytechnic, Nalgonda",
    period: "Completed in 2025",
    score: "9.29",
    scoreLabel: "CGPA",
    status: "Completed",
    certificate: "/certificates/diploma-certificate.jpeg",
  },
  {
    number: "03",
    degree: "Secondary Education (SSC)",
    field: "School Education",
    institution: "MJPTBCWRS (Boys), Telkapally",
    period: "Completed in 2022",
    score: "9.7",
    scoreLabel: "CGPA",
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

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.number}>
              <div className="education-icon">
                <span>🎓</span>
              </div>

              <div className="education-details">
                <div className="education-card-top">
                  <span className="education-number">{item.number}</span>
                  <span className="education-status">{item.status}</span>
                </div>

                <h3>{item.degree}</h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-field">{item.field}</p>

                <div className="education-meta">
                  <span className="education-period">{item.period}</span>
                  <span className="education-score">
                    {item.scoreLabel}: {item.score}
                  </span>
                  <span className="education-completed">
                    {item.status}
                  </span>
                </div>

                <button
                  className="certificate-button"
                  onClick={() => setSelectedCertificate(item)}
                >
                  View Certificate ↗
                </button>
              </div>
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

            <h3>{selectedCertificate.degree}</h3>

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
