import "./style.scss";

import poligono from "../../../assets/icons/poligono.svg";

const Filters = () => {
  return (
    <section className="container filters">
      <ul className="headeFilters">
        <li>Todas as categorias</li>
        <li>
          Som profissional
          <img src={poligono} alt="poligono icon" />
        </li>

        <li>
          Instrumentos musicais
          <img src={poligono} alt="poligono icon" />
        </li>

        <li>Promoções</li>
        <li>Contato</li>
        <li></li>
      </ul>
    </section>
  );
};

export default Filters;
