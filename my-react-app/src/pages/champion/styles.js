import styled from "styled-components";

export const Champ = styled.div`
  .nfl {
    width: 70%;
    display: flex;
    margin: 0 auto;
  }
  .container {
    width: 380px;
    height: 400px;
    margin: 5px;
    display: flex;
    flex-direction: column;
  }

  h2 {
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    margin-top: 60px;
    padding-bottom: 20px;
    color: #d14334;
  }
  h4 {
    color: #000;
    text-align: center;
    text-transform: uppercase;
    margin-top: 40px;
    padding-bottom: 10px;
    font-size: 1.5rem;
  }

  .ul-container {
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
  ul {
    text-align: center;
    margin: 0 auto;
  }

  .list-size {
    font-size: 1.3rem;
    font-weight: 500;
  }
  .info-champ {
    margin-top: 100px;
    margin-bottom: 60px;
  }
  .list-bord {
    border: 3px solid #aaa;
    width: 350px;
    text-align: center;
    margin: 0 auto;
    padding: 14px;
    font-size: 24px;
    margin-top: 5px;
    font-weight: bold;
    background-color: #00755c;
  }

  .list-bord a {
    color: #fff;
  }
  .titulo-grupo {
    text-align: center;
    color: #000;
  }
  @media (min-width: 0) and (max-width: 900px) {
    .nfl {
      flex-direction: column;
      width: 100%;
    }
    .container {
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0;
    }
    .list-bord {
      font-size: 16px;
    }
  }
`;
