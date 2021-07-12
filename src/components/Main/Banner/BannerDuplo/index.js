import "./style.scss";
import Button2 from "../../../Buttons/Button2";
import Descricao from "../../../Descricao";

import banner1 from "../../../../assets/images/MSe0Pmi0@2x.png";
import banner2 from "../../../../assets/images/SRH-1@2x.png";

const BannerDuplo = () => {
  return (
    <div className="bannerDoble">
      <div className="bannerImg">
        <img src={banner2} alt="banner" />

        <div class="descBanner">
          <Descricao
            titulo1="Novidades"
            titulo2="Áudio"
            titulo3="Profissional"
            linha={true}
            button={<Button2 text="Confira" />}
          />
        </div>
      </div>

      <div className="bannerImg">
        <img src={banner1} alt="banner" />

        <div class="descBanner">
          <Descricao
            titulo1="Novidades"
            titulo2="Instrumentos"
            titulo3="Musicais"
            linha={true}
            button={<Button2 text="Confira" />}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerDuplo;
