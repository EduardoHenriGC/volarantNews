import React from "react";
import { Champ } from "./styles";
import Grupo from "./grupo";
import Footer from "../../components/footer";

const times = [
  {
    grupo: "A",
    time1: "Paper Rex",
    img1: "https://static-cdn.jtvnw.net/jtv_user_pictures/ac679da3-7c60-4d19-a9f9-9baa8c7093e6-profile_image-300x300.png",
    time2: "EDward Gaming",
    img2: "https://oracleselixir-team-logos.s3-us-west-2.amazonaws.com/98767991882270868.png",
    time3: "Leviatán",
    img3: "https://static.valorantzone.gg/news/2022/02/08003207/297px-Leviatan_allmode.png",
    time4: "Team Liquid",
    img4: "https://www.teamliquid.com/staff/OmniEulogy/TLLogoBottom2.jpg",
  },
  {
    grupo: "B",
    time1: "OpTic Gaming",
    img1: "https://png.pngitem.com/pimgs/s/180-1802833_optic-gaming-optic-gaming-nadeshot-hd-png-download.png",
    time2: "BOOM Esports",
    img2: "https://i.pinimg.com/736x/89/ae/1c/89ae1c61618f377d0494c9369514aa61.jpg",
    time3: "ZETA DIVISION",
    img3: "https://cdn.escharts.com/uploads/public/60e/c1b/e78/60ec1be78ae07158563718.png",
    time4: "LOUD",
    img4: "https://upload.wikimedia.org/wikipedia/commons/1/17/LOUD_LOGO.png",
  },
  {
    grupo: "C",
    time1: "FunPlus Phoenix",
    img1: "https://news.cgtn.com/news/3d4d444e346b544e776b6a4e35457a4e33636a4e31457a6333566d54/img/a09fa1f1319e4bfc93c150cade3c6b6d/a09fa1f1319e4bfc93c150cade3c6b6d-2.jpg",
    time2: "KRU Esports",
    img2: "https://resources.esportsinsider.com/esportsinsider/2020/11/Screenshot-2020-11-23-at-16.53.38-e1606152128563-300x208.png",
    time3: "xset",
    img3: "https://mir-s3-cdn-cf.behance.net/projects/404/76d9b0134218973.Y3JvcCw4MDgsNjMyLDAsMA.png",
    time4: "XERXIA",
    img4: "https://static.wixstatic.com/media/93aa1c_e4f976bb024b406e82c23054682ab85c~mv2.jpeg/v1/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/93aa1c_e4f976bb024b406e82c23054682ab85c~mv2.jpeg",
  },
  {
    grupo: "D",
    time1: "DRX",
    img1: "https://cdn.gamemeca.com/gmdata/0001/590/483/419102_DRXLogo.jpg",
    time2: "FURIA Esports",
    img2: "https://theradioativo.com.br/wp-content/uploads/2020/07/furia-esports-250x250-1.png",
    time3: "Fnatic",
    img3: "https://seeklogo.com/images/F/fnatic-logo-1D4E4DCF71-seeklogo.com.png",
    time4: "100 Thieves",
    img4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/100_Thieves_logo.svg/971px-100_Thieves_logo.svg.png",
  },
];
const Champion = () => {
  return (
    <Champ id="champion">
      <hr />
      <section className="info-champ">
        <h2>VALORANT Champions 2022</h2>

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
