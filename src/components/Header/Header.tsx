import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export function Header() {
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Sumit "}</span>
          <span>{" Kushwaha/>"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
      </Router>
    </Container>
  )
}
