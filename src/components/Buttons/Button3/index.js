import "./style.scss";

const Button3 = ({ id, text, funcao }) => {
  return (
    <button id={id} className="button3" onClick={funcao}>
      {text}
    </button>
  );
};

export default Button3;
