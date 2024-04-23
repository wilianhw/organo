import './CampoTexto.css';

export const CampoTexto = (props) => {
    console.log(props);
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    );
}
