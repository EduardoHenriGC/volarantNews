import styled from "styled-components";

export const Patchs = styled.div`
  .patch-section {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  .patch-section h2 {
    text-align: center;
    padding-top: 100px;
    margin-bottom: 100px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #d14334;
  }
  .texto {
    width: 90%;
    margin: 0 auto;

    font-size: 1.3rem;
    font-weight: 500;
    align-items: center;
    word-spacing: 2px;
    padding-top: 20px;
  }
  .img-container {
    margin: 0 auto;
    width: 100%;
    height: 500px;
  }
  h3 {
    color: #000;
    text-align: center;
    font-size: 1.4rem;
    padding-top: 100px;
    padding-bottom: 30px;
  }
  .img-content {
    margin: 0 auto;
    width: 100%;
  }

  .patch-section h4 {
    color: #00755c;
    font-weight: 600;

    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 0) and (max-width: 900px) {
    .patch-section {
      width: 100%;
    }
    .patch-section h2 {
      margin-top: 100px;
      padding: 0;
      font-size: 22px;
    }
    .img-container {
      width: 100%;
      height: 270px;
    }
    .img-content {
      width: 100%;
    }
    .patch-section span {
      text-align: center;
    }
    p {
      text-align: center;
      padding-top: 30px;
    }
    .patch-section h4 {
      text-align: center;
    }
    h3 {
      padding-bottom: 10px;
    }
  }
`;
