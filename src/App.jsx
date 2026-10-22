import { useState } from "react";
import JSX from "./components/JSX.jsx";
import Componentes from "./components/Componentes.jsx";
import Props from "./components/Props.jsx";
import VirtualDOM from "./components/VirtualDOM.jsx";
import ListasKeys from "./components/ListasKeys.jsx";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional.jsx";

const conceitos = [
  {
    id: "jsx",
    numero: "01",
    titulo: "JSX",
    descricao: "Escreva marcação declarativa junto da lógica da interface.",
    tempo: "4 min",
    Componente: JSX,
    fonte: "https://react.dev/learn/writing-markup-with-jsx",
  },
  {
    id: "componentes",
    numero: "02",
    titulo: "Componentes",
    descricao: "Monte interfaces com blocos reutilizáveis e fáceis de compor.",
    tempo: "5 min",
    Componente: Componentes,
    fonte: "https://react.dev/learn/your-first-component",
  },
  {
    id: "props",
    numero: "03",
    titulo: "Props",
    descricao: "Personalize componentes passando dados do pai para o filho.",
    tempo: "5 min",
    Componente: Props,
    fonte: "https://react.dev/learn/passing-props-to-a-component",
  },
  {
    id: "virtual-dom",
    numero: "04",
    titulo: "Virtual DOM",
    descricao: "Entenda como o React renderiza e aplica mudanças à interface.",
    tempo: "6 min",
    Componente: VirtualDOM,
    fonte: "https://react.dev/learn/render-and-commit",
  },
  {
    id: "listas",
    numero: "05",
    titulo: "Listas e keys",
    descricao: "Transforme coleções em elementos e identifique cada item.",
    tempo: "5 min",
    Componente: ListasKeys,
    fonte: "https://react.dev/learn/rendering-lists",
  },
  {
    id: "condicional",
    numero: "06",
    titulo: "Renderização condicional",
    descricao: "Mostre diferentes partes da interface conforme o estado.",
    tempo: "4 min",
    Componente: RenderizacaoCondicional,
    fonte: "https://react.dev/learn/conditional-rendering",
  },
];

export default function App() {
  const [selecionado, setSelecionado] = useState(null);
  const [concluidos, setConcluidos] = useState([]);
  const atual = conceitos.find((item) => item.id === selecionado);
  const indiceAtual = conceitos.findIndex((item) => item.id === selecionado);
  const progresso = Math.round((concluidos.length / conceitos.length) * 100);

  function alternarConclusao(id) {
    setConcluidos((itens) =>
      itens.includes(id) ? itens.filter((item) => item !== id) : [...itens, id],
    );
  }

  function voltarAoAcervo() {
    setSelecionado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navegarParaConceito(id) {
    setSelecionado(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (atual) {
    const PaginaConceito = atual.Componente;
    const anterior = conceitos[indiceAtual - 1];
    const proximo = conceitos[indiceAtual + 1];
    const concluido = concluidos.includes(atual.id);

    return (
      <div className="site-shell">
        <header className="topbar">
          <button className="brand brand-button" onClick={voltarAoAcervo} aria-label="Voltar ao acervo React em prática">
            <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
            <span>react<span className="brand-light">em prática</span></span>
          </button>
          <button className="back-button" onClick={voltarAoAcervo}>
            <span aria-hidden="true">←</span> Acervo de estudos
          </button>
        </header>

        <main className="page lesson-page">
          <div className="lesson-topline">
            <span className="eyebrow">TRILHA DE FUNDAMENTOS</span>
            <span className="lesson-count">{atual.numero} <span>/ 06</span></span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Progresso dos estudos"
            aria-valuenow={progresso}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span style={{ width: `${progresso}%` }} />
          </div>

          <PaginaConceito />

          <section className="lesson-source" aria-label="Referência oficial">
            <span className="source-icon" aria-hidden="true">↗</span>
            <div>
              <strong>Quer se aprofundar?</strong>
              <p>Consulte a documentação oficial do React para este tema.</p>
            </div>
            <a href={atual.fonte} target="_blank" rel="noreferrer">
              Abrir documentação <span aria-hidden="true">↗</span>
            </a>
          </section>

          <div className="lesson-controls">
            <button
              className={`complete-button${concluido ? " is-complete" : ""}`}
              onClick={() => alternarConclusao(atual.id)}
              aria-pressed={concluido}
            >
              <span aria-hidden="true">{concluido ? "✓" : "○"}</span>
              {concluido ? "Conceito concluído" : "Marcar como concluído"}
            </button>
            <nav className="lesson-pagination" aria-label="Navegação entre conceitos">
              {anterior && (
                <button className="pagination-button" onClick={() => navegarParaConceito(anterior.id)}>
                  <span>← Anterior</span>
                  <strong>{anterior.titulo}</strong>
                </button>
              )}
              {proximo && (
                <button className="pagination-button pagination-next" onClick={() => navegarParaConceito(proximo.id)}>
                  <span>Próximo →</span>
                  <strong>{proximo.titulo}</strong>
                </button>
              )}
            </nav>
          </div>
        </main>
        <footer className="site-footer">
          Conteúdo de estudo baseado na <a href="https://react.dev/learn" target="_blank" rel="noreferrer">documentação oficial do React</a>.
        </footer>
      </div>
    );
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>react<span className="brand-light">em prática</span></span>
        </div>
        <a className="topbar-link" href="https://react.dev/learn" target="_blank" rel="noreferrer">
          Documentação React <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main className="page home-page">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> TRILHA DE APRENDIZADO</span>
            <h1>React fica mais claro<br />quando você <span>pratica.</span></h1>
            <p>
              Um acervo direto ao ponto para entender os fundamentos do React.
              Explore cada conceito, teste os exemplos e aprenda construindo.
            </p>
            <a className="hero-link" href="#conceitos">
              Começar a estudar <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-card" aria-label="Resumo da trilha">
            <div className="hero-card-top">
              <span className="hero-card-icon" aria-hidden="true">✳</span>
              <span className="hero-card-label">SUA TRILHA</span>
            </div>
            <strong>Fundamentos<br />do React</strong>
            <div className="hero-card-meta">
              <span>06 conceitos</span><span className="meta-dot" /><span>29 min</span>
            </div>
            <div className="mini-progress"><span style={{ width: `${progresso}%` }} /></div>
            <span className="hero-progress-label">{concluidos.length} de 6 concluídos</span>
            <span className="hero-spark" aria-hidden="true">✳</span>
          </div>
          <span className="hero-decoration hero-decoration-one" aria-hidden="true" />
          <span className="hero-decoration hero-decoration-two" aria-hidden="true" />
        </section>

        <section className="catalog" id="conceitos">
          <div className="section-heading">
            <div>
              <span className="eyebrow">O SEU PONTO DE PARTIDA</span>
              <h2>Explore os conceitos</h2>
            </div>
            <span className="section-count">06 AULAS <span>·</span> COM EXEMPLOS INTERATIVOS</span>
          </div>

          <div className="concept-grid">
            {conceitos.map(({ id, numero, titulo, descricao, tempo }) => {
              const concluido = concluidos.includes(id);
              return (
                <button
                  className={`concept-card${concluido ? " card-complete" : ""}`}
                  key={id}
                  onClick={() => {
                    navegarParaConceito(id);
                  }}
                >
                  <span className="card-topline">
                    <span className="number">{numero}</span>
                    {concluido ? <span className="card-status">✓ CONCLUÍDO</span> : <span className="card-time">{tempo}</span>}
                  </span>
                  <span className="card-title">{titulo}</span>
                  <span className="card-description">{descricao}</span>
                  <span className="card-action">Estudar conceito <span aria-hidden="true">↗</span></span>
                </button>
              );
            })}
          </div>
        </section>
        <footer className="site-footer">
          Aprenda no seu ritmo. <span>Um conceito de cada vez.</span>
        </footer>
      </main>
    </div>
  );
}
