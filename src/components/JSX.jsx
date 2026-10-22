import { useState } from "react";

export default function JSX() {
  const [nome, setNome] = useState("Ana");

  return (
    <article className="concept">
      <span className="number">01</span>
      <h2>JSX</h2>
      <p>
        JSX é uma extensão de sintaxe do JavaScript que permite descrever a
        interface com uma marcação familiar. Não é HTML dentro do navegador:
        ferramentas de build transformam esse código em chamadas que o React
        entende. Manter marcação e lógica próximas facilita acompanhar como os
        dados aparecem na tela.
      </p>

      <h3>Do dado à interface</h3>
      <pre><code>{`function Saudacao({ nome }) {
  return <h3>Olá, {nome}!</h3>;
}

<Saudacao nome="Ana" />`}</code></pre>
      <p className="note">
        As chaves <code>{`{}`}</code> inserem uma expressão JavaScript no JSX.
        Use um único elemento raiz (ou Fragment), feche as tags e escreva
        <code> className</code> para classes CSS.
      </p>

      <h3>Experimente</h3>
      <p>Altere o valor e veja a expressão entre chaves atualizar a saudação.</p>
      <div className="practice-controls">
        <label htmlFor="jsx-name">Seu nome</label>
        <input
          id="jsx-name"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <div className="preview" aria-live="polite">
        <h3>Olá, {nome.trim() || "visitante"}!</h3>
      </div>

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Seu próximo passo</h3>
        <p>Inclua uma expressão para mostrar quantos caracteres tem o seu nome.</p>
      </section>
    </article>
  );
}
