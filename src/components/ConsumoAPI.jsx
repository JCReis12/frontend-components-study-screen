import { useEffect, useState } from "react";

const urlUsuario = "https://jsonplaceholder.typicode.com/users/1";

export default function ConsumoAPI() {
  const [tentativa, setTentativa] = useState(0);
  const [estado, setEstado] = useState({ status: "loading", usuario: null, erro: "" });

  useEffect(() => {
    const controller = new AbortController();

    async function carregarUsuario() {
      setEstado({ status: "loading", usuario: null, erro: "" });

      try {
        const resposta = await fetch(urlUsuario, { signal: controller.signal });
        if (!resposta.ok) {
          throw new Error(`A API respondeu com status ${resposta.status}.`);
        }
        const usuario = await resposta.json();
        setEstado({ status: "success", usuario, erro: "" });
      } catch (erro) {
        if (erro.name === "AbortError") return;
        setEstado({
          status: "error",
          usuario: null,
          erro: erro instanceof Error ? erro.message : "Não foi possível carregar os dados.",
        });
      }
    }

    carregarUsuario();
    return () => controller.abort();
  }, [tentativa]);

  return (
    <article className="concept">
      <span className="number">10</span>
      <h2>Consumo de APIs</h2>
      <p>
        Uma API HTTP permite que aplicações troquem dados. No React, organize
        a experiência para representar os estados de carregamento, sucesso e
        erro. A resposta precisa ser verificada antes de interpretar seu JSON,
        e requisições podem ser canceladas quando o componente deixa de precisar delas.
      </p>

      <h3>Requisição com tratamento de resposta</h3>
      <pre><code>{`const resposta = await fetch(url, { signal });
if (!resposta.ok) throw new Error("Falha na API");
const dados = await resposta.json();`}</code></pre>
      <p className="note">
        <code>fetch</code> não rejeita automaticamente para respostas HTTP como
        404. Verifique <code>response.ok</code>, mostre um estado de erro útil
        e use <code>AbortController</code> para cancelar uma solicitação
        obsoleta. Este exemplo consulta dados públicos fictícios do JSONPlaceholder.
      </p>

      <h3>Experimente o ciclo da requisição</h3>
      <div className="api-demo" aria-live="polite" aria-busy={estado.status === "loading"}>
        {estado.status === "loading" && (
          <p className="api-loading"><span className="loading-dot" /> Consultando a API...</p>
        )}
        {estado.status === "error" && (
          <div className="api-error" role="alert">
            <strong>Não foi possível carregar.</strong>
            <p>{estado.erro}</p>
            <button onClick={() => setTentativa((valor) => valor + 1)}>Tentar novamente</button>
          </div>
        )}
        {estado.status === "success" && (
          <div className="example-output">
            <span className="api-kicker">RESPOSTA DA API · JSONPLACEHOLDER</span>
            <h3>{estado.usuario.name}</h3>
            <p>{estado.usuario.email}</p>
            <p>{estado.usuario.company.name}</p>
            <button onClick={() => setTentativa((valor) => valor + 1)}>Recarregar dados</button>
          </div>
        )}
      </div>

      <section className="exercise-box">
        <span className="exercise-label">DESAFIO RÁPIDO</span>
        <h3>Mostre apenas os dados necessários</h3>
        <p>
          Altere a interface para mostrar também a cidade do usuário e exiba
          uma mensagem diferente enquanto a requisição estiver em andamento.
        </p>
      </section>
    </article>
  );
}
