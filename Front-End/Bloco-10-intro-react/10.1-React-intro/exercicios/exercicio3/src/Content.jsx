import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return conteudos.map((element) => {
      return <div key={element.conteudo} className="card">
        <h4 className="content">{`O conteúdo é: ${element.conteudo}`}</h4>
        <p className="status">{`status: ${element.status}`}</p>
        <p className="block">{`bloco: ${element.bloco}`}</p>
      </div>
    });
  }
}

export default Content;