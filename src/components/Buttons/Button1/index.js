import "./style.scss";

const Button1 = ({ text, funcao }) => {
  return (
    <button className="button1" onClick={funcao}>
      {text}
    </button>
  );
};

export default Button1;
