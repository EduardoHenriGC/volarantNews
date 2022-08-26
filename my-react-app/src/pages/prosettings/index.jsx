import React from "react";
import { Prosetting } from "./styles";
import Prolist from "./prolista";
import Footer from "../../components/footer";

const pro = [
  {
    nome: "sacy",
    time: "LOUD",
    sensi: "0,4 800DPI",
    idade: "24",
    mira: "4,2,2,2 Outer Lines",
    país: "BRASIL",
    img: "https://pbs.twimg.com/media/FPwlYYxXoAUOFta.jpg:large",
  },
  {
    nome: "tenz",
    time: "SENTINELS",
    sensi: "0,3 800DPI",
    idade: "21",
    mira: "1,6,2,3 Inner Lines",
    país: "CANADÁ",
    img: "https://arena.rtp.pt/wp-content/uploads/2021/06/sentinels_tenz_vct.jpg",
  },
  {
    nome: "mwzera",
    time: "VIVO KEYD",
    sensi: "0,45 800DPI",
    idade: "21",
    mira: "1,4,2,2 Inner Lines",
    país: "BRASIL",
    img: "https://a.espncdn.com/photo/2020/1222/r793562_1296x729_16-9.jpg",
  },
];

const Lista = pro.map((c) => <Prolist pro={c} />);
const ProSettings = () => {
  return (
    <Prosetting id="pro">
      <hr />
      <h2>Pro Settings</h2>
      <ul>{Lista}</ul>

      <Footer />
    </Prosetting>
  );
};

export default ProSettings;
