import styled from "styled-components";
import viper from "../../img/viper-bg.jpg";
import jett from "../../img/jettmedia-bg.jpg";

export const Heros = styled.div`
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)),
      url(${viper});
    background-position: top;
    background-size: cover;
    height: calc(100vh - 91px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }
  p {
    color: #fff;
    display: flex;
    font-size: 1.6rem;
    margin-top: 10px;
    font-weight: 600;
  }
  h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    .hero {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
        url(${jett});
      background-position: top;

      background-size: cover;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
`;
