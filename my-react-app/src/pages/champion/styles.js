import styled from "styled-components";

export const Champ = styled.div`
  .nfl {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }
  .container {
    width: 380px;
    height: 400px;
    margin: 5px;
    display: flex;
    flex-direction: column;
  }
  .grupo-linha {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 45px;
    height: 40px;

    float: left;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
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
    flex-wrap: wrap;

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

    margin: 0 auto;

    font-size: 20px;
    padding: 15px;

    font-weight: bold;
    background-color: #00755c;
  }

  .list-bord span {
    color: #fff;
    text-align: center;
  }
  .titulo-grupo {
    text-align: center;
    color: #000;
  }
  span {
    text-align: center;
    margin: 0 auto;
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
