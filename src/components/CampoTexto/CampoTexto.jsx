import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        value={props.value}
        aoAlterado
        required={props.obrigatorio}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
