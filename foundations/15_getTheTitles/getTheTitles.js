const books = [
  {
    title: 'The Stranger',
    author: 'Albert Camus'
  },
  {
    title: 'Bel Ami',
    author: 'Guy de Maupassant'
  }
]

const getTheTitles = function(books) {
	const	titles = books.map((book) => book.title);
	return (titles);
};

console.log(getTheTitles(books));

// // Do not edit below this line
// module.exports = getTheTitles;
