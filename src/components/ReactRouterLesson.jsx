import { Link } from "react-router-dom";

export default function ReactRouterLesson() {
  return (
    <article className="concept">
      <span className="number">11</span>
      <h2>Rotas com React Router</h2>
      <p>
        Roteamento associa caminhos da URL a telas da aplicação. O React Router
        permite navegar entre páginas sem recarregar o documento inteiro e
        mantém a URL sincronizada com a tela atual. Uma rota relaciona um
        caminho e um elemento React.
      </p>

      <h3>Declare rotas e links</h3>
      <pre><code>{`<BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
</BrowserRouter>

<Link to="/perfil">Abrir perfil</Link>`}</code></pre>
      <p className="note">
        <code>BrowserRouter</code> fornece o contexto de navegação,
        <code> Routes</code> seleciona uma rota, e <code>Route</code> associa
        caminho e elemento. Prefira <code>Link</code> a uma tag <code>a</code>
        para navegar internamente sem recarregar a página.
      </p>

      <h3>Veja rotas funcionando nesta plataforma</h3>
      <p>
        Esta própria trilha usa URLs para abrir aulas e exercícios. Experimente
        abrir outra página; observe que o navegador permanece dentro da aplicação.
      </p>
      <div className="router-demo">
        <Link to="/aula/props" className="router-link-card">
          <span className="route-method">LINK · /aula/props</span>
          <strong>Abrir a aula de Props <span aria-hidden="true">↗</span></strong>
        </Link>
        <Link to="/praticar/rotas" className="router-link-card">
          <span className="route-method">LINK · /praticar/rotas</span>
          <strong>Testar uma rota de prática <span aria-hidden="true">↗</span></strong>
        </Link>
      </div>

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Crie uma rota de detalhes</h3>
        <p>
          Como você declararia um caminho <code>/produtos/:id</code> e obteria
          o <code>id</code> da URL para exibir o produto correspondente?
        </p>
      </section>
    </article>
  );
}
