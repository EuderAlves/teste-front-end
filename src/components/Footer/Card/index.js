import "./style.scss";

import arrowLeft from "../../../assets/icons/arrow-small-left.svg";
import arrowRight from "../../../assets/icons/arrow-small-right.svg";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <button>
          <img src={arrowLeft} alt="left" />
        </button>
        <button>
          <img src={arrowRight} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default Card;
