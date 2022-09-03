import styled from "styled-components";

export const HoverMe = styled.div`
  a {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    color: #03e9f4;
    padding: 12px 30px;
    margin: 40px 20px;

    font-size: 22px;
    letter-spacing: 4px;
    transition: 0.5s;
    overflow: hidden;
    -webkit-box-reflect: below 0.3px linear-gradient(transparent, #0005);
  }
  a:nth-child(1) {
    filter: hue-rotate(80deg);
  }
  a:nth-child(2) {
    filter: hue-rotate(40deg);
  }
  a:hover {
    background-color: #03e9f4;
    color: #fff;
    font-weight: 600;

    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
  a span {
    position: absolute;
    display: block;
  }
  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: round1 0.8s linear infinite;
  }
  @keyframes round1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  a span:nth-child(2) {
    right: 0;
    top: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: round2 0.8s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes round2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: round3 0.8s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes round3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
  a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: round4 0.8s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes round4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
