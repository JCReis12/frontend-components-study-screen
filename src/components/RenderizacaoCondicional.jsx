import { useState } from "react";

export default function RenderizacaoCondicional() {
  const [logado, setLogado] = useState(false);

  return (
    <article className="concept">
      <span className="number">06</span>
      <h2>Renderização condicional</h2>
      <p>
        A interface pode mostrar conteúdos diferentes de acordo com dados ou
        estado. Como JSX é usado dentro de JavaScript, use estruturas familiares
        como <code>if</code>, o operador ternário e <code>&amp;&amp;</code> para
        decidir o que renderizar.
      </p>

      <h3>Escolha o padrão certo</h3>
      <pre><code>{`// Duas alternativas
{logado
  ? <p>Bem-vindo!</p>
  : <p>Entre para continuar.</p>
}

// Conteúdo opcional
{logado && <p>Área exclusiva</p>}`}</code></pre>
      <p className="note">
        O ternário é útil quando há duas alternativas. <code>&amp;&amp;</code>
        inclui um trecho quando a condição é verdadeira. Se o lado esquerdo
        puder ser o número <code>0</code>, evite renderizá-lo diretamente com
        <code> &amp;&amp;</code> — o zero também pode aparecer na tela.
      </p>

      <h3>Experimente</h3>
      <p>Alterne o estado para atualizar a mensagem e revelar o conteúdo protegido.</p>
      <div className="practice-controls">
        <button
          onClick={() => setLogado((estadoAnterior) => !estadoAnterior)}
          aria-pressed={logado}
        >
          {logado ? "Sair da sessão" : "Entrar na sessão"}
        </button>
        <span className="card-time" role="status">
          Estado: {logado ? "autenticado" : "visitante"}
        </span>
      </div>

      <p className="example-output" aria-live="polite">
        {logado ? "Bem-vindo! Você entrou na sessão." : "Entre para continuar."}
      </p>
      {logado && (
        <p className="example-output">
          Conteúdo exclusivo: ótimo trabalho, você praticou renderização condicional.
        </p>
      )}

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Mostre um estado vazio</h3>
        <p>
          Crie uma terceira mensagem para quando o usuário estiver carregando.
          Use um estado separado e decida em qual ordem as condições devem ser
          verificadas.
        </p>
      </section>
    </article>
  );
}
