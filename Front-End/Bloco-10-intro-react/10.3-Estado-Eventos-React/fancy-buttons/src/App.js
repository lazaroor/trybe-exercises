import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicou no botão!');
    console.log(this);
  }
  render() {
    console.log(this);
    return <>
      <button onClick={this.handleClick}>Botão 1</button>
      <button onClick={this.handleClick}>Botão 2</button>
      <button onClick={this.handleClick}>Botão 3</button>
    </>
  }
}

export default App;
