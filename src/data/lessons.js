import JSX from "../components/JSX.jsx";
import Componentes from "../components/Componentes.jsx";
import Props from "../components/Props.jsx";
import VirtualDOM from "../components/VirtualDOM.jsx";
import ListasKeys from "../components/ListasKeys.jsx";
import RenderizacaoCondicional from "../components/RenderizacaoCondicional.jsx";
import Estado from "../components/Estado.jsx";
import Formularios from "../components/Formularios.jsx";
import UseEffectLesson from "../components/UseEffectLesson.jsx";
import ConsumoAPI from "../components/ConsumoAPI.jsx";
import ReactRouterLesson from "../components/ReactRouterLesson.jsx";

export const lessons = [
  {
    id: "jsx",
    numero: "01",
    titulo: "JSX",
    descricao: "Escreva marcação declarativa junto da lógica da interface.",
    tempo: "4 min",
    Componente: JSX,
    fonte: "https://react.dev/learn/writing-markup-with-jsx",
    practice: {
      title: "Descreva um elemento com JSX",
      prompt: "Escreva uma constante chamada elemento que renderize um título h1 com o texto “Olá, React!”.",
      goal: "Pratique marcação JSX armazenada em uma expressão JavaScript.",
      code: 'const elemento = <h1>Olá, React!</h1>;',
    },
  },
  {
    id: "componentes",
    numero: "02",
    titulo: "Componentes",
    descricao: "Monte interfaces com blocos reutilizáveis e fáceis de compor.",
    tempo: "5 min",
    Componente: Componentes,
    fonte: "https://react.dev/learn/your-first-component",
    practice: {
      title: "Crie um componente",
      prompt: "Declare a função Saudacao e retorne um parágrafo JSX com a mensagem “Olá!”.",
      goal: "Nomes de componentes começam com letra maiúscula e retornam JSX.",
      code: "function Saudacao() { return <p>Olá!</p>; }",
    },
  },
  {
    id: "props",
    numero: "03",
    titulo: "Props",
    descricao: "Personalize componentes passando dados do pai para o filho.",
    tempo: "5 min",
    Componente: Props,
    fonte: "https://react.dev/learn/passing-props-to-a-component",
    practice: {
      title: "Receba uma prop",
      prompt: "Crie Saudacao usando a prop nome e mostre esse valor dentro de um parágrafo.",
      goal: "Desestruture a prop no parâmetro e insira seu valor com chaves.",
      code: "function Saudacao({ nome }) { return <p>Olá, {nome}!</p>; }",
    },
  },
  {
    id: "virtual-dom",
    numero: "04",
    titulo: "Virtual DOM",
    descricao: "Entenda como o React renderiza e aplica mudanças à interface.",
    tempo: "6 min",
    Componente: VirtualDOM,
    fonte: "https://react.dev/learn/render-and-commit",
    practice: {
      title: "Guarde uma mudança no estado",
      prompt: "Escreva a declaração useState para guardar um nome inicial “Ana”.",
      goal: "O setter permite solicitar uma nova renderização; não altere o DOM manualmente.",
      code: 'const [nome, setNome] = useState("Ana");',
    },
  },
  {
    id: "listas",
    numero: "05",
    titulo: "Listas e keys",
    descricao: "Transforme coleções em elementos e identifique cada item.",
    tempo: "5 min",
    Componente: ListasKeys,
    fonte: "https://react.dev/learn/rendering-lists",
    practice: {
      title: "Renderize uma lista identificável",
      prompt: "Use map para criar um item li por elemento e use o id como key.",
      goal: "A key precisa ser única e estável para os itens irmãos.",
      code: "itens.map((item) => <li key={item.id}>{item.nome}</li>)",
    },
  },
  {
    id: "condicional",
    numero: "06",
    titulo: "Renderização condicional",
    descricao: "Mostre diferentes partes da interface conforme o estado.",
    tempo: "4 min",
    Componente: RenderizacaoCondicional,
    fonte: "https://react.dev/learn/conditional-rendering",
    practice: {
      title: "Escolha o que exibir",
      prompt: "Escreva um ternário JSX que mostre “Bem-vinda!” se logado, ou “Entre para continuar.” caso contrário.",
      goal: "A condição fica antes de ? e as opções ficam separadas por :.",
      code: '{logado ? <p>Bem-vinda!</p> : <p>Entre para continuar.</p>}',
    },
  },
  {
    id: "estado",
    numero: "07",
    titulo: "Estado e useState",
    descricao: "Guarde valores que mudam e atualize a interface com Hooks.",
    tempo: "6 min",
    Componente: Estado,
    fonte: "https://react.dev/learn/state-a-components-memory",
    practice: {
      title: "Declare estado inicial",
      prompt: "Use useState para criar contador com valor inicial zero e seu setter setContador.",
      goal: "useState retorna o valor atual e uma função para solicitar sua atualização.",
      code: "const [contador, setContador] = useState(0);",
    },
  },
  {
    id: "formularios",
    numero: "08",
    titulo: "Formulários",
    descricao: "Crie campos controlados, valide entradas e trate o envio.",
    tempo: "7 min",
    Componente: Formularios,
    fonte: "https://react.dev/reference/react-dom/components/input",
    practice: {
      title: "Controle o valor de um campo",
      prompt: "Escreva o input controlado de email com value e onChange para atualizar o estado.",
      goal: "O valor do campo vem do estado; onChange envia a nova entrada ao setter.",
      code: '<input value={email} onChange={(event) => setEmail(event.target.value)} />',
    },
  },
  {
    id: "useeffect",
    numero: "09",
    titulo: "useEffect",
    descricao: "Sincronize componentes com temporizadores e outros sistemas externos.",
    tempo: "7 min",
    Componente: UseEffectLesson,
    fonte: "https://react.dev/learn/synchronizing-with-effects",
    practice: {
      title: "Sincronize com uma dependência",
      prompt: "Escreva o início de um useEffect que sincronize o título do documento com o nome.",
      goal: "Declare useEffect no nível superior do componente e inclua nome nas dependências.",
      code: 'useEffect(() => { document.title = nome; }, [nome]);',
    },
  },
  {
    id: "api",
    numero: "10",
    titulo: "Consumo de APIs",
    descricao: "Busque dados externos e represente carregamento, sucesso e erro.",
    tempo: "8 min",
    Componente: ConsumoAPI,
    fonte: "https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch",
    practice: {
      title: "Faça uma requisição HTTP",
      prompt: "Use fetch e await para buscar a URL guardada em url e salvar a resposta em resposta.",
      goal: "A resposta HTTP ainda precisa ser verificada e convertida com response.json().",
      code: "const resposta = await fetch(url);",
    },
  },
  {
    id: "rotas",
    numero: "11",
    titulo: "React Router",
    descricao: "Ligue URLs a páginas e navegue sem recarregar o site.",
    tempo: "7 min",
    Componente: ReactRouterLesson,
    fonte: "https://reactrouter.com/start/declarative/installation",
    practice: {
      title: "Associe uma URL a uma página",
      prompt: "Declare uma Route para /perfil que renderize o componente Perfil.",
      goal: "Use o elemento JSX Perfil dentro da prop element.",
      code: '<Route path="/perfil" element={<Perfil />} />',
    },
  },
];
