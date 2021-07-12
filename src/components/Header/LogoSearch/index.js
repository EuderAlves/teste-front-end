import "./style.scss";

import ninjaLogo from "../../../assets/logos/ninja-som-logo.svg";
import searchIcon from "../../../assets/icons/search.svg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";
import avatar from "../../../assets/icons/avatar.svg";
import poligono from "../../../assets/icons/poligono.svg";
import bag from "../../../assets/icons/bag.svg";

const LogoSearch = () => {
  return (
    <section className="container">
      <div className="headerLogoSearch">
        <h1>
          <img src={ninjaLogo} alt="logo" />
        </h1>

        <div className="inputArea">
          <input type="text" placeholder="BUSQUE AQUI..." />
          <img src={searchIcon} alt="search icon" />
        </div>

        <p className="phone">
          <img src={whatsappIcon} alt="whatsapp icon" />
          (11) 99999-9999
        </p>

        <div className="myAccount">
          <img src={avatar} alt="avatar" />
          <div className="helloName">
            <h2>Olá, visitante</h2>
            <span>minha conta</span>
          </div>

          <img src={poligono} alt="" />
        </div>

        <div className="car">
          <img src={bag} alt="bag icon" />

          <h2>Seu carrinho</h2>
          <span>0 item(s)</span>
        </div>
      </div>
    </section>
  );
};

export default LogoSearch;
