import styled from "styled-components";

export const Agente = styled.div`
  .container {
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
  }
  iframe {
    margin-left: 290px;
    margin-bottom: 100px;
    margin-top: 100px;
    width: 700px;
    height: 400px;
  }
  h2 {
    background-color: #294821;
    color: #fff;
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
  }
  h1 {
    text-align: center;
    margin-top: 100px;
  }
  @media (min-width: 0) and (max-width: 600px) {
    .container {
      width: 100%;
    }
    p {
      width: 90%;
      margin: 0 auto;
    }
    iframe {
      width: 100%;
      height: 350px;
      margin: 0;
      padding-top: 20px;
    }
  }
`;
