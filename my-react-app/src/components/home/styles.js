import styled from "styled-components";
import viper from "../../img/viper-bg.jpg";

export const Heros = styled.div`
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
      url(${viper});
    background-position: top;
    background-size: cover;
    height: calc(100vh - 91px);
    width: 100%;
  }
`;
