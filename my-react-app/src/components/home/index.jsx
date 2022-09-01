import React from "react";
import ButtonHome from "../buttonHome";
import { Heros } from "./styles";

const Hero = () => {
  return (
    <Heros>
      <hr />
      <section className="hero">
        <h1>we are valorant</h1>
        <p>notícias, dicas e muito ++</p>
        <ButtonHome />
      </section>
    </Heros>
  );
};

export default Hero;
