function Question_08_09() {
  const horaAtual = new Date().getHours();
  const minutosAtuais = new Date().getMinutes();
  const parteDoDia =
    horaAtual < 6
      ? "madrugada"
      : horaAtual < 12
      ? "manhã"
      : horaAtual < 18
      ? "tarde"
      : "noite";
  const listaDeAfazeres = [
    "Acordar",
    "Tomar café da manhã",
    "Ir para o trabalho",
    "Almoçar",
    "Voltar para casa",
    "Jantar",
    "Dormir",
  ];

  return (
    <div className="Question_08_09">
      <p>
        Agora são {horaAtual}:{minutosAtuais}h, então é de {parteDoDia}.
      </p>
      <p>Segue a lista de afazeres de hoje:</p>
      <ol>
        {listaDeAfazeres.map((afazer, index) => (
          <li key={index}>{afazer}</li>
        ))}
      </ol>
    </div>
  );
}

export default Question_08_09;
