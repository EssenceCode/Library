const container = document.querySelector('.card-container');
const showFormBtn = document.querySelector('.show-form');
const form = document.querySelector('form');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const inputRead = document.getElementById('read');
const submitBook = document.querySelector('.submit-btn');

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
})

showFormBtn.addEventListener('click', (e) => {
   form.classList.toggle('display-grid');
})

let myLibrary = [];

function Book(title, author, pages, read) {
    'use strick';
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readStatus = function() {
        if(this.read === 'yes') {
            return this.read = 'no';
        } else if(this.read === 'no') {
            return this.read = 'yes';
        }
    }
};
  
function addBookToLibrary(title, author, pages, read) {
    title = inputTitle.value;
    author = inputAuthor.value;
    pages = inputPages.value;
    read = inputRead.value;
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
        bookTitle.classList.add('bookTitle');
        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('bookAuthor');
        const bookPages = document.createElement('p');
        bookPages.classList.add('bookPages');
        const bookRead = document.createElement('p');
        bookRead.classList.add('bookRead');
        const removeBook = document.createElement('button');
        const readStatus = document.createElement('button');

       
        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookRead.textContent = `Read: ${myLibrary[i].read}`;
        removeBook.textContent = 'Remove';
        readStatus.textContent = 'Read';

        removeBook.addEventListener('click', (e) => {
            card.textContent = '';
        });
        readStatus.addEventListener('click', (e) => {
            bookRead.textContent = `Read: ${myLibrary[i].readStatus()}`
            console.log(myLibrary[i].read)
        })

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        card.appendChild(removeBook);
        card.appendChild(readStatus);



        container.appendChild(card);

   
    }

};