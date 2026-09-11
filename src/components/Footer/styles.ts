import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &.footer-hidden {
    display: none;
  }

  &.footer-ready {
    display: flex;
  }

  .logo {
    font-size: 2.8rem;
  }

  .footer-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    flex: 1 1 58%;
  }

  .tagline {
    margin: 0;
    color: #dce3dd;
    font-size: clamp(2.4rem, 2vw, 3.2rem);
    line-height: 1.4;
    font-weight: 800;
    letter-spacing: 0.08rem;
    max-width: 46rem;
  }

  .footer-actions {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .open-status {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.4rem;
    border-left: 2px solid var(--green);
    background: rgba(35, 206, 107, 0.05);
    color: var(--green);
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.08rem;
    white-space: nowrap;
  }

  .status-dot {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: var(--green);
    box-shadow: 0 0 0 0.2rem rgba(35, 206, 107, 0.16);
    animation: pulseDot 1.8s infinite;
  }

  .status-text {
    color: #dce3dd;
    font-size: 1.2rem;
  }

  .button {
    position: relative;
    overflow: hidden;
    padding: 1rem 2.4rem;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    font-weight: 800;
    background: var(--green);
    color: #07180f;
    border: 1px solid var(--green);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.08rem;
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .button:hover {
    transform: translateY(-0.2rem);
    background: transparent;
    color: var(--green);
    border-color: var(--green);
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    flex-wrap: wrap;
    flex: 1 1 36%;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #b7bcb7;
      border-bottom: 1px solid transparent;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.08rem;
      transition: color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
      opacity: 0.88;

      &:hover {
        color: var(--green);
        border-color: var(--green);
        opacity: 1;
      }
    }

    .social-link {
      min-height: 3rem;
      padding: 0.3rem 0;
    }

    .primary {
      img {
        width: 2.8rem;
        height: 2.8rem;
      }

      .social-label {
        font-size: 1.4rem;
      }
    }

    .secondary {
      img {
        width: 2.4rem;
        height: 2.4rem;
      }

      .social-label {
        font-size: 1.3rem;
      }
    }

    .tertiary {
      img {
        width: 2.2rem;
        height: 2.2rem;
      }

      .social-label {
        font-size: 1.2rem;
      }
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
      object-fit: contain;
      filter: drop-shadow(0 0 0.2rem rgba(35, 206, 107, 0.2));
    }
  }

  .copyright {
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #aeb4af;
    letter-spacing: 0.08rem;
    text-align: center;
  }

  @keyframes pulseDot {
    50% {
      box-shadow: 0 0 0 0.4rem rgba(35, 206, 107, 0.14);
    }
  }

  @media (max-width: 900px) {
    padding: 3rem 4rem;

    .footer-grid {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    .footer-column,
    .social-media {
      width: 100%;
      flex: 1 1 auto;
    }

    .social-media {
      justify-content: flex-start;
    }
  }

  @media (max-width: 600px) {
    padding: 3rem 1.8rem;

    .tagline {
      font-size: 1.8rem;
    }

    .footer-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .open-status {
      font-size: 1.2rem;
      padding: 0.7rem 1.2rem;
      white-space: normal;
    }

    .button {
      font-size: 1.4rem;
      padding: 1rem 2.5rem;
      width: 100%;
    }

    .social-media {
      gap: 1rem;
      width: 100%;
      justify-content: center;

      a {
        width: auto;
        height: auto;
      }
    }
  }
`;
