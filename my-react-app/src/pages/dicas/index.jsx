import React from "react";
import { DicasCss } from "./dicas";
import Footer from "../../components/footer";

const Dicas = () => {
  return (
    <DicasCss id="dicas">
      <hr />
      <div className="container">
        <h2>Dicas</h2>
        <h3>Mire na cabeça!</h3>
        <img
          src="https://static.valorantzone.gg/news/2020/06/26162600/hs-valorant.png"
          alt=""
        />
        <p>
          Assim como acontece pelo menos em todos os principais jogos de tiro,
          atingir o oponente na cabeça, região mais difícil de acertar, inflige
          muito mais dano. A Vandal, por exemplo, causa 40 de dano no
          peito/braços do oponente e 34 nas pernas. Na cabeça, o dano é de 160,
          mais que suficiente para abater mesmo o inimigo mais bem protegido
          (com 100 de vida e 50 de escudo).
        </p>
        <h3>Conheça o “recoil” da arma</h3>
        <img
          src="https://i.ytimg.com/vi/QW4gZFSMJec/maxresdefault.jpg"
          alt=""
        />
        <p>
          Por conta dos “coices” que o atirador leva ao disparar, cada arma tem
          um padrão único de direcionamento dos tiros durante os sprays – as
          rajadas. Em Valorant, se você gastar o pente inteiro de um rifle de
          uma vez só em uma parede, recarregar a arma e fizer isso novamente, o
          “desenho” das balas no local será o mesmo. Por isso, faz parte da vida
          dos jogadores tentar decorar pelo menos parte desse padrão nas
          principais armas – entender o “desenho” básico de dez a 15 balas dos
          pentes já ajuda bastante. Os motivos para isso são simples: decorar o
          padrão de um pente de 30 balas seria muito mais difícil; o início do
          padrão dos pentes geralmente envolve principalmente um movimento
          principalmente para baixo, algo muito mais simples que os intensos
          movimentos horizontais dos finais de sprays de algumas armas; e, num
          mundo ideal, mesmo iniciantes devem tentar gastar o mínimo de balas
          para abater um oponente.
        </p>
        <h3>Atirar parado</h3>
        <img
          src="https://img.ibxk.com.br/2020/05/05/05034302515226.jpg"
          alt=""
        />
        <p>
          Valorant é um jogo que não está nem tanto para o Counter-Strike:
          Global Offensive, que premia quase estritamente os jogadores que não
          andam/correm enquanto atiram com as armas mais pesadas, nem para o
          Overwatch, em que está tudo bem atirar enquanto se movimenta. As
          “patinetadas” – momentos em que os jogadores conseguem acertar tiros
          fatais com certa facilidade enquanto correm – já renderam muitas
          críticas e cuidados especiais dos desenvolvedores, que reduziram sua
          recorrência (ainda que continue não sendo raro ver isso acontecendo).
          Há armas em que há menos punição pelas patinetadas – principalmente as
          leves, como pistolas. Agachar para a
        </p>
        <h3>Habilidades</h3>
        <img src="https://static1-br.millenium.gg/articles/6/56/16/@/93029-as-habilidades-de-astra-article_m-1.png" />
        <p>
          Conhecer as habilidades dos personagens também é importantíssimo para
          um bom desempenho no jogo. Além de entender o que seu próprio
          personagem pode fazer e tirar proveito disso individualmente ou em uma
          jogada em equipe, essa também é uma medida que faz com você saiba o
          que esperar das habilidades dos oponentes. A partir disso, também
          ficará muito mais fácil antecipar possíveis estratégias do outro time
          e desenvolver jogadas mais eficazes.
        </p>
        <h3>Conheça as armas</h3>
        <img src="https://s2.glbimg.com/o_7T-TIkqHqlb-SQfwiUNaVxXCg=/0x0:799x535/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/o/g/J5AuWkQBGAP0vOA7wLog/armas-valorant.jpg" />
        <p>
          Valorant conta com 17 armas de fogo disponíveis para compra no início
          de round atualmente, mas algumas delas são usadas esporadicamente – ou
          nunca – por grande parte dos jogadores. É importante ter noção do meta
          do jogo e entender, por exemplo, que armas são mais fortes, precisas
          e/ou caras, por exemplo, para entender o momento correto de usá-las ou
          de recorrer a alternativas mais baratas e complicadas de usar. Entre
          as armas mais usadas atualmente, contamos com Classic, Ghost, Frenzy,
          Sheriff, Spectre, Vandal, Phantom e Operator.
        </p>
      </div>
      <Footer />
    </DicasCss>
  );
};

export default Dicas;
