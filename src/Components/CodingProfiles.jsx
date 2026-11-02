
const profiles = [
  {
    number: "01",
    name: "GitHub",
    shortName: "GH",
    description:
      "My projects, repositories, development work, and coding experiments.",
    link: "https://github.com/KarthikGodige",
    available: true,
  },
  {
    number: "02",
    name: "LeetCode",
    shortName: "LC",
    description:
      "DSA practice, algorithmic problem solving, and interview preparation.",
    link: "",
    available: false,
  },
  {
    number: "03",
    name: "CodeChef",
    shortName: "CC",
    description:
      "Competitive programming and coding challenges.",
    link: "",
    available: false,
  },
  {
    number: "04",
    name: "GeeksforGeeks",
    shortName: "GFG",
    description:
      "Data structures, algorithms, and technical learning.",
    link: "",
    available: false,
  },
  {
    number: "05",
    name: "HackerRank",
    shortName: "HR",
    description:
      "Programming exercises and technical skill development.",
    link: "",
    available: false,
  },
];

function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="coding-profiles-section"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">CODING & COMMUNITY</p>
          <h2>Where I build and practice.</h2>
          <p>
            Follow my development work and problem-solving journey
            across coding platforms.
          </p>
        </div>

        <div className="coding-profiles-grid">
          {profiles.map((profile) => (
            <article
              className="coding-profile-card"
              key={profile.name}
            >
              <div className="coding-profile-top">
                <span className="coding-profile-number">
                  {profile.number}
                </span>

                <span
                  className={`coding-profile-status ${
                    profile.available ? "is-available" : ""
                  }`}
                >
                  {profile.available ? "Available" : "Coming soon"}
                </span>
              </div>

             
<div className="coding-profile-identity">
  <div className={`coding-profile-logo ${profile.name.toLowerCase().replace(/\s+/g, "-")}`}>
    {profile.name === "GitHub" && (
      <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub logo" />
    )}

    {profile.name === "LeetCode" && (
      <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode logo" />
    )}

    {profile.name === "CodeChef" && (
      <img src="https://cdn.simpleicons.org/codechef/5B4638" alt="CodeChef logo" />
    )}

    {profile.name === "GeeksforGeeks" && (
      <img src="https://cdn.simpleicons.org/geeksforgeeks/2F8D46" alt="GeeksforGeeks logo" />
    )}

    {profile.name === "HackerRank" && (
      <img src="https://cdn.simpleicons.org/hackerrank/00EA64" alt="HackerRank logo" />
    )}
  </div>

  <h3>{profile.name}</h3>
</div>


              <p className="coding-profile-description">
                {profile.description}
              </p>

              {profile.available ? (
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding-profile-link"
                >
                  Visit profile <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="coding-profile-disabled">
                  Profile link to be added
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
