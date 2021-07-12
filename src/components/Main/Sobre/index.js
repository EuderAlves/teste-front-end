import "./style.scss";

const Sobre = ({ texto }) => {
  return (
    <section className="container">
      <div className="about">
        <h2>Sobre nós</h2>
        <p>{texto}</p>
      </div>
    </section>
  );
};

export default Sobre;
