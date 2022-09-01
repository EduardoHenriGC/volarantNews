import React from "react";

export function AgentesLista(props) {
  return (
    <li>
      <h2>{props.agente.nome}</h2>

      <p className="titulo-skill">{props.agente.skillnameq}</p>
      <video
        width="100%"
        height="100%"
        src={props.agente.videoq}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skillq}</p>

      <p className="titulo-skill">{props.agente.skillnamee}</p>
      <video
        width="100%"
        height="100%"
        src={props.agente.videoe}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skille}</p>

      <p className="titulo-skill">{props.agente.skillnamec}</p>
      <video
        width="100%"
        height="100%"
        src={props.agente.videoc}
        controls
        autoplay
      ></video>
      <p className="texto-alinhamento">{props.agente.skillc}</p>

      <p className="titulo-skill">{props.agente.skillnamex}</p>
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
