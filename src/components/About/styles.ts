import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  h2 {
    display: inline-block;
    margin: 0 0 2rem;
    font-size: 3rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-highlights {
    margin: 0;
    padding-left: 2.4rem;
    list-style: disc;
  }

  .about-highlights li {
    padding-left: 0.6rem;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    line-height: 1.6;
    letter-spacing: 0.05rem;
    font-weight: 500;
  }

  .about-highlights li::marker {
    color: var(--green);
  }

  .education-item,
  .experience-item {
    padding: 1.4rem 0 1.6rem 1.6rem;
    border-left: 0.3rem solid var(--green);
  }

  .education-item + .education-item,
  .experience-item + .experience-item {
    margin-top: 1.4rem;
  }

  .education-item h4,
  .experience-item h4 {
    margin: 0 0 0.8rem;
    line-height: 1.4;
  }

  .education-item p,
  .experience-item p {
    margin: 0.4rem 0;
  }

  .about-text {
    grid-column: 1;
    grid-row: 1;
  }

  .about-details {
    grid-column: 2;
    grid-row: 1;
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .about-details h3 {
    margin-top: 0;
    margin-bottom: 1.4rem;
  }

  .about-details .education,
  .about-details .experience {
    width: 100%;
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-details {
      margin-top: 4rem;
    }

    .about-details h3 {
      margin-top: 0;
    }

    .about-text,
    .about-image {
      grid-column: auto;
      grid-row: auto;
    }
  }
`
