import Produto from "../Produto";
import "./style.scss";

const Catalogo = ({ produtos }) => {
  return (
    <div className="product">
      {produtos.map((produto, index) => {
        return (
          <Produto
            key={index}
            imagem={produto.photo}
            titulo={produto.productName}
            descricao={produto.descriptionShort}
            preco={produto.price}
          />
        );
      })}
    </div>
  );
};

export default Catalogo;
