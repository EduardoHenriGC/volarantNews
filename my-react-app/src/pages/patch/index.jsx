import React from "react";
import { Patchs } from "./styles";
import Footer from "../../components/footer";

const Patch = () => {
  return (
    <Patchs>
      <hr />
      <section className="patch-section" id="path-section">
        <h2>NOTAS DA ATUALIZAÇÃO 5.03 DO VALORANT</h2>

        <div className="img-container">
          <img
            src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef79fd4aa9b36865/62f16b4e022e5e700e65e8d3/Patch_Notes_Highlights_5_03_por_BR.jpg"
            alt="patch note"
          />
        </div>
        <h2>ATUALIZAÇÕES GERAIS</h2>

        <div className="texto">
          <p>-Atualização de motor gráfico para Unreal Engine 4.26</p>
          <p>
            - Essa atualização melhora as ferramentas disponíveis para nossos
            desenvolvedores de muitas formas.
          </p>
          <p>
            - No entanto, você provavelmente não vai notar a mudança, pois o
            objetivo de qualquer atualização de motor gráfico é não ser
            percebida.
          </p>
          <p>
            - Mas há alguns problemas que nós sabemos que estão acontecendo,
            principalmente no funcionamento da IU.
          </p>
          <p>
            - Vamos corrigi-los o mais rápido possível, mas pode ser que você
            veja algum problema no jogo e no menu principal.
          </p>
          <p>- Se algo interromper seu jogo, envie um relatório de bug.</p>

          <p>
            - Atualização de design da página de Agentes Achamos que seria bom
            melhorarmos algumas artes dos Agentes e usarmos mais o estilo
            VALORANT.
          </p>
        </div>
        <br />
        <br />
        <br />
        <h2>ATUALIZAÇÕES DOS AGENTES</h2>
        <div className="img-content">
          <img
            src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt586b54294bf28bf1/617c95ffe9faf110630332f4/chamber.jpg"
            alt=""
          />
        </div>

        <div className="texto">
          <h4>Rendezvous (E)</h4>
          <p>-Tempo básico de Recarga aumentado: 20s {">>>"} 30s.</p>
          <p>
            -Tempo de Recarga para recolher aumentado: 20s {">>>"} 30s. Recarga
            definida para 45s quando a âncora de Rendezvous é destruída.
          </p>
          <p>
            -Tamanho do diâmetro do "círculo" de ativação de Rendezvous
            reduzido: 21m {">>>"} 15m.
          </p>
          <p>
            -O objetivo da Rendezvous do Chamber era ser forte para dominar o
            espaço, mas o raio grande fazia com que o Agente tomasse o espaço de
            forma mais agressiva do que gostaríamos.
          </p>
          <p>
            -Essa mudança fará com que Chamber precise se esforçar mais para
            acessar áreas fora do ângulo.
          </p>
          <p>
            -Esperamos que uma punição mais severa para âncoras destruídas da
            Rendezvous e a redução no raio da habilidade façam com que os fãs de
            Chamber sejam mais cautelosos.
          </p>
          <p>
            -Essa mudança também deixa o contra-ataque de objetos destrutíveis
            de Chamber mais alinhado com o comportamento de outros objetos
            destrutíveis no jogo.
          </p>
          <h4>Marca Registrada (C)</h4>
          <p>-Duração de Lentidão reduzida: 9,5s {">>>"} 6s. </p>
          <h4>Tour de Force (X)</h4>
          <p>-Pontos de Ultimate necessários aumentados: 7 {">>>"} 8.</p>
          <p>-Duração de Lentidão reduzida: 9,5s {">>>"} 6s.</p>
          <h4>Caçador de Cabeças (Q)</h4> <br />
          <p>-Custo de Bala aumentado: 100 {">>>"} 150.</p>
          <p>
            -É importante que Caçador de Cabeças seja uma arma auxiliar poderosa
            para o Chamber, mas o custo atual torna as decisões econômicas do
            Chamber mais fáceis que as de outros Agentes.
          </p>
          <p>
            -Isso deve impactar de forma mais evidente as decisões do Chamber em
            rodadas com pistolas e econômicas.
          </p>
          <p>
            -A mudança de pontos de Ultimate para Tour de Force também teve esse
            objetivo.
          </p>
        </div>
      </section>
      <Footer />
    </Patchs>
  );
};

export default Patch;
