// Exercício 1 consiste em criar um app React com o comando npx
// Exercícios 2 consiste em criar array de compromissos e passar utilizando map
// para a função Task que gera os itens da lista
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Ir ao mercado', 'Cozinhar', 'limpar quarto']
  return (
    <ul>
      {compromissos.map((compromisso) => Task(compromisso))}
    </ul>
  );
}

export default App;
