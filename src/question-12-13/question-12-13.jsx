import "./question-12-13.css";
import { useEffect, useState } from "react";

function Question_12_13() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [diferenca, setDiferenca] = useState(null);
  const [numeroAvaliado, setNumeroAvaliado] = useState(0);
  const [imparOuPar, setImparOuPar] = useState(null);

  useEffect(() => {
    setImparOuPar(null);
  }, [numeroAvaliado]);

  const calcularDiferenca = () => {
    setDiferenca(primeiroValor - segundoValor);
  };

  const verificarNumero = () => {
    setImparOuPar(numeroAvaliado % 2 === 0 ? "par" : "ímpar");
  };

  return (
    <div className="Question_12_13">
      <div className="card">
        <h2>Calculo de diferença</h2>
        <div className="container-input">
          <label htmlFor="primeiro-valor">Primeiro valor:</label>
          <input
            type="number"
            id="primeiro-valor"
            value={primeiroValor}
            onChange={(e) => setPrimeiroValor(Number.parseInt(e.target.value))}
          />
        </div>
        <div className="container-input">
          <label htmlFor="segundo-valor">Segundo valor:</label>
          <input
            type="number"
            id="segundo-valor"
            value={segundoValor}
            onChange={(e) => setSegundoValor(Number.parseInt(e.target.value))}
          />
        </div>
        <button onClick={calcularDiferenca}>Calcular</button>
        {diferenca !== null && (
          <p>A diferença entre os valores é {diferenca}</p>
        )}
      </div>

      <div className="card">
        <h2>Avaliar número</h2>
        <div className="container-input">
          <label htmlFor="numero-avaliado">Número a ser avaliado:</label>
          <input
            type="number"
            id="numero-avaliado"
            value={numeroAvaliado}
            onChange={(e) => setNumeroAvaliado(Number.parseInt(e.target.value))}
          />
        </div>
        <button onClick={verificarNumero}>Verificar</button>
        {imparOuPar !== null && (
          <p>
            {numeroAvaliado} é {imparOuPar}.
          </p>
        )}
      </div>
    </div>
  );
}

export default Question_12_13;
