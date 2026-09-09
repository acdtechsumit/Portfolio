import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <ul className="about-highlights">
          <li>I am a Computer Engineer focused on transforming ideas into practical, reliable software products.</li>
          <li>I enjoy building applications that connect secure backend systems, structured data models, and polished frontend experiences.</li>
          <li>My work spans Spring Boot, Spring MVC, Spring Security, React, REST APIs, Hibernate/JPA, and modern software delivery.</li>
          <li>I value a complete understanding of the software lifecycle, from database design and API development to deployment and maintenance.</li>
          <li>I work confidently with Git, Maven, Jenkins, Docker, Postman, AWS services, and Linux environments.</li>
          <li>I am a fast learner, a thoughtful problem-solver, and a hands-on builder committed to continuous improvement.</li>
        </ul>
      </div>

      <div className="about-details">
        <div className="education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Diploma - Computer Engineering</h4>
            <p>T. F. Gandhidham Polytechnic, Adipur - Gujarat Technological University</p>
            <p>CGPA: 7.64</p>
          </div>
          <div className="education-item">
            <h4>Bachelor of Technology - Computer Engineering</h4>
            <p>Gandhinagar Institute of Technology, Gandhinagar University</p>
            <p>CGPA: 7.98</p>
          </div>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Software Intern - AutomizePlus Software, Gandhidham</h4>
            <p>January 2026 - May 2026</p>
          </div>
          <div className="experience-item">
            <h4>Web Design Intern (MERN Stack) - BrainyBeam Info-Tech Pvt. Ltd., Ahmedabad</h4>
            <p>June 2025 - July 2025</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
