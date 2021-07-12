import "./style.scss";

const Descricao = ({ titulo1, titulo2, titulo3, button, linha }) => {
  return (
    <div className="description">
      {linha ? <h3 className="line">{titulo1}</h3> : <h3>{titulo1}</h3>}

      <h2>
        {titulo2}
        <br />
        <span>{titulo3}</span>
      </h2>
      {button}
    </div>
  );
};

export default Descricao;
