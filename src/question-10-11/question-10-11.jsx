function Question_10_11() {
  const a = prompt("Digite o primeiro número da soma:");
  const b = prompt("Digite o segundo número para a soma:");
  const celsius = prompt("Digite a temperatura em Celsius para converter para Fahrenheit:");
  function somar(a, b) {
    return a + b;
  }

  function converterDeCelsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

return (<div className="Question_10_11">
    <p>A soma de {a} com {b} é igual a: {somar(Number(a), Number(b))}</p>
    <p>{celsius}°C em Fahrenheit é igual a: {converterDeCelsiusParaFahrenheit(Number(celsius))}°F</p>
</div>);

}

export default Question_10_11;
