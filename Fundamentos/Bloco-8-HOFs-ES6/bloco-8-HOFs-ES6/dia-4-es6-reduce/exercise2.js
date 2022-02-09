const books = require('../dia-4-es6-reduce/arrayApoio')

// Adicione o código do exercício aqui:

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, currElement, index) => {
    if(index < books.length - 1) acc += `${currElement.author.name}, `;
    else { acc += `${currElement.author.name}.`;};
    return acc
  }, '');
}

console.log(reduceNames());