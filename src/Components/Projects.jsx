
const projects = [
  {
    number: "01",
    title: "Smart Retail Data Mining",
    category: "DATA ANALYTICS",
    description:
      "An interactive retail analytics dashboard exploring customer purchasing behavior through RFM analysis, K-Means customer segmentation, and Apriori market basket analysis. Built using a cleaned dataset of over 392,000 records.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Apriori"],
    status: "Completed",
    symbol: "◈",
  },
  {
    number: "02",
    title: "Personalized Book Recommendation System",
    category: "NLP · RECOMMENDATION SYSTEMS",
    description:
      "A content-based recommendation engine that helps readers discover relevant books using TF-IDF vectorization, cosine similarity, category interests, and recommendation scoring across 5,197 books.",
    technologies: ["Python", "Pandas", "TF-IDF", "Cosine Similarity", "NLP"],
    status: "Course project",
    symbol: "⌕",
  },
  {
    number: "03",
    title: "AI for Smart Academic Management",
    category: "HACKATHON PROJECT",
    description:
      "A prototype designed to analyze academic information such as attendance and marks, presenting student performance insights through an interactive dashboard.",
    technologies: ["Python", "Streamlit", "Pandas", "CSV", "Data Analysis"],
    status: "3rd Prize",
    symbol: "✳",
  },
  {
    number: "04",
    title: "Face Recognition Attendance System",
    category: "COMPUTER VISION",
    description:
      "An academic project exploring automated attendance using face detection and recognition, with OpenCV, a Flask application, and database integration.",
    technologies: ["Python", "OpenCV", "Face Recognition", "Flask", "Database"],
    status: "Academic project",
    symbol: "◎",
  },
  {
    number: "05",
    title: "Quiz System",
    category: "WEB DEVELOPMENT",
    description:
      "An interactive quiz application being rebuilt with React. Planned functionality includes question presentation, answer evaluation, and quiz result tracking.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Database"],
    status: "In progress",
    symbol: "⌘",
  },
];

function Projects() {
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

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  / {project.number}
                </span>
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-symbol" aria-hidden="true">
                {project.symbol}
              </div>

              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                <span>PROJECT {project.number}</span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>Interested in exploring my code?</p>
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
