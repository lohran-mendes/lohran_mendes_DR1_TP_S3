function Question_05() {
  const nome = "Lohran Mendes";
  const idade = 24;
  const perfilAtivo = true;

  return (
    <div className="Question_05">
      <h1>
        Olá, o meu nome é {nome}, tenho {idade} anos e meu perfil está{" "}
        {perfilAtivo ? "ativo" : "inativo"}.
      </h1>
    </div>
  );
}

export default Question_05;
