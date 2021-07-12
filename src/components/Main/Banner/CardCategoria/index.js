import "./style.scss";

const CardCategoria = ({ titulo, imagem }) => {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
    </div>
  );
};

export default CardCategoria;
