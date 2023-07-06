const container = document.querySelector('.container');
let myLibrary = [];

function Book(title, author, pages, read) {
    'use strick';
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
  
function addBooktoLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book)
    
};