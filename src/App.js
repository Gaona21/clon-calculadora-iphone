import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";

import { useState } from "react";

function App() {

  const [input, setInput] = useState("");

  const imprimirValor = (valor) =>{
    setInput(input+valor);
  };

  return (
    <div className="App">
      <div className="calculadora">

        <div className="contenedorPantalla">
            <Pantalla
            input={input}
            />
        </div>

        <div className="contenedorBotones">
          <div className="fila">
            <Boton manejarClick ={imprimirValor}>AC</Boton>
            <Boton manejarClick ={imprimirValor}>+/-</Boton>
            <Boton manejarClick ={imprimirValor}>%</Boton>
            <Boton manejarClick ={imprimirValor}>÷</Boton>
          </div>

          <div className="fila">
            <Boton manejarClick ={imprimirValor}>7</Boton>
            <Boton manejarClick ={imprimirValor}>8</Boton>
            <Boton manejarClick ={imprimirValor}>9</Boton>
            <Boton manejarClick ={imprimirValor}>x</Boton>
          </div>

          <div className="fila">
            <Boton manejarClick ={imprimirValor}>4</Boton>
            <Boton manejarClick ={imprimirValor}>5</Boton>
            <Boton manejarClick ={imprimirValor}>6</Boton>
            <Boton manejarClick ={imprimirValor}>-</Boton>
          </div>

          <div className="fila">
            <Boton manejarClick ={imprimirValor}>1</Boton>
            <Boton manejarClick ={imprimirValor}>2</Boton>
            <Boton manejarClick ={imprimirValor}>3</Boton>
            <Boton manejarClick ={imprimirValor}>+</Boton>
          </div>

          <div className="fila">
            <Boton manejarClick ={imprimirValor}>0</Boton>
            <Boton manejarClick ={imprimirValor}>,</Boton>
            <Boton manejarClick ={imprimirValor}>=</Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
