import styled from "styled-components";

export const Agente = styled.div`
  .container {
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
  }
  .container-slide {
    width: 800px;
    height: 450px;
    margin: 0 auto;
  }
  video {
    margin-left: 350px;

    width: 800px;
    height: 450px;
  }
  h1 {
    color: #d14334;
    text-transform: uppercase;
    font-size: 1.6rem;
  }
  li h2 {
    color: #2e4f24;
    text-align: center;
    padding: 10px;
    margin: 40px 0;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    align-items: center;
    word-spacing: 2px;
    padding-top: 20px;
    text-align: center;
  }
  h1 {
    text-align: center;
    margin-top: 100px;
  }
  .titulo-skill {
    color: 000;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .texto-alinhamento {
    padding-bottom: 100px;
    font-weight: 500;
    width: 50%;
    margin: 0 auto;
  }
  .img-agente {
    width: 850px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  @media (min-width: 0) and (max-width: 800px) {
    .container {
      width: 100%;
    }
    p {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      padding-top: 19px;
    }
    video {
      width: 100%;
      height: 350px;
      margin: 0;
      padding-top: 20px;
    }
    .texto-alinhamento {
      padding-bottom: 80px;
      width: 95%;
    }
    .container-slide {
      width: 100%;
      height: 300px;
      margin: 0 auto;
      display: block;
    }
  }
`;
