import styled from "styled-components";

export const DicasCss = styled.div`
  .container {
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
  }

  img {
    width: 900px;
    height: 500px;
    display: flex;

    justify-content: center;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    margin: 40px 0;
    font-size: 30px;
    color: #294821;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    align-items: center;
    word-spacing: 2px;
    padding-bottom: 100px;
    padding-top: 40px;
  }
  h2 {
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
  }
  @media (min-width: 0) and (max-width: 600px) {
    .container {
      width: 100%;
    }
    img {
      width: 100%;
      height: 350px;
    }
    p {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
