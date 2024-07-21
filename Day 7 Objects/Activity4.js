// const books = {
//     title: 'Book One',
//     author: 'Chanakya',
//     publish: 1981,
//     edition: 2004
// };

// books.info = () => {
//     return this.title
// }


// console.log(books.info());

let book1 = {
    title: "Playing it my way",
    author: "Sachin Tendulkar",
    year: 2020,
    funct: function () {
        return `Book title is ${this.title} and author is ${this.author} and the book year is ${this.year}`;
    },
};

let output = book1.funct();
console.log(output);

