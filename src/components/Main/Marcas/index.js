import "./style.scss";

import arrowLeft from "../../../assets/icons/arrow-left-blue.svg";
import arrowRight from "../../../assets/icons/arrow-right-blue.svg";

import akgHarman from "../../../assets/logos/akg-harman.svg";
import roland from "../../../assets/logos/roland.svg";
import boss from "../../../assets/logos/boss.svg";
import shure from "../../../assets/logos/shure.svg";

const Marcas = () => {
  return (
    <section className="brands">
      <h2>
        As <span>melhores</span> marcas
      </h2>
      <p>
        it is a long established fact that a reader will be distracted by the
        readable
      </p>

      <div className="container slideBrands">
        <button>
          <img src={arrowLeft} alt="icon" />
        </button>
        <div className="slide">
          <img src={akgHarman} alt="logo akgHarman" />
          <img src={roland} alt="logo roland" />
          <img src={boss} alt="boss" />
          <img src={shure} alt="shure" />
        </div>
        <button>
          <img src={arrowRight} alt="icon" />
        </button>
      </div>
    </section>
  );
};

export default Marcas;
