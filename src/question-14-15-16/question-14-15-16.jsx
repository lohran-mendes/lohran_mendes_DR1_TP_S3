import Card from "./card.jsx";
import Contador from "./contador.jsx";
import "./question-14-15-16.css";

function Question_14_15_16() {
  console.log("Question 14, 15, 16");
  const produtos = [
    { nome: "Celular", preco: 970, categoria: "Eletrônicos" },
    { nome: "Camisa", preco: 30, categoria: "Roupas" },
    { nome: "Televisão", preco: 1220, categoria: "Eletrônicos" },
    { nome: "Cadeira Gamer", preco: 800, categoria: "Móveis" },
    { nome: "Meia", preco: 10, categoria: "Roupas" },
  ];

  return (
  <div className="Question_14_15_16">
      <Card name={"Lista de Produtos"} listaProdutos={produtos} />
      <Contador />
  </div>
  );
}

export default Question_14_15_16;
