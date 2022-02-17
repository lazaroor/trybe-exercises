import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <div className="pokedex-container">  
        <Pokedex />
      </div>
    </main>
  );
}

export default App;
