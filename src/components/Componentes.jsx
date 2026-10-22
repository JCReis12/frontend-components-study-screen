function Saudacao() {
  return <p className="example-output">Olá, turma!</p>;
}

function Mensagem() {
  return <p className="example-output">Bem-vindos ao React!</p>;
}

function CartaoDeBoasVindas() {
  return (
    <section className="example-output">
      <Saudacao />
      <Mensagem />
    </section>
  );
}

export default function Componentes() {
  return (
    <article className="concept">
      <span className="number">02</span>
      <h2>Componentes</h2>
      <p>
        Componentes são funções JavaScript que retornam uma parte da interface.
        Eles ajudam a separar responsabilidades e permitem compor uma página
        com blocos menores que podem ser reutilizados. O nome de um componente
        React começa com letra maiúscula; tags minúsculas representam elementos
        HTML.
      </p>

      <h3>Componha blocos menores</h3>
      <pre><code>{`function Saudacao() {
  return <p>Olá, turma!</p>;
}

function Mensagem() {
  return <p>Bem-vindos ao React!</p>;
}

function CartaoDeBoasVindas() {
  return (
    <section>
      <Saudacao />
      <Mensagem />
    </section>
  );
}`}</code></pre>

      <h3>Resultado</h3>
      <CartaoDeBoasVindas />
      <p className="note">
        <code>&lt;Saudacao /&gt;</code> usa um componente; <code>&lt;p&gt;</code>
        usa uma tag nativa. Componentes podem ser aninhados para formar
        interfaces maiores.
      </p>

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Crie um bloco reutilizável</h3>
        <p>
          Crie um componente <code>Assinatura</code> que retorne seu nome e
          inclua-o duas vezes no cartão. O que fica mais fácil de alterar?
        </p>
      </section>
    </article>
  );
}
