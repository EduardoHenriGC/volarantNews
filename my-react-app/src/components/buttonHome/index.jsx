import React from "react";
import { HoverMe } from "./styles";
import { Link } from "react-router-dom";

const ButtonHome = () => {
  return (
    <HoverMe>
      <Link to="../dicas">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        dicas
      </Link>
      <Link to="../patch">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        patch
      </Link>
    </HoverMe>
  );
};

export default ButtonHome;
