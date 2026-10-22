import { useEffect, useState } from "react";

export default function CodePractice({ lesson, onBack, onComplete }) {
  const [code, setCode] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const expectedCode = lesson.practice.code;
  const normalizedCode = code.trim().replace(/\s+/g, " ");
  const normalizedExpected = expectedCode.trim().replace(/\s+/g, " ");
  const isCorrect = normalizedCode === normalizedExpected;

  useEffect(() => {
    if (!code || isCorrect) return undefined;

    const timeout = window.setTimeout(() => setShowSuggestion(true), 1800);
    return () => window.clearTimeout(timeout);
  }, [code, isCorrect]);

  let matchingCharacters = 0;
  while (
    matchingCharacters < normalizedCode.length &&
    normalizedCode[matchingCharacters] === normalizedExpected[matchingCharacters]
  ) {
    matchingCharacters += 1;
  }
  const progress = isCorrect
    ? 100
    : Math.floor((matchingCharacters / normalizedExpected.length) * 100);
  const suggestion = expectedCode.startsWith(code) ? expectedCode.slice(code.length) : expectedCode;

  function handleKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setCode(expectedCode);
      setShowSuggestion(false);
    }
  }

  return (
    <main className="page practice-page">
      <div className="practice-heading">
        <button className="back-button" onClick={onBack}>
          <span aria-hidden="true">←</span> Voltar à aula
        </button>
        <span className="eyebrow">LABORATÓRIO DE CÓDIGO</span>
      </div>

      <section className="practice-challenge">
        <div className="practice-challenge-meta">
          <span>DESAFIO {lesson.numero}</span>
          <span>{lesson.titulo}</span>
        </div>
        <h1>{lesson.practice.title}</h1>
        <p>{lesson.practice.prompt}</p>
        <div className="practice-goal">
          <span aria-hidden="true">▸</span>
          <span>{lesson.practice.goal}</span>
        </div>
      </section>

      <section className="code-window" aria-label={`Editor de código para ${lesson.titulo}`}>
        <div className="code-window-bar">
          <div className="window-dots" aria-hidden="true">
            <span /><span /><span />
          </div>
          <span className="code-file-name">desafio-{lesson.id}.jsx</span>
          <span className={`editor-state${isCorrect ? " editor-state-success" : ""}`}>
            <span /> {isCorrect ? "RESOLVIDO" : "EDITANDO"}
          </span>
        </div>
        <div className="code-editor">
          <div className="line-numbers" aria-hidden="true">
            {Array.from({ length: Math.max(3, code.split("\n").length) }, (_, index) => (
              <span key={index}>{String(index + 1).padStart(2, "0")}</span>
            ))}
          </div>
          <textarea
            aria-label="Digite sua solução de código"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setShowSuggestion(false);
            }}
            onKeyDown={handleKeyDown}
            placeholder="// Escreva sua solução aqui..."
            rows={5}
          />
        </div>
        <div className="code-statusbar">
          <span>{code.split("\n").length} linha{code.split("\n").length === 1 ? "" : "s"}</span>
          <span>JavaScript · JSX</span>
        </div>
      </section>

      <div className="practice-progress-row">
        <span>Correspondência</span>
        <span>{progress}%</span>
      </div>
      <div className="practice-progress-track" role="progressbar" aria-label="Progresso do exercício" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
        <span style={{ width: `${progress}%` }} />
      </div>

      {showSuggestion && !isCorrect && (
        <aside className="autocomplete-card" aria-live="polite">
          <div>
            <span className="autocomplete-label"><span aria-hidden="true">✳</span> SUGESTÃO DE AUTOCOMPLETAR</span>
            <code>{suggestion || expectedCode}</code>
          </div>
          <button onClick={() => { setCode(expectedCode); setShowSuggestion(false); }}>
            Aceitar <kbd>Tab</kbd>
          </button>
        </aside>
      )}

      {isCorrect ? (
        <div className="practice-feedback practice-feedback-success" role="status">
          <span className="feedback-icon" aria-hidden="true">✓</span>
          <div>
            <strong>Boa! Desafio concluído.</strong>
            <p>Você escreveu o exemplo corretamente. Continue praticando um conceito por vez.</p>
          </div>
          <button onClick={onComplete}>Concluir e voltar à aula</button>
        </div>
      ) : (
        <div className="practice-feedback" aria-live="polite">
          <span className="feedback-icon" aria-hidden="true">⌁</span>
          <div>
            <strong>Digite o exemplo no editor</strong>
            <p>Se você pausar por um momento, aparece uma sugestão. Pressione Tab para aceitá-la.</p>
          </div>
          <button className="reset-code-button" onClick={() => { setCode(""); setShowSuggestion(false); }} disabled={!code}>
            Limpar
          </button>
        </div>
      )}

      <p className="practice-disclaimer">
        Este exercício confere o texto digitado; o código não é executado no navegador.
      </p>
    </main>
  );
}
