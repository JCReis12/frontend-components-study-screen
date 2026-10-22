import { useState } from "react";

const frutasIniciais = [
  { id: 1, nome: "Maçã" },
  { id: 2, nome: "Banana" },
  { id: 3, nome: "Uva" },
];

export default function ListasKeys() {
  const [frutas, setFrutas] = useState(frutasIniciais);
  const [novaFruta, setNovaFruta] = useState("");
  const [proximoId, setProximoId] = useState(4);

  function adicionarFruta(event) {
    event.preventDefault();
    const nome = novaFruta.trim();
    if (!nome) return;

    setFrutas((itens) => [...itens, { id: proximoId, nome }]);
    setProximoId((id) => id + 1);
    setNovaFruta("");
  }

  function removerFruta(idRemover) {
    setFrutas((itens) => itens.filter((fruta) => fruta.id !== idRemover));
  }

  return (
    <article className="concept">
      <span className="number">05</span>
      <h2>Listas e keys</h2>
      <p>
        Uma coleção de dados pode virar elementos JSX com métodos de array como
        <code> map()</code>. Para cada elemento da lista, forneça uma
        <code> key</code> única e estável entre os irmãos. A chave ajuda o React
        a reconhecer qual item foi adicionado, removido ou movido.
      </p>

      <h3>Renderize dados com identidade</h3>
      <pre><code>{`const frutas = [
  { id: 1, nome: "Maçã" },
  { id: 2, nome: "Banana" },
];

{frutas.map((fruta) => (
  <li key={fruta.id}>{fruta.nome}</li>
))}`}</code></pre>
      <p className="note">
        Prefira um identificador único que pertença aos dados. O índice do
        array pode causar bugs quando itens são reordenados ou removidos; o
        texto também não serve como chave se puder se repetir.
      </p>

      <h3>Experimente</h3>
      <form className="practice-controls" onSubmit={adicionarFruta}>
        <label htmlFor="new-fruit">Nova fruta</label>
        <input
          id="new-fruit"
          value={novaFruta}
          onChange={(event) => setNovaFruta(event.target.value)}
          placeholder="Digite uma fruta"
        />
        <button type="submit" disabled={!novaFruta.trim()}>Adicionar à lista</button>
      </form>

      {frutas.length > 0 ? (
        <ul className="fruit-list">
          {frutas.map((fruta) => (
            <li key={fruta.id}>
              <span>{fruta.nome}</span>
              <button type="button" onClick={() => removerFruta(fruta.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-list">Lista vazia. Adicione uma fruta para começar.</p>
      )}

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Investigue as keys</h3>
        <p>
          Adicione a mesma fruta duas vezes e remova apenas uma. Depois imagine
          o que poderia dar errado se a chave fosse o nome ou a posição no array.
        </p>
      </section>
    </article>
  );
}
