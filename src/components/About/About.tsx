import { Container } from "./styles";
import java from "../../assets/java.svg"
import maven from "../../assets/maven.svg";
import springBoot from "../../assets/spring-boot.svg";
import aws from "../../assets/aws.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongodb from "../../assets/mongodb.svg";
import docker from "../../assets/docker.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import postman from "../../assets/postman.svg";

export function About() {
  return (
    <Container id="about">
      
      <div className="about-text">
        <h2>About me</h2>
        <ul className="about-highlights">
          <li>I am a Computer Engineer who enjoys turning a rough idea into a useful, working product.</li>
          <li>My strongest interest is building secure, production-style applications from the backend to the frontend.</li>
          <li>I work with Spring Boot, Spring MVC, Spring Security, React, Bootstrap, REST APIs and Hibernate/JPA.</li>
          <li>I enjoy understanding how every part of an application connects, from database design and APIs to a clean user experience.</li>
          <li>I am comfortable owning the complete delivery journey with Git, Maven, Jenkins, Docker and Postman, using AWS (EC2, S3) and Linux.</li>
          <li>I am a fast learner, a curious problem-solver and someone who enjoys exploring new technologies through hands-on projects.</li>
          <li>My goal is to grow as a full-stack software professional while creating reliable solutions that make a meaningful difference.</li>
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
            <p>15 January 2026 - 15 May 2026</p>
          </div>
          <div className="experience-item">
            <h4>Web Design Intern (MERN Stack) - BrainyBeam Info-Tech Pvt. Ltd., Ahmedabad</h4>
            <p>10 June 2025 - 9 July 2025 (30 Days)</p>
          </div>
        </div>

      </div>

      <div className="toolkit">
        <h3>My Core Toolkit</h3>
        <div className="hard-skills">
          <div className="hability">
            <img src={java} alt="java" />
          </div>
          <div className="hability">
            <img src={springBoot} alt="Spring Boot" />
          </div>
          <div className="hability">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability">
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <div className="hability">
            <img src={nodeIcon} alt="Node.js" />
          </div>
          <div className="hability">
            <img src={mongodb} alt="MongoDB" />
          </div>
          <div className="hability">
            <img src={mysqlIcon} alt="MySQL" />
          </div>
          <div className="hability">
            <img src={docker} alt="Docker " />
          </div>
          <div className="hability">
            <img src={maven} alt="maven" />
          </div>
          <div className="hability">
            <img src={postman} alt="Postman" />
          </div>
          <div className="hability">
            <img src={aws} alt="AWS" />
          </div>
        </div>
      </div>
    </Container>
  )
}
