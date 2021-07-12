import Formulario from "../Formulario";
import Button3 from "../../Buttons/Button3";
import "./style.scss";

import facebook from "../../../assets/icons/facebook.svg";
import twitter from "../../../assets/icons/twitter.svg";
import instagram from "../../../assets/icons/instagram.svg";

import americanExpress from "../../../assets/icons/cartoes/american-express.svg";
import boleto from "../../../assets/icons/cartoes/boleto.svg";
import club from "../../../assets/icons/cartoes/club.svg";
import mastercard from "../../../assets/icons/cartoes/mastercard.svg";
import visa from "../../../assets/icons/cartoes/visa.svg";

import vtex from "../../../assets/icons/cartoes/vtex.svg";
import rapidssl from "../../../assets/icons/cartoes/rapidssl.svg";

const MainFooter = () => {
  return (
    <main className="container mainFooter">
      <div className="navBox">
        <section className="firstColun">
          <nav>
            <h3>Institucional</h3>
            <ul>
              <li>
                <a href="#">Quem somos</a>
              </li>
              <li>
                <a href="#">Nossas lojas</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3>Atendimento</h3>
            <ul>
              <li>
                <a href="#">Fale conosco</a>
              </li>
              <li>
                <a href="#">Vendas@ninjasom.com.br</a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="secondColun">
          <nav>
            <h3>Ajuda e suporte</h3>
            <ul>
              <li>
                <a href="#">Política de privacidade</a>
              </li>
              <li>
                <a href="#">Política de trocas</a>
              </li>
              <li>
                <a href="#">Prazos de entrega</a>
              </li>
              <li>
                <a href="#">Termos de uso</a>
              </li>
            </ul>
          </nav>

          <div className="iconRedSociais">
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </section>

        <section className="thirdColun">
          <div className="forma-pagamento">
            <h3>Formas de pagamento</h3>
            <div className="icoCards">
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={americanExpress} alt="americaExpress" />
              <img src={club} alt="club" />
              <img src={boleto} alt="boleto" />
            </div>
          </div>

          <div className="Safety">
            <h3>Segurança</h3>

            <div className="iconSafety">
              <img src={rapidssl} alt="rapidssl" />
              <img src={vtex} alt="vtex" />
            </div>
          </div>
        </section>

        <section className="fourthColun">
          <Formulario button={<Button3 text="Enviar" funcao="" />} />
        </section>
      </div>
    </main>
  );
};

export default MainFooter;
