const books = require('../dia-4-es6-reduce/arrayApoio');

const expectedResult = 43;

//Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  const numberOfAuthor = books.length;
  const ageOfAuthors = books.reduce((acc, currElement) => acc += currElement.releaseYear - currElement.author.birthYear, 0);  return ageOfAuthors/numberOfAuthor;
}

console.log(averageAge());