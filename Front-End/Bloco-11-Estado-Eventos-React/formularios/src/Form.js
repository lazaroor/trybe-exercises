import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = { 
      optionSelect: '',
      resumo: '',
      check: '',
     }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({[name]: value})
  }

  render() {
    return(
      <div>
        <form>
          <select>
            <option value="teste" name="optionSelect" onChange={this.handleChange}>teste</option>
            <option value="teste2" name="optionSelect" onChange={this.handleChange}>teste2</option>
          </select>
          <label> Teste
            <textarea onChange={this.handleChange} name="resumo" />
          </label>
          <input type ="checkbox" name="check" onChange={this.handleChange}></input>
        </form>
      </div>
    ) 
  }
}

export default Form;
