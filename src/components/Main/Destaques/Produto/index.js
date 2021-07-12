import { useState } from "react";
import Modal from "../Modal";
import "./style.scss";
import quickView from "../../../../assets/icons/quick-view.svg";

const Produto = ({ imagem, titulo, descricao, preco, key }) => {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <div className="produto" key={key}>
      <div className="imgQuickView">
        <div className="imgProduct">
          <div className="grad"></div>
          <img src={imagem} alt={titulo} />
        </div>

        <div className="quickView">
          <button onClick={() => setModalVisivel(true)}>
            <img src={quickView} alt="Quick view" />
          </button>
          <p>Quick View</p>
        </div>
      </div>

      <h3 className="titleProd">{titulo}</h3>
      <p className="descProd">{descricao}</p>
      <h2 className="priceProd">
        {preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </h2>

      {modalVisivel ? (
        <Modal
          titulo={titulo}
          preco={preco}
          descricao={descricao}
          imagem={imagem}
          funcao={() => setModalVisivel(false)}
        />
      ) : null}
    </div>
  );
};

export default Produto;
