const learningAreas = [
  {
    number: "01",
    title: "Full Stack Development",
    status: "Currently learning",
    description:
      "Developing full-stack applications using React, Node.js, Express, MongoDB, and MySQL.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "02",
    title: "Data Structures & Algorithms",
    status: "Currently learning",
    description:
      "Strengthening problem-solving skills through data structures, algorithms, and coding challenges.",
    technologies: ["Java", "Python", "DSA", "Problem Solving"],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    status: "Currently learning",
    description:
      "Building foundations in Python, data science, machine learning, and computer vision.",
    technologies: ["Python", "Pandas", "Scikit-learn", "OpenCV"],
  },
  {
    number: "04",
    title: "Project Development",
    status: "Building",
    description:
      "Applying technical knowledge by creating practical applications and improving portfolio projects.",
    technologies: ["React", "Python", "Full Stack", "Project Building"],
  },
];

const metrics = [
  {
    icon: "01",
    metric: "392K+",
    title: "Records Processed",
    description: "Retail transactions analyzed and clustered",
  },
  {
    icon: "02",
    metric: "5,197",
    title: "Books Indexed",
    description: "TF-IDF NLP recommendation matrix",
  },
  {
    icon: "03",
    metric: "6 Mos",
    title: "Industrial Training",
    description: "Software Development at AIML Services",
  },
  {
    icon: "04",
    metric: "3rd",
    title: "Hackathon Prize",
    description: "AI Academic Management prototype",
  },
];

function DailyProgress() {
  return (
    <section id="daily-progress" className="daily-progress-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">BEYOND THE PROJECTS</p>
          <h2>Always learning. Always building.</h2>
          <p>
            A snapshot of the areas I'm currently exploring and
            the milestones achieved so far.
          </p>
        </div>

        <div className="learning-grid">
          {learningAreas.map((area) => (
            <article className="learning-card" key={area.number}>
              <div className="learning-card-top">
                <span className="learning-number">{area.number}</span>
                <span className="learning-status">
                  <span className="learning-dot" />
                  {area.status}
                </span>
              </div>

              <h3>{area.title}</h3>

              <p className="learning-description">
                {area.description}
              </p>

              <div className="learning-technologies">
                {area.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="progress-dashboard">
          <div className="progress-dashboard-heading">
            <div>
              <p className="section-label">KEY STATS</p>
              <h3>Project &amp; Learning Highlights</h3>
            </div>
          </div>

          <div className="progress-metrics">
            {metrics.map((metric) => (
              <article className="progress-metric" key={metric.title}>
                <span className="metric-number">{metric.metric}</span>
                <h4>{metric.title}</h4>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyProgress;
