
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:karthikgodige7@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-layout">
          <div className="contact-content">
            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Have an idea?
              <br />
              Let's build something.
            </h2>

            <p className="contact-description">
              I'm open to internship opportunities, collaborations,
              interesting projects, and conversations about technology.
              Feel free to reach out.
            </p>

            <div className="contact-direct">
              <span className="contact-direct-label">
                FIND ME ONLINE
              </span>

              <a
                href="https://github.com/KarthikGodige"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/godige-karthik-b6353b368/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-heading">
                <h3>Send me a message</h3>
                <p>I'll be happy to hear from you.</p>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your idea..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Open email to send <span>↗</span>
              </button>

              <p className="contact-form-note">
                Your email application will open with your message ready.
              </p>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
