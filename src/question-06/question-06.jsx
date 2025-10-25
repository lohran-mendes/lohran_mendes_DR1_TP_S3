function Question_06() {
  const livro = {
    titulo: "Engenharia de Software Moderna",
    autor: "Marco Tulio Valente",
    ano: 2024,
  };
  const capitulos = [
    "Introdução à Engenharia de Software",
    "Desenvolvimento Ágil",
    "Testes e Qualidade de Software",
    "Manutenção e Evolução de Software",
  ];

  return (
    <div className="Question_06">
      <h1>Livro: {livro.titulo}</h1>
      <h2>Autor: {livro.autor}</h2>
      <h3>Ano de Publicação: {livro.ano}</h3>
      <h4>Capítulos:</h4>
      <ul>
        {capitulos.map((capitulo, index) => (
          <li key={index}>
            {index + 1} - {capitulo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question_06;
