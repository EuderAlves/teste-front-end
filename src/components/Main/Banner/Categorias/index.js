import CardCategoria from "../CardCategoria";
import "./style.scss";

import guitarra from "../../../../assets/round-images/guitarra.svg";
import microfone from "../../../../assets/round-images/microfone.png";
import mesaDeSom from "../../../../assets/round-images/mesa-de-som.png";
import teclado from "../../../../assets/round-images/teclado.png";
import violao from "../../../../assets/round-images/violao.svg";
import bateria from "../../../../assets/round-images/bateria.svg";

const Categorias = () => {
  return (
    <div id="categorias" className="container">
      <div className="cards">
        <CardCategoria imagem={guitarra} titulo="Guitarras" />

        <CardCategoria imagem={microfone} titulo="Microfones" />

        <CardCategoria imagem={mesaDeSom} titulo="Mesa de som" />

        <CardCategoria imagem={teclado} titulo="Teclados" />

        <CardCategoria imagem={violao} titulo="Violão" />

        <CardCategoria imagem={bateria} titulo="Baterias" />
      </div>
    </div>
  );
};

export default Categorias;
