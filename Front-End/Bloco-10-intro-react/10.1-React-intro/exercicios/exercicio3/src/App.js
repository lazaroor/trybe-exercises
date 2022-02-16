// Exercício 3 foi necessário fazer a criação dos arquivos Footer, Content e Header
// Realizar a importação e fazer o uso de HOF para colocar exportar os itens de um array
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <main className='main'>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  );
}

export default App;
