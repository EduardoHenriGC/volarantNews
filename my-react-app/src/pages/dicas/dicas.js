import styled from "styled-components";

export const DicasCss = styled.div`
  .container {
    width: 60%;
    margin: 0 auto;
    margin-top: 100px;
  }

  img {
    width: 700px;
    height: 450px;
    display: flex;
    align-items: center;

    justify-content: center;
    margin: 0 auto;
  }
  h2 {
    color: red;
  }
  h3 {
    text-align: center;
    margin: 40px 0;
    font-size: 30px;
    color: #000;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    align-items: center;
    word-spacing: 2px;
    padding-bottom: 100px;
    padding-top: 40px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
  @media (min-width: 0) and (max-width: 900px) {
    .container {
      width: 100%;
    }
    img {
      width: 100%;
      height: 270px;
    }
    p {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
