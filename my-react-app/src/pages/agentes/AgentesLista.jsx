import React from "react";

export function AgentesLista(props) {
  return (
    <li>
      <h2>{props.agente.nome}</h2>

      <p className="titulo-skill">{props.agente.skillnameq}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videoq}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="texto-alinhamento">{props.agente.skillq}</p>

      <p className="titulo-skill">{props.agente.skillnamee}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videoe}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="texto-alinhamento">{props.agente.skille}</p>

      <p className="titulo-skill">{props.agente.skillnamec}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videoc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="texto-alinhamento">{props.agente.skillc}</p>

      <p className="titulo-skill">{props.agente.skillnamex}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videox}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="texto-alinhamento">{props.agente.skillx}</p>
    </li>
  );
}
