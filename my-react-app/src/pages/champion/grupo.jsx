import React from "react";

const Grupo = (props) => {
  return (
    <div className="container">
      <h2 className="titulo-grupo">{props.times.grupo}</h2>
      <ul className="ul-container">
        <li className="list-bord">
          <a href="">{props.times.time1}</a>
        </li>
        <li className="list-bord">
          <a href="">{props.times.time2}</a>
        </li>
        <li className="list-bord">
          <a href="">{props.times.time3}</a>
        </li>
        <li className="list-bord">
          <a href="">{props.times.time4}</a>
        </li>
      </ul>
    </div>
  );
};

export default Grupo;
