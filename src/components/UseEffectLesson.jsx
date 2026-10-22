import { useEffect, useState } from "react";

export default function UseEffectLesson() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (!ativo) return undefined;

    const intervalo = window.setInterval(() => {
      setSegundos((valorAnterior) => valorAnterior + 1);
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, [ativo]);

  return (
    <article className="concept">
      <span className="number">09</span>
      <h2>useEffect</h2>
      <p>
        Effects permitem sincronizar um componente com algo externo ao React,
        como um temporizador, uma assinatura, uma API do navegador ou uma
        conexão. O Hook <code>useEffect</code> é executado após o commit; suas
        dependências determinam quando sincronizar novamente.
      </p>

      <h3>Configure e limpe um efeito</h3>
      <pre><code>{`useEffect(() => {
  const intervalo = setInterval(atualizar, 1000);
  return () => clearInterval(intervalo);
}, [ativo]);`}</code></pre>
      <p className="note">
        A função de limpeza desfaz o que o efeito configurou quando ele é
        substituído ou quando o componente sai da tela. Evite Effects para
        valores que podem ser calculados durante a renderização ou para ações
        que pertencem diretamente a um evento.
      </p>

      <h3>Experimente o temporizador</h3>
      <div className="state-demo">
        <span className="state-count timer-count" role="timer" aria-live="off">{segundos}<small> s</small></span>
        <div className="practice-controls">
          <button onClick={() => setAtivo((valor) => !valor)}>
            {ativo ? "Pausar" : "Iniciar"}
          </button>
          <button className="subtle-button" onClick={() => { setAtivo(false); setSegundos(0); }}>
            Reiniciar
          </button>
          <span className="card-time" role="status">{ativo ? "intervalo ativo" : "intervalo pausado"}</span>
        </div>
      </div>

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Sincronize o título da página</h3>
        <p>
          Imagine um efeito que atualiza <code>document.title</code> quando um
          contador muda. Qual valor precisa estar nas dependências para o título
          acompanhar o estado?
        </p>
      </section>
    </article>
  );
}
