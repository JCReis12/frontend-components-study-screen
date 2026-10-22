import { useState } from "react";

export default function Estado() {
  const [contador, setContador] = useState(0);

  return (
    <article className="concept">
      <span className="number">07</span>
      <h2>Estado e useState</h2>
      <p>
        Estado é a memória de um componente: valores que mudam durante o uso e
        precisam aparecer na interface. O Hook <code>useState</code> devolve o
        valor atual e uma função para solicitar sua atualização. Ao atualizar
        estado, o React agenda uma nova renderização.
      </p>

      <h3>Atualize sem mutar</h3>
      <pre><code>{`const [contador, setContador] = useState(0);

function incrementar() {
  setContador((valorAnterior) => valorAnterior + 1);
}`}</code></pre>
      <p className="note">
        Uma renderização enxerga um retrato (snapshot) do estado. Quando o novo
        valor depende do anterior — por exemplo, em atualizações seguidas —
        prefira a forma funcional <code>setContador(valorAnterior =&gt; ...)</code>.
        Não altere diretamente o estado; crie e defina um novo valor.
      </p>

      <h3>Experimente o contador</h3>
      <div className="state-demo">
        <span className="state-count" aria-live="polite">{contador}</span>
        <div className="practice-controls">
          <button onClick={() => setContador((valor) => valor - 1)}>Diminuir</button>
          <button onClick={() => setContador((valor) => valor + 1)}>Incrementar</button>
          <button className="subtle-button" onClick={() => setContador(0)}>Zerar</button>
        </div>
      </div>

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Acrescente um segundo estado</h3>
        <p>
          Adicione um estado para guardar seu nome e mostre uma saudação junto
          ao contador. Pergunte-se: esse valor precisa ser lembrado entre renders?
        </p>
      </section>
    </article>
  );
}
