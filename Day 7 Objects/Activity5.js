const books = {
    title: 'Book One',
     genre: 'Fiction',
      publish: 1981,
     edition: 2004 
};

for (let key in books) {
    console.log(`${key} : ${books[key]}`);
  }
