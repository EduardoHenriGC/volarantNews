import React from "react";
import { HoverMe } from "./styles";
import { NavLink, Link } from "react-router-dom";

const ButtonHome = () => {
  return (
    <HoverMe>
      <a href="/dicas" to="dicas">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        dicas
      </a>
      <a href="/patch">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        patch
      </a>
    </HoverMe>
  );
};

export default ButtonHome;
