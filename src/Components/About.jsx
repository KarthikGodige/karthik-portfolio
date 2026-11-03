function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      text: "B.Tech — Computer Science & Data Science",
    },
    {
      icon: "💻",
      title: "Current Focus",
      text: "Full Stack Development + AI/ML",
    },
    {
      icon: "🧠",
      title: "Learning",
      text: "DSA, Data Science & Machine Learning",
    },
    {
      icon: "🚀",
      title: "Goal",
      text: "Build useful software and grow as a developer",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-heading about-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>
            Building skills. Building projects.
            <br />
            Building my career.
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-content">
            <p>
              I'm <strong>Karthik Godige</strong>, a Computer Science and
              Data Science student at Vardhaman College of Engineering, passionate about software development and
              building solutions to real-world problems.
            </p>

            <p>
              I completed a <strong>6-month industrial software development training</strong> at AIML Services Pvt. Ltd., gaining hands-on experience in application engineering and database integration.
            </p>

            <p>
              I'm currently focused on <strong>Full Stack Development</strong>,
              while exploring <strong>
                Artificial Intelligence, Machine Learning, Data Science,
                and Data Structures &amp; Algorithms.
              </strong>
            </p>

            <p>
              I believe the best way to learn is by building. Through
              hands-on projects, I enjoy experimenting with technologies,
              solving problems, and turning ideas into working applications.
            </p>
          </div>

          <div className="about-cards">
            {highlights.map((item, index) => (
              <article
                className="about-card"
                key={item.title}
                style={{ "--card-index": index }}
              >
                <span className="about-card-icon">
                  {item.icon}
                </span>

                <div className="about-card-info">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
