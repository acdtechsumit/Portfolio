import { Container } from "./styles"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation"
import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Sumit Kushwaha</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Java Full-Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Full-stack, AI automation, and cloud-native software</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <a href="/SumitKushwahaResume.pdf" download className="button">
            Resume
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/techsumitkushwaha"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/acdtechsumit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/919274047949"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a
              href="https://t.me/+919274047949"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
            <a
              href="https://www.instagram.com/nirmaldrashta/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Full stack engineering illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
