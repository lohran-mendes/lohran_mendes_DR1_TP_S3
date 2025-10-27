import "./card.css";

function Card({name, listaProdutos}) {
  return (
    <div className="CardComponent">
        <h1>{name}</h1>
        <ul>
          {listaProdutos.map((produto, index) => (
            <li key={index}>{produto.nome} - R${produto.preco}</li>
          ))}
        </ul>
    </div>
  );
}

export default Card;
