import { useState } from "react";
import Button3 from "../../Buttons/Button3";
import Catalogo from "./Catalogo";
import "./style.scss";

const products = [
  {
    success: true,
    products: [
      {
        productName: "Bateria Eletrônica",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
        price: 149990,
      },
      {
        productName: "Kit de Pratos",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
        price: 149990,
      },
      {
        productName: "Pedal Duplo para Bumbo",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
        price: 149990,
      },
      {
        productName: "Módulo para Bateria",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
        price: 149990,
      },

      {
        productName: "Prato 17” Medium Crash",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
        price: 149990,
      },
      {
        productName: "Kit Bag para Tambores",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
        price: 149990,
      },
      {
        productName: "Banco para Bateria",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
        price: 149990,
      },
      {
        productName: "Pedestal para Percussão",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
        price: 149990,
      },

      {
        productName: "Mixer de Video",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
        price: 149990,
      },
      {
        productName: "Guitarra Jackson",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
        price: 149990,
      },
      {
        productName: "Contrabaixo Elétrico",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
        price: 149990,
      },
      {
        productName: "Sistema de Microfone s/ Fio",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png",
        price: 149990,
      },
      {
        productName: "Sistema de Microfone s/ Fio",
        descriptionShort:
          "Many desktop publishing packages and web page editors now Many",
        photo:
          "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png",
        price: 149990,
      },
    ],
  },
];

const Destaques = () => {
  const [produtos] = useState(products[0].products);
  const [produtosIniciais] = useState(8);
  const [maisProdutos, setMaisProdutos] = useState(0);

  const verMais = () => setMaisProdutos((state) => state + 4);

  const verMenos = () => setMaisProdutos(0);

  const produtosParaMostrar = produtos.slice(
    0,
    produtosIniciais + maisProdutos
  );

  return (
    <section className="container">
      <div className="mainHighlights">
        <h2>
          Instrumentos <span>Destaques</span>
        </h2>
        <p>
          it is a long established fact that a reader will be distracted by
          readable
        </p>

        <Catalogo produtos={produtosParaMostrar} />

        <div className="containerButton">
          {maisProdutos + produtosIniciais >= produtos.length ? (
            <Button3 id="botaoVer" text="ver menos" funcao={() => verMenos()} />
          ) : (
            <Button3 id="botaoVer" text="ver mais" funcao={() => verMais()} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Destaques;
