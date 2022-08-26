import React from "react";
import { Champ } from "./styles";
import Grupo from "./grupo";
import Footer from "../../components/footer";

const times = [
  {
    grupo: "A",
    time1: "Paper Rex",
    time2: "EDward Gaming",
    time3: "Leviatán",
    time4: "Team Liquid",
  },
  {
    grupo: "B",
    time1: "OpTic Gaming",
    time2: "BOOM Esports",
    time3: "ZETA DIVISION",
    time4: "LOUD",
  },
  {
    grupo: "C",
    time1: "FunPlus Phoenix",
    time2: "KRU Esports",
    time3: "xset",
    time4: "XERXIA",
  },
  {
    grupo: "D",
    time1: "DRX",
    time2: "FURIA Esports",
    time3: "Fnatic",
    time4: "100 Thieves",
  },
];
const Champion = () => {
  return (
    <Champ id="champion">
      <hr />
      <section className="info-champ">
        <h1>VALORANT Champions 2022</h1>

        <h4>data</h4>
        <ul>
          <li className="list-size">inicio: sexta-feira , 2 de setembro</li>
          <li className="list-size">até: domingo , 18 de setembro</li>
        </ul>

        <h4>formato</h4>
        <ul>
          <li className="list-size">Eliminação dupla</li>
          <li className="list-size">Quatro grupos com quatro equipes.</li>
          <li className="list-size">Dois melhores de cada grupo avançam.</li>
          <li className="list-size">Todas as partidas em MD3.</li>
        </ul>

        <h4>playoffs</h4>
        <ul>
          <li className="list-size">Eliminação dupla.</li>
          <li className="list-size">
            Todas as partidas em MD3 (exc. Final Lower e Grande Final).
          </li>
          <li className="list-size">Final Lower e Grande Final em MD5.</li>
        </ul>
      </section>

      <h2>grupos</h2>
      <div className="nfl">
        <Grupo times={times[0]} />
        <Grupo times={times[1]} />
        <Grupo times={times[2]} />
        <Grupo times={times[3]} />
      </div>
      <Footer />
    </Champ>
  );
};

export default Champion;
