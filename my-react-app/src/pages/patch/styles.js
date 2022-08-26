import styled from "styled-components";

export const Patchs = styled.div`
  .patch-section {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  .patch-section h2 {
    text-align: center;
    padding-top: 200px;
    margin-bottom: 100px;
    font-size: 28px;
    font-weight: 600;
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
    width: 1400px;
    height: 500px;
  }
  .img-content {
    margin: 0 auto;
    width: 1400px;

    margin-top: 50px;
  }
  .patch-section h4 {
    text-align: center;
    color: #2e4f24;
    font-weight: 600;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 0) and (max-width: 600px) {
    .patch-section {
      width: 100%;
    }
    .img-container {
      width: 100%;
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
  }
`;
