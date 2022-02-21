import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    this.state = {
      clickNumberOne: 0,
      clickNumberTwo: 0,
      clickNumberThree: 0,
    }
  }

  handleButtonOne() {
    // variável props obrigatória, coloca-se "_" para tirar a falta de declaração
    this.setState((estadoAnterior, _props) => ({
      clickNumberOne: estadoAnterior.clickNumberOne + 1,
    }))
  }

  handleButtonTwo() {
    // variável props obrigatória, coloca-se "_" para tirar a falta de declaração
    this.setState((estadoAnterior, _props) => ({
      clickNumberTwo: estadoAnterior.clickNumberTwo + 1,
    }))
  }

  handleButtonThree() {
    // variável props obrigatória, coloca-se "_" para tirar a falta de declaração
    this.setState((estadoAnterior, _props) => ({
      clickNumberThree: estadoAnterior.clickNumberThree + 1,
    }))
  }

  render() {
    console.log(this);
    return <>
      <button onClick={this.handleButtonOne}>{this.state.clickNumberOne}</button>
      <button onClick={this.handleButtonTwo}>{this.state.clickNumberTwo}</button>
      <button onClick={this.handleButtonThree}>{this.state.clickNumberThree}</button>
    </>
  }
}

export default App;
