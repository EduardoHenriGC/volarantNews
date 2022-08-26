import React from "react";
import { Button } from "@mui/material";

const Prolist = (props) => {
  return (
    <li className="list">
      <div>
        <img src={props.pro.img} alt="" />
      </div>
      <div className="list-content">
        <p>NICK: {props.pro.nome}</p>
        <p>IDADE: {props.pro.idade}</p>
        <p>TIME: {props.pro.time}</p>
        <p>SENSIBILIDADE: {props.pro.sensi}</p>
        <p>MIRA: {props.pro.mira}</p>
        <p>PAÍS: {props.pro.país}</p>
      </div>
    </li>
  );
};

export default Prolist;
