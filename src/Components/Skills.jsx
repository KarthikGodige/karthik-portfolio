const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Oracle", "SQL", "SQLite"],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "OpenCV",
      "TF-IDF",
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "NetBeans", "Streamlit"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">TECHNICAL SKILLS</p>
          <h2>Tools I work with.</h2>
          <p>
            Technologies I've studied and applied while learning
            software development, building projects, and exploring data.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3 className="skill-title">{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
