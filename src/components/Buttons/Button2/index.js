import "./style.scss";

const Button2 = ({ text, funcao }) => {
  return (
    <button className="button2" onClick={funcao}>
      {text}
    </button>
  );
};

export default Button2;
