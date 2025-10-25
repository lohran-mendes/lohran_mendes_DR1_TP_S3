function Question_07() {
  const nome = prompt("Digite seu nome:");
  const diaAtual = new Date().getDay();
  const diaDaSemana = [
    "um ótimo Domingo",
    "uma ótima Segunda-feira",
    "uma bela Terça-feira",
    "uma maravilhosa Quarta-feira",
    "uma boa Quinta-feira",
    "uma excelente Sexta-feira",
    "um grande Sábado",
  ];

  return (
    <div className="Question_07">
      {nome ? (
        <p>
          Olá {nome}, desejo que tenha {diaDaSemana[diaAtual]}!
        </p>
      ) : (
        <p>Olá, desejo que tenha {diaDaSemana[diaAtual]}!</p>
      )}
    </div>
  );
}

export default Question_07;
