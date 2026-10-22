import { useState } from "react";

export default function VirtualDOM() {
  const [nomeReal, setNomeReal] = useState("Ana");
  const [nomeNovo, setNomeNovo] = useState("Ana");
  const [atualizado, setAtualizado] = useState(false);

  function editarNome(valor) {
    setNomeNovo(valor);
    setAtualizado(false);
  }

  function aplicarMudancas() {
    setNomeReal(nomeNovo.trim() || "visitante");
    setAtualizado(true);
  }

  return (
    <article className="concept">
      <span className="number">04</span>
      <h2>Renderização e Virtual DOM</h2>
      <p>
        Quando o estado muda, o React agenda uma nova renderização: chama os
        componentes para calcular a interface desejada e depois aplica ao DOM
        as mudanças necessárias. Esse fluxo é descrito na documentação como
        <strong> trigger, render e commit</strong>.
      </p>
      <p>
        “Virtual DOM” é um apelido popular para a representação da interface
        usada nesse processo, mas não significa que exista uma cópia visual
        manual que você precise atualizar. Na prática, atualize o estado e
        descreva o resultado em JSX; o React coordena a renderização e o commit.
      </p>

      <h3>Fluxo simplificado</h3>
      <pre><code>{`// 1. O evento atualiza o estado
setNome("Lia");

// 2. O componente renderiza o JSX com o novo estado
return <p>Olá, {nome}!</p>;

// 3. O React faz o commit das mudanças necessárias no DOM`}</code></pre>

      <section className="exercise-box">
        <span className="exercise-label">SIMULAÇÃO DIDÁTICA</span>
        <h3>Compare a interface antes e depois</h3>
        <p>
          Edite o rascunho e aplique a mudança para observar uma comparação
          visual. É uma analogia para estudar o fluxo — o React desta própria
          página já renderiza o campo e atualiza a tela normalmente.
        </p>
        <div className="practice-controls">
          <label htmlFor="new-name">Novo nome</label>
          <input
            id="new-name"
            value={nomeNovo}
            onChange={(event) => editarNome(event.target.value)}
            placeholder="Digite um nome"
          />
          <button onClick={aplicarMudancas} disabled={nomeNovo === nomeReal}>
            Aplicar na simulação
          </button>
        </div>

        <div className="trees">
          <section className="tree">
            <h3>Rascunho da interface</h3>
            <div className="node">Perfil</div>
            <div className="node new">Nome: {nomeNovo || "(vazio)"}</div>
            <small>Resultado desejado</small>
          </section>
          <section className="tree" aria-live="polite">
            <h3>Após aplicar</h3>
            <div className="node">Perfil</div>
            <div className="node real">Nome: {nomeReal}</div>
            <small>Interface comprometida nesta simulação</small>
          </section>
        </div>
        {atualizado && (
          <p className="note" role="status">
            Simulação atualizada. Em um app real, você atualizaria o estado; o
            React cuidaria do novo render e do commit.
          </p>
        )}
      </section>

      <p className="note">
        Não altere o DOM diretamente para refletir o estado do React. Primeiro,
        represente a mudança no estado; depois descreva a interface com JSX.
      </p>
    </article>
  );
}
