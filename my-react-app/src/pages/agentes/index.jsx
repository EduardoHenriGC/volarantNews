import React from "react";
import { Agente } from "./styles";
import { AgentesLista } from "./AgentesLista";
import Footer from "../../components/footer";

const agente = [
  {
    nome: "FADE",

    skillq:
      "EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração.",
    videoq:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbec73caca7bf1045/62701777bae21939d5444b9e/Q-seize_video_NEW.mp4",
    skille:
      "EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos.",

    videoe:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4",
    skillc:
      "EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo.",
    videoc:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4e7a6525fe6ec42/625f2c7cfd9afd4b1fe300ee/C-Prowler_video.mp4",
    skillx:
      "EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração.",
    videox:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt75dfbdc2fbf6bfe1/625f2ba62777714c51b313be/X-Nightfall_Video.mp4",

    skillnameq: "Q – CLAUSURA ",
    skillnamee: "E – ASSOMBRAR ",
    skillnamec: "C – ESPREITADOR",
    skillnamex: "X – VÉU DA NOITE",
    slide1: "https://wallpaperaccess.com/full/8293293.jpg",
    slide2: "https://nitter.net/pic/media%2FFQtHdfQWYAoU-TO.jpg%3Fname%3Dsmall",
    slide3: "https://images8.alphacoders.com/123/1237504.jpg",
  },

  {
    nome: "YORU",

    skillq:
      "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.",
    videoq:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4",
    skille:
      "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o MODO SECUNDÁRIO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.",
    videoe:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4",
    skillc:
      "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles.",
    videoc:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4",
    skillx:
      "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora.",
    videox:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4",
    skillnameq: "Q: PONTO CEGO ",
    skillnamee: "E: PASSAGEM DIMENSIONAL",
    skillnamec: "C: FALCATRUA",
    skillnamex: "X: ESPIONAGEM DIMENSIONAL",
    slide1: "https://images4.alphacoders.com/121/1218751.jpg",
    slide2: "https://i.ytimg.com/vi/V2Qm-IPSQ74/maxresdefault.jpg",
    slide3: "https://images3.alphacoders.com/123/1237508.jpg",
  },

  {
    nome: "KILLJOY",

    skillq:
      "EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado.",
    videoq:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4",
    skille:
      "EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada.",
    videoe:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4",
    skillc:
      "EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano.",
    videoc:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4",
    skillx:
      " EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos.",
    videox:
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4",
    skillnameq: "Q - ROBÔ DE ALARME ",
    skillnamee: "E - TORRETA",
    skillnamec: "C - NANOENXAME",
    skillnamex: "X - CONFINAMENTO",
    slide1:
      "https://s2.glbimg.com/e3BdtFIEle0tjDSN_YaIiMauYTM=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/O/E/jLyZmwR12AB6BNFkVYJw/maxresdefault.jpg",
    slide2: "https://images8.alphacoders.com/114/thumb-1920-1149389.jpg",
    slide3: "https://images5.alphacoders.com/114/1149372.png",
  },
];

const Lista = agente.map((c) => <AgentesLista agente={c} />);

const Agentes = () => {
  return (
    <Agente id="agentes">
      <hr />
      <div className="container">
        <h1>Agentes em destaque</h1>
        {Lista}
      </div>
      <Footer />
    </Agente>
  );
};

export default Agentes;
