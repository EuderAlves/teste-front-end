import "./style.scss";

const Formulario = ({ button }) => {
  return (
    <form className="formFooter">
      <h4>
        Assine nosso <span>newsletter</span>
      </h4>
      <h5>e receba novidades e promoções</h5>
      <input placeholder="SEU NOME" type="text" />
      <input placeholder="SEU EMAIL" type="email" />
      {button}
    </form>
  );
};

export default Formulario;
