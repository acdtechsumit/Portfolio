import { Container } from "./styles"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation"
import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import java from '../../assets/java.svg'
import springBoot from '../../assets/spring-boot.svg'
import reactIcon from '../../assets/react-icon.svg'
import jsIcon from '../../assets/js-icon.svg'
import nodeIcon from '../../assets/node-icon.svg'
import mongodb from '../../assets/mongodb.svg'
import docker from '../../assets/docker.svg'
import maven from '../../assets/maven.svg'
import postman from '../../assets/postman.svg'
import aws from '../../assets/aws.svg'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <div className="hero-intro">
          <ScrollAnimation animateIn="fadeInUp">
            <p className="hello-text">Hello, I'm</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1>Sumit Kushwaha</h1>
          </ScrollAnimation>
        </div>

        <div className="hero-profile">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <div className="role-card">
              <span className="label">Profile</span>
              <h3>Java Full-Stack Developer</h3>
              <p className="small-resume">Java, Spring, REST APIs, React, and cloud-ready software delivery</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <div className="technology-block">
            <span className="toolkit-title">Technology Stack</span>
            <div className="toolkit-icons">
              <img src={java} alt="Java" />
              <img src={springBoot} alt="Spring Boot" />
              <img src={reactIcon} alt="React" />
              <img src={jsIcon} alt="JavaScript" />
              <img src={nodeIcon} alt="Node.js" />
              <img src={mongodb} alt="MongoDB" />
              <img src={docker} alt="Docker" />
              <img src={maven} alt="Maven" />
              <img src={postman} alt="Postman" />
              <img src={aws} alt="AWS" />
            </div>
          </div>
        </ScrollAnimation>

        <div className="hero-actions">
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
            <a href="https://kushwahasumit.vercel.app/SumitKushwahaResume.pdf" target="_blank" rel="noreferrer" className="button">
              Resume
            </a>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/techsumitkushwaha" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/acdtechsumit" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://wa.me/919274047949" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="https://t.me/+919274047949" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="https://www.instagram.com/nirmaldrashta/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Full stack engineering illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
