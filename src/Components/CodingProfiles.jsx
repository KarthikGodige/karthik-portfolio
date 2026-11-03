import linkedinImg from "../assets/linkedin.jpg";

const profiles = [
  {
    number: "01",
    name: "GitHub",
    description: "My projects, repositories, development work, and coding experiments.",
    link: "https://github.com/KarthikGodige",
    available: true,
  },
  {
    number: "02",
    name: "LinkedIn",
    description: "Professional updates, career background, and public engineering profile.",
    link: "https://www.linkedin.com/in/godige-karthik-b6353b368/",
    available: true,
  },
  {
    number: "03",
    name: "LeetCode",
    description: "DSA practice, algorithmic problem solving, and coding practice.",
    link: "https://github.com/KarthikGodige",
    available: true,
  },
  {
    number: "04",
    name: "GeeksforGeeks",
    description: "Data structures, algorithms, and technical concepts practice.",
    link: "https://github.com/KarthikGodige",
    available: true,
  },
];

function CodingProfiles() {
  return (
    <section id="coding-profiles" className="coding-profiles-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">CODING &amp; COMMUNITY</p>
          <h2>Where I build and practice.</h2>
          <p>
            Follow my development work and problem-solving journey across platforms.
          </p>
        </div>

        <div className="coding-profiles-grid">
          {profiles.map((profile) => (
            <article className="coding-profile-card interactive-card" key={profile.name}>
              <div className="coding-profile-top">
                <span className="coding-profile-number">{profile.number}</span>
                <span className="coding-profile-status is-available">Available</span>
              </div>

              <div className="coding-profile-identity">
                <div className={`coding-profile-logo ${profile.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  {profile.name === "GitHub" && (
                    <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub logo" />
                  )}
                  {profile.name === "LinkedIn" && (
                    <img
                      src={linkedinImg}
                      alt="LinkedIn"
                      className="linkedin-uploaded-pic"
                    />
                  )}
                  {profile.name === "LeetCode" && (
                    <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode logo" />
                  )}
                  {profile.name === "GeeksforGeeks" && (
                    <img src="https://cdn.simpleicons.org/geeksforgeeks/2F8D46" alt="GeeksforGeeks logo" />
                  )}
                </div>

                <h3>{profile.name}</h3>
              </div>

              <p className="coding-profile-description">{profile.description}</p>

              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="coding-profile-link"
              >
                Visit profile <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
