import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export function AgentesLista(props) {
  return (
    <li>
      <h2>{props.agente.nome}</h2>
      <AwesomeSlider className="container-slide">
        <div data-src={props.agente.slide1} />
        <div data-src={props.agente.slide2} />
        <div data-src={props.agente.slide3} />
      </AwesomeSlider>
      <br />
      <br />
      <br />
      );
      <h4 className="titulo-skill">{props.agente.skillnameq}</h4>
      <video
        width="100%"
        height="100%"
        src={props.agente.videoq}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skillq}</p>
      <h4 className="titulo-skill">{props.agente.skillnamee}</h4>
      <video
        width="100%"
        height="100%"
        src={props.agente.videoe}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skille}</p>
      <h4 className="titulo-skill">{props.agente.skillnamec}</h4>
      <video
        width="100%"
        height="100%"
        src={props.agente.videoc}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skillc}</p>
      <h4 className="titulo-skill">{props.agente.skillnamex}</h4>
      <video
        width="100%"
        height="100%"
        src={props.agente.videox}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skillx}</p>
    </li>
  );
}
