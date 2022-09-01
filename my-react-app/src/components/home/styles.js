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
  }
  @media (max-width: 768px) {
    .hero {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
        url(${jett});
      background-position: top;

      background-size: cover;
    }
  }
`;
