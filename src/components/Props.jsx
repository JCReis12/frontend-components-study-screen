import { useState } from "react";

function Cartao({ titulo, descricao }) {
  return (
    <div className="example-output">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default function Props() {
  const [titulo, setTitulo] = useState("React Lab");
  const [descricao, setDescricao] = useState("Aprendendo React na prática");

  return (
    <article className="concept">
      <span className="number">03</span>
      <h2>Props</h2>
      <p>
        Props são os dados que um componente pai envia para um componente filho.
        Podem ser textos, números, objetos, arrays, funções ou até conteúdo JSX.
        O componente filho lê as props recebidas para decidir o que renderizar;
        tratamos esses valores como somente leitura.
      </p>

      <h3>Receba e use props</h3>
      <pre><code>{`function Cartao({ titulo, descricao }) {
  return (
    <article>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  );
}

<Cartao
  titulo="React Lab"
  descricao="Aprendendo React"
/>`}</code></pre>
      <p className="note">
        As chaves na assinatura de <code>Cartao</code> fazem a desestruturação
        do objeto de props. O pai configura o componente; o filho usa os valores
        sem alterá-los.
      </p>

      <h3>Experimente as props</h3>
      <p>Edite os campos no componente pai. O mesmo componente recebe novos valores.</p>
      <div className="practice-controls">
        <label htmlFor="card-title">Título</label>
        <input
          id="card-title"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder="Título do cartão"
        />
        <label htmlFor="card-description">Descrição</label>
        <input
          id="card-description"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Descrição do cartão"
        />
      </div>
      <Cartao
        titulo={titulo || "Sem título"}
        descricao={descricao || "Adicione uma descrição"}
      />
      <Cartao titulo="JavaScript" descricao="Fundamentos da programação" />

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Personalize o cartão</h3>
        <p>
          Adicione uma prop <code>cor</code> ao componente e use-a para alterar
          a aparência do cartão sem mudar os dados originais.
        </p>
      </section>
    </article>
  );
}
