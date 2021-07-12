import "./style.scss";

import close from "../../../../assets/icons/close.svg";
import arrowRight from "../../../../assets/icons/arrow-right-very-small.svg";

const Modal = ({ titulo, preco, descricao, imagem, funcao }) => {
  return (
    <div className="bgModal">
      <div className="modal">
        <button onClick={funcao} className="closeModal">
          <img src={close} alt="Fechar" />
        </button>
        <img src={imagem} alt={titulo} />

        <div className="infoModal">
          <h1 className="titleProdModal">{titulo}</h1>
          <h2 className="priceProdModal">
            {preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          <p className="descProdMdal">{descricao}</p>

          <div className="moreDetModal">
            <a href="#">Veja mais detalhes do produto</a>
            <button>
              <img src={arrowRight} alt=">" />
            </button>
          </div>

          <button className="addCarModal">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
