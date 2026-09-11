import { useEffect, useState } from 'react'
import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import emailIcon from '../../assets/email-icon.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const markReady = () => setReady(true)

    if (document.readyState === 'complete') {
      markReady()
      return
    }

    window.addEventListener('load', markReady, { once: true })

    return () => {
      window.removeEventListener('load', markReady)
    }
  }, [])

  return (
    <Container className={`footer ${ready ? 'footer-ready' : 'footer-hidden'}`}>
      <div className="footer-grid">
        <div className="footer-column">
          <p className="tagline">Let's build something together.</p>

          <div className="footer-actions">
            <span className="open-status">
              <span className="status-dot" aria-label="Available status" />
              <span className="status-text">Available for Full-Time Opportunities</span>
            </span>

            <a href="/SumitKushwahaResume.pdf" download className="button">
              Download Resume
            </a>
          </div>
        </div>

        <div className="social-media">
          <a
            className="social-link primary"
            href="https://www.linkedin.com/in/techsumitkushwaha"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
            <span className="social-label">LinkedIn</span>
          </a>
          {/* <a className="social-link secondary" href="mailto:acdtechsumit@gmail.com">
            <img src={emailIcon} alt="Email" />
            <span className="social-label">Email</span>
          </a> */}
          <a
            className="social-link primary"
            href="https://github.com/acdtechsumit"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
            <span className="social-label">GitHub</span>
          </a>
          <a
            className="social-link secondary"
            href="https://wa.me/919274047949"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
            <span className="social-label">WhatsApp</span>
          </a>
          {/* <a
            className="social-link secondary"
            href="https://t.me/+919274047949"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="Telegram" />
            <span className="social-label">Telegram</span>
          </a> */}
          <a
            className="social-link tertiary"
            href="https://www.instagram.com/nirmaldrashta/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
            <span className="social-label">Instagram</span>
          </a>
        </div>
      </div>

      <div className="copyright">
        © 2026 Sumit Kushwaha. All rights reserved.
      </div>
    </Container>
  )
}
