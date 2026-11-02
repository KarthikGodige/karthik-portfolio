
const achievements = [
  {
    number: "01",
    category: "HACKATHON",
    title: "3rd Prize — Hackathon",
    project: "AI for Smart Academic Management",
    description:
      "Developed a prototype that uses academic data, including student attendance and marks, to support smarter academic management through an interactive dashboard.",
    highlights: [
      "Academic data analysis",
      "Interactive Streamlit prototype",
      "Team-based problem solving",
    ],
    recognition: "3rd Prize",
  },
  {
    number: "02",
    category: "PATENT PROJECT",
    title: "UniWheel EV",
    project: "Electric Vehicle Concept",
    description:
      "Contributed to the UniWheel EV concept, exploring an electric vehicle design involving components such as the frame, battery, throttle, and wheels.",
    highlights: [
      "Electric vehicle concept",
      "Component-level design exploration",
      "Engineering innovation",
    ],
    recognition: "Patent project",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">RECOGNITION & MILESTONES</p>
          <h2>Work worth celebrating.</h2>
          <p>
            Highlights from hackathons, engineering ideas, and
            collaborative project work.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.number}
            >
              <div className="achievement-card-top">
                <span className="achievement-number">
                  {achievement.number}
                </span>
                <span className="achievement-category">
                  {achievement.category}
                </span>
              </div>

              <h3>{achievement.title}</h3>
              <p className="achievement-project">
                {achievement.project}
              </p>

              <p className="achievement-description">
                {achievement.description}
              </p>

              <ul className="achievement-highlights">
                {achievement.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="achievement-recognition">
                {achievement.recognition}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
