import React from "react";

export function AgentesLista(props) {
  return (
    <li>
      <h2>{props.agente.nome}</h2>
      <p>{props.agente.skillq}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videoq}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{props.agente.skille}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videoe}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{props.agente.skillc}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videoc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{props.agente.skillx}</p>
      <iframe
        width="100%"
        height="100%"
        src={props.agente.videox}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </li>
  );
}
