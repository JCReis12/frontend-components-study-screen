import { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import CodePractice from "./components/CodePractice.jsx";
import { lessons } from "./data/lessons.js";

function SiteHeader({ detail = false }) {
  return (
    <header className="topbar">
      <Link className="brand brand-button" to="/" aria-label="React em prática: início">
        <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
        <span>react<span className="brand-light">em prática</span></span>
      </Link>
      {detail ? (
        <Link className="back-button" to="/">
          <span aria-hidden="true">←</span> Acervo de estudos
        </Link>
      ) : (
        <a className="topbar-link" href="https://react.dev/learn" target="_blank" rel="noreferrer">
          Documentação React <span aria-hidden="true">↗</span>
        </a>
      )}
    </header>
  );
}

function HomePage({ completed }) {
  const progresso = Math.round((completed.length / lessons.length) * 100);

  return (
    <div className="site-shell">
      <SiteHeader />
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
              <span>{lessons.length} conceitos</span><span className="meta-dot" /><span>64 min</span>
            </div>
            <div className="mini-progress"><span style={{ width: `${progresso}%` }} /></div>
            <span className="hero-progress-label">{completed.length} de {lessons.length} concluídos</span>
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
            <span className="section-count">11 AULAS <span>·</span> EXEMPLOS E PRÁTICA DE CÓDIGO</span>
          </div>

          <div className="concept-grid">
            {lessons.map(({ id, numero, titulo, descricao, tempo }) => {
              const concluido = completed.includes(id);
              return (
                <Link
                  className={`concept-card${concluido ? " card-complete" : ""}`}
                  key={id}
                  to={`/aula/${id}`}
                >
                  <span className="card-topline">
                    <span className="number">{numero}</span>
                    {concluido ? <span className="card-status">✓ CONCLUÍDO</span> : <span className="card-time">{tempo}</span>}
                  </span>
                  <span className="card-title">{titulo}</span>
                  <span className="card-description">{descricao}</span>
                  <span className="card-action">Estudar conceito <span aria-hidden="true">↗</span></span>
                </Link>
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

function LessonPage({ completed, onComplete }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lessonIndex = lessons.findIndex((item) => item.id === lessonId);
  const lesson = lessons[lessonIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lessonId]);

  if (!lesson) return <Navigate to="/" replace />;

  const Lesson = lesson.Componente;
  const previous = lessons[lessonIndex - 1];
  const next = lessons[lessonIndex + 1];
  const isComplete = completed.includes(lesson.id);
  const progresso = Math.round((completed.length / lessons.length) * 100);

  function toggleCompletion() {
    onComplete(lesson.id, !isComplete);
  }

  return (
    <div className="site-shell">
      <SiteHeader detail />
      <main className="page lesson-page">
        <div className="lesson-topline">
          <span className="eyebrow">TRILHA DE FUNDAMENTOS</span>
          <span className="lesson-count">{lesson.numero} <span>/ {String(lessons.length).padStart(2, "0")}</span></span>
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

        <Lesson />

        <section className="practice-invitation">
          <div>
            <span className="exercise-label">HORA DE PRATICAR</span>
            <h2>Teste o que você aprendeu</h2>
            <p>Abra o editor, escreva um pequeno exemplo e receba uma dica se fizer uma pausa.</p>
          </div>
          <Link className="practice-launch-button" to={`/praticar/${lesson.id}`}>
            Praticar <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="lesson-source" aria-label="Referência oficial">
          <span className="source-icon" aria-hidden="true">↗</span>
          <div>
            <strong>Quer se aprofundar?</strong>
            <p>Consulte a documentação oficial para este tema.</p>
          </div>
          <a href={lesson.fonte} target="_blank" rel="noreferrer">
            Abrir documentação <span aria-hidden="true">↗</span>
          </a>
        </section>

        <div className="lesson-controls">
          <button
            className={`complete-button${isComplete ? " is-complete" : ""}`}
            onClick={toggleCompletion}
            aria-pressed={isComplete}
          >
            <span aria-hidden="true">{isComplete ? "✓" : "○"}</span>
            {isComplete ? "Conceito concluído" : "Marcar como concluído"}
          </button>
          <nav className="lesson-pagination" aria-label="Navegação entre conceitos">
            {previous && (
              <Link className="pagination-button" to={`/aula/${previous.id}`}>
                <span>← Anterior</span>
                <strong>{previous.titulo}</strong>
              </Link>
            )}
            {next && (
              <Link className="pagination-button pagination-next" to={`/aula/${next.id}`}>
                <span>Próximo →</span>
                <strong>{next.titulo}</strong>
              </Link>
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

function PracticePage({ onComplete }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessons.find((item) => item.id === lessonId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lessonId]);

  if (!lesson) return <Navigate to="/" replace />;

  return (
    <div className="site-shell practice-shell">
      <SiteHeader detail />
      <CodePractice
        lesson={lesson}
        onBack={() => navigate(`/aula/${lesson.id}`)}
        onComplete={() => {
          onComplete(lesson.id, true);
          navigate(`/aula/${lesson.id}`);
        }}
      />
    </div>
  );
}

export default function App() {
  const [completed, setCompleted] = useState([]);

  function updateCompletion(id, isComplete) {
    setCompleted((items) => {
      if (isComplete) return items.includes(id) ? items : [...items, id];
      return items.filter((item) => item !== id);
    });
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage completed={completed} />} />
      <Route path="/aula/:lessonId" element={<LessonPage completed={completed} onComplete={updateCompletion} />} />
      <Route path="/praticar/:lessonId" element={<PracticePage onComplete={updateCompletion} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
