import { useState } from "react";

export default function Formularios() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const nomeValido = nome.trim().length >= 2;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function enviarFormulario(event) {
    event.preventDefault();
    if (!nomeValido || !emailValido) return;
    setEnviado(true);
  }

  return (
    <article className="concept">
      <span className="number">08</span>
      <h2>Formulários em React</h2>
      <p>
        Em um campo controlado, o valor vem do estado do React e cada alteração
        atualiza esse estado com <code>onChange</code>. Assim, a interface e os
        dados ficam sincronizados. O evento de envio permite validar os dados
        antes de processá-los.
      </p>

      <h3>Campo controlado e envio</h3>
      <pre><code>{`const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>

<form onSubmit={enviarFormulario}>...</form>`}</code></pre>
      <p className="note">
        Use um <code>label</code> associado ao campo, escolha um tipo adequado
        como <code>email</code> e não confie apenas na validação do navegador
        para proteger dados em uma aplicação real.
      </p>

      <h3>Experimente enviar</h3>
      {enviado ? (
        <div className="example-output" role="status">
          <strong>Recebido!</strong>
          <p>Obrigado, {nome.trim()}. O formulário foi validado neste exemplo.</p>
          <button className="subtle-button" onClick={() => setEnviado(false)}>Editar dados</button>
        </div>
      ) : (
        <form className="lesson-form" onSubmit={enviarFormulario} noValidate>
          <label htmlFor="form-name">Nome</label>
          <input
            id="form-name"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            aria-invalid={nome.length > 0 && !nomeValido}
            aria-describedby="form-name-hint"
            placeholder="Seu nome"
          />
          <small id="form-name-hint">
            {nome.length > 0 && !nomeValido ? "Informe pelo menos 2 caracteres." : " "}
          </small>
          <label htmlFor="form-email">E-mail</label>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={email.length > 0 && !emailValido}
            aria-describedby="form-email-hint"
            placeholder="voce@exemplo.com"
          />
          <small id="form-email-hint">
            {email.length > 0 && !emailValido ? "Digite um endereço de e-mail válido." : " "}
          </small>
          <button type="submit" disabled={!nomeValido || !emailValido}>Enviar formulário</button>
        </form>
      )}

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Adicione uma mensagem de erro</h3>
        <p>
          Inclua um campo de senha, mantenha-o controlado pelo estado e desative
          o envio enquanto a senha tiver menos de oito caracteres.
        </p>
      </section>
    </article>
  );
}
