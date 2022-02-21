import React from "react";

function handleClick() {
  console.log('Clicou no botão!');
}

class App extends React.Component {
  render() {
    return <>
      <button onClick={handleClick }>Botão 1</button>
      <button onClick={handleClick }>Botão 2</button>
      <button onClick={handleClick }>Botão 3</button>
    </>
  }
}

export default App;
