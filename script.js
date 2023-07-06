const container = document.querySelector('.card-container');
let myLibrary = [];

function Book(title, author, pages, read) {
    'use strick';
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
  
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    container.textContent = '';
    displayBook();

};

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i];
        const card = document.createElement('div');
        card.classList.add('card');
        const bookTitle = document.createElement('p');
        bookTitle.classList.add('bookTitle')
        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('bookAuthor')
        const bookPages = document.createElement('p');
        bookPages.classList.add('bookPages')
        const bookRead = document.createElement('p');
        bookRead.classList.add('bookRead')

        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookRead.textContent = `Read: ${myLibrary[i].read}`;

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);

        container.appendChild(card);

    
    }

}