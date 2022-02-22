import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = { 
      testState: '',
     }
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({testState: event.target.value})
  }

  render() {
    return(
      <div>
        <form>
          <select>
            <option value="teste">teste</option>
          </select>
          <label> Teste
            <textarea onChange={this.handleChange} name="resumo" />
          </label>
          <input type ="checkbox"></input>
        </form>
      </div>
    ) 
  }
}

export default Form;
