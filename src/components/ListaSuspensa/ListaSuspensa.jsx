import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="listaSuspensa">
      <label>{props.label}</label>
      <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
