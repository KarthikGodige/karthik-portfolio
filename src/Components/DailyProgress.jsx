
const learningAreas = [
  {
    number: "01",
    title: "Full Stack Development",
    status: "Currently learning",
    description:
      "Developing full-stack applications using React, Node.js, Express, MongoDB, and authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "02",
    title: "Data Structures & Algorithms",
    status: "Currently learning",
    description:
      "Strengthening problem-solving skills through data structures, algorithms, and coding challenges.",
    technologies: ["Java", "DSA", "Problem Solving"],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    status: "Currently learning",
    description:
      "Building foundations in Python, data science, machine learning, and artificial intelligence.",
    technologies: ["Python", "Pandas", "Machine Learning"],
  },
  {
    number: "04",
    title: "Project Development",
    status: "Building",
    description:
      "Applying technical knowledge by creating practical applications and improving portfolio projects.",
    technologies: ["React", "Python", "Project Building"],
  },
];

const metrics = [
  {
    icon: "01",
    title: "Coding Streak",
    description: "Daily activity tracking",
  },
  {
    icon: "02",
    title: "DSA Problems",
    description: "Solved problem count",
  },
  {
    icon: "03",
    title: "Coding Hours",
    description: "Time spent learning",
  },
  {
    icon: "04",
    title: "Project Progress",
    description: "Development milestones",
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
            the skills I'm developing.
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
              <p className="section-label">ACTIVITY TRACKER</p>
              <h3>My progress dashboard.</h3>
            </div>
            <span className="dashboard-label">Coming soon</span>
          </div>

          <div className="progress-metrics">
            {metrics.map((metric) => (
              <article className="progress-metric" key={metric.title}>
                <span className="metric-number">{metric.icon}</span>
                <h4>{metric.title}</h4>
                <p>{metric.description}</p>
                <span className="metric-pending">
                  Data not connected
                </span>
              </article>
            ))}
          </div>

          <p className="dashboard-note">
            Coding activity, learning streaks, and project statistics
            will be displayed here once connected to real data sources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DailyProgress;
