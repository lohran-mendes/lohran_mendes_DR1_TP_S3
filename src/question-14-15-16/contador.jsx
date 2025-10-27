import "./contador.css";
import { useState } from "react";

function Contador() {
const [contador, setContador] = useState(0);


  return (
    <div className="ContadorComponent">
        <h1>Contador</h1>
        <div className="contador">{contador}</div>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}
export default Contador;
