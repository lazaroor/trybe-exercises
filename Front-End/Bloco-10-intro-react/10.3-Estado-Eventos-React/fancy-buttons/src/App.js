import React from "react";

class App extends React.Component {

  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    this.hidePwd = this.hidePwd.bind(this);
    this.state = {
      clickNumberOne: 0,
      clickNumberTwo: 0,
      clickNumberThree: 0,
      typePwd: 'Password',
    }
  }

  handleButtonOne() {
    // variável props obrigatória, coloca-se "_" para tirar a falta de declaração
    this.setState((estadoAnterior, _props) => ({
      clickNumberOne: estadoAnterior.clickNumberOne + 1,
    }))
  }

  handleButtonTwo() {
    this.setState((estadoAnterior, _props) => ({
      clickNumberTwo: estadoAnterior.clickNumberTwo + 1,
    }))
  }

  handleButtonThree() {
    this.setState((estadoAnterior, _props) => ({
      clickNumberThree: estadoAnterior.clickNumberThree + 1,
    }))
  }

  hidePwd() {
    if(this.state.typePwd === 'password'){
      this.setState({typePwd: 'text'})
    } else {
      this.setState({typePwd: 'password'})
    }
  }

  isEven(clickNumber) {
    return clickNumber % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { clickNumberOne, clickNumberTwo, clickNumberThree } = this.state;
    return <>
      <button 
      onClick={this.handleButtonOne}
      style={{ backgroundColor: this.isEven(clickNumberOne) }}
      >
        {this.state.clickNumberOne}
      </button>
      <button 
        onClick={this.handleButtonTwo}
        style={{ backgroundColor: this.isEven(clickNumberTwo) }}
      >
        {this.state.clickNumberTwo}
      </button>
      <button 
        onClick={this.handleButtonThree}
        style={{ backgroundColor: this.isEven(clickNumberThree) }}
      >
        {this.state.clickNumberThree}
      </button>

      <input type={this.state.typePwd}></input>
      <button onClick={this.hidePwd}>Mostrar</button>
    </>
  }
}

export default App;
