// Exercício 1 consiste em criar um app React com o comando npx
// Exercícios 2 consiste em criar array de compromissos e passar utilizando map
// para a função Task que gera os itens da lista
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Estudar react', 'Realizar exercicios', 'Ler o livro código limpo']

function App() {
  return (
    <ul>
      {compromissos.map((element) => {
        return Task(element);
      })}
    </ul>
  );
}

export default App;
