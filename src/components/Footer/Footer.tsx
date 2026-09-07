import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Built with React, TypeScript, and Vite <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
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
    </Container>
  )
}
