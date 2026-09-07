import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-highlights{
    margin: 0;
    padding-left: 2.4rem;
    list-style: disc;
  }

  .about-highlights li{
    padding-left: 0.6rem;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    line-height: 1.6;
    letter-spacing: 0.05rem;
    font-weight: 500;
  }

  .about-highlights li::marker{
    color: var(--green);
  }

  .education-item,
  .experience-item{
    padding: 1.4rem 0 1.6rem 1.6rem;
    border-left: 0.3rem solid var(--green);
  }

  .education-item + .education-item,
  .experience-item + .experience-item{
    margin-top: 1.4rem;
  }

  .education-item h4,
  .experience-item h4{
    margin: 0 0 0.8rem;
    line-height: 1.4;
  }

  .education-item p,
  .experience-item p{
    margin: 0.4rem 0;
  }
  
  

  .about-image{
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1;

    > div{
      width: min(42rem, 100%);
      height: auto;
      border-radius: 0;
      background: transparent;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img{
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: center top;
      border-radius: 0;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover{
        filter: grayscale(0);
      }
    }
  }

  .about-text{
    grid-column: 1;
    grid-row: 1;
  }

  .about-details{
    grid-column: 2;
    grid-row: 1;
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .about-details h3{
    margin-top: 0;
    margin-bottom: 1.4rem;
  }

  .about-details .education,
  .about-details .experience{
    width: 100%;
  }

  .toolkit{
    grid-column: 1 / -1;
    grid-row: 2;
    margin-top: 1rem;
    padding-top: 2.4rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.14);
    text-align: center;
  }

  .toolkit h3{
    margin-top: 0;
  }

  .toolkit .hard-skills{
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      > div{
        width: min(26rem, 78vw);
        height: min(26rem, 78vw);
        border-radius: 50%;
      }

      img{
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .about-details,
    .toolkit{
      margin-top: 4rem;
    }

    .about-details h3,
    .toolkit h3{
      margin-top: 0;
    }

    .toolkit{
      padding-top: 2rem;
    }

    .hard-skills{
      justify-content: center;
    }

    .about-image{
      display: flex;
      justify-content: center;
      max-width: 100%;
      margin-bottom: 5rem;
    }

    .about-text,
    .about-image{
      grid-column: auto;
      grid-row: auto;
    }
  }
`
