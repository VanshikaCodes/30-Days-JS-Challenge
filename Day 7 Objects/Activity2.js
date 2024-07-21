const books = {
     title: 'Book One',
     author: 'Chanakya',
     publish: 1981,
     edition: 2004 
};

books.info = () => {
    console.log(books.author, books.title);
}

books.info()

books.yearChange = (publish) => {
    books.publish = 1980
    console.log(books.publish);
}

books.yearChange()