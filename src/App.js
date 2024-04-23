import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores(...colaboradores, colaborador);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorAdicionado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
