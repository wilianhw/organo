import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores(...colaboradores, colaborador);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorAdicionado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
    </div>
  );
}

export default App;
