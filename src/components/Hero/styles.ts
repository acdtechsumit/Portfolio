import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  background: rgba(0, 0, 0, 0);

  .hero-text {
    width: min(780px, 50vw);
  }

  .hero-intro {
    border-left: 0.3rem solid var(--green);
    padding-left: 1.6rem;
    margin-bottom: 1.6rem;
  }

  .hello-text {
    font-size: 2rem;
    font-weight: 700;
    color: #d9fff0;
    margin-bottom: 1.2rem;
  }

  h1 {
    font-size: clamp(6.2rem, 6vw, 8rem);
    line-height: 1.08;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.05em;
  }

  .hero-profile {
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    margin: 1.8rem 0 2.2rem;
  }

  .role-card {
    padding: 0;
    border-radius: 0;
    border: none;
    background: transparent;
    border-left: 0.4rem solid var(--green);
    max-width: 700px;
    padding-left: 1.6rem;
  }

  .label {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18rem;
    color: var(--green);
    margin-bottom: 0.8rem;
  }

  .role-card h3 {
    margin: 0 0 0.8rem;
    font-size: 2.6rem;
    line-height: 1.3;
    color: var(--green);
  }

  .role-card .small-resume {
    margin: 0;
    color: #e8eef4;
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.55;
    letter-spacing: 0.04rem;
  }

  .technology-block {
    margin: 1rem 0 2rem;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
  }

  .toolkit-title {
    display: inline-block;
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1.3;
    color: var(--green);
    margin-bottom: 1rem;
  }

  .toolkit-icons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    min-height: 4rem;

    img {
      width: 3.2rem;
      height: 3.2rem;
      object-fit: contain;
      padding: 0.4rem;
      border-radius: 0.8rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.05);
      filter: drop-shadow(0 0 0.4rem rgba(120, 255, 200, 0.35));
    }
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
  }

  .button {
    position: relative;
    overflow: visible;
    padding: 1.2rem 4rem;
    border-radius: 1.4rem;
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--green), #1d8f59);
    color: #00120d;
    box-shadow: 0 0 20px rgba(35, 206, 107, 0.3);
    transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
  }

  .button::before,
  .button::after {
    content: "";
    position: absolute;
    inset: -0.4rem;
    border-radius: 1.4rem;
    border: 1px solid var(--green);
  }

  .button::before {
    animation: loopOne 1.8s linear infinite;
  }

  .button::after {
    inset: -0.8rem;
    border-color: rgba(35, 206, 107, 0.9);
    filter: blur(0.4rem);
    animation: loopTwo 1.8s linear infinite;
  }

  .button:hover {
    transform: translateY(-0.4rem) scale(1.03);
    filter: brightness(1.12);
    box-shadow: 0 0 34px rgba(35, 206, 107, 0.58);
  }

  @keyframes loopOne {
    0% {
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(35, 206, 107, 0.8);
    }
    70% {
      opacity: 0.6;
      transform: scale(1.025);
      box-shadow: 0 0 0 0.8rem rgba(35, 206, 107, 0);
    }
    100% {
      opacity: 0;
      transform: scale(1.05);
      box-shadow: 0 0 0 1.2rem rgba(35, 206, 107, 0);
    }
  }

  @keyframes loopTwo {
    0% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.03);
    }
    100% {
      opacity: 0;
      transform: scale(1.06);
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

      &:hover {
        transform: translateY(-0.3rem);
        background: rgba(35, 206, 107, 0.12);
        border-color: var(--green);
      }
    }

    img,
    span {
      width: 2.6rem;
      height: 2.6rem;
      object-fit: contain;
    }
  }

  .hero-image {
    flex: 0 0 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 500px;
      width: min(42vw, 500px);
      filter: drop-shadow(0 0 40px rgba(35,206,107,0.16));
    }
  }

  @media (max-width: 960px) {
    display: block;
    padding-top: 10rem;
    padding-bottom: 7rem;

    .hero-text {
      width: 100%;
    }

    h1 {
      font-size: clamp(4.8rem, 11vw, 7rem);
    }

    .hero-profile {
      flex-direction: column;
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    padding-top: 8rem;
    padding-bottom: 5rem;

    .hero-actions {
      align-items: flex-start;
      flex-direction: column;
      gap: 2.8rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16rem;
      margin-bottom: 0.2rem;
    }

    .social-media {
      gap: 1.2rem;
      padding-top: 0.2rem;
    }
  }

  @media (max-width: 480px) {
    padding-top: 7rem;
    padding-bottom: 4rem;
  }
`