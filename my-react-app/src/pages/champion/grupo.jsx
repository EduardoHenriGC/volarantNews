import React from "react";

const Grupo = (props) => {
  return (
    <div className="container">
      <h2 className="titulo-grupo">{props.times.grupo}</h2>
      <ul className="ul-container">
        <li className="list-bord">
          <div className="grupo-linha">
            <img className="logo" src={props.times.img1} alt="" />
            <span>{props.times.time1}</span>
          </div>
        </li>
        <li className="list-bord">
          <div className="grupo-linha">
            <img className="logo" src={props.times.img2} alt="" />
            <span>{props.times.time2}</span>
          </div>
        </li>
        <li className="list-bord">
          <div className="grupo-linha">
            <img className="logo" src={props.times.img3} alt="" />
            <span>{props.times.time3}</span>
          </div>
        </li>
        <li className="list-bord">
          <div className="grupo-linha">
            <img className="logo" src={props.times.img4} alt="" />
            <span>{props.times.time4}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Grupo;
