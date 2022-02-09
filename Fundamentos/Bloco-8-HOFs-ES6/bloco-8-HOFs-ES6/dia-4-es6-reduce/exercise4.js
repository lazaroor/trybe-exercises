const books = require('../dia-4-es6-reduce/arrayApoio');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, currElement) => {
    if(currElement.name.length > acc.name.length) return currElement;
    return acc;
  });
}

console.log(longestNamedBook());