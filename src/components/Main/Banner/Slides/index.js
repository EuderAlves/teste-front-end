import Descricao from "../../../Descricao";
import Button1 from "../../../Buttons/Button1";
import "./style.scss";

import slide1Small from "../../../../assets/images/banner-1.png";

import arrowLeft from "../../../../assets/icons/arrow-left.svg";
import arrowRight from "../../../../assets/icons/arrow-right.svg";

const Slide = () => {
  return (
    <div id="slides">
      <div className="slide">
        <img src={slide1Small} alt="banner 1" className="image-slide small" />

        <div className="descBanner">
          <Descricao
            titulo1="Novos produtos"
            titulo2="Instrumentos"
            titulo3="Profissionais"
            button={<Button1 text="Confira" funcao="" />}
          />
        </div>
      </div>

      <div className="slideController">
        <div className="arrow-left">
          <img src={arrowLeft} alt="arrow left" />
        </div>

        <div className=""></div>

        <div className="arrow-right">
          <img src={arrowRight} alt="arrow right" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
