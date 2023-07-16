const container = document.querySelector('.card-container');
const showFormBtn = document.querySelector('.show-form');
const form = document.querySelector('form');
const inputTitle = form.elements["book_title"];
const inputAuthor = form.elements["book_author"];
const inputPages = form.elements["book_pages"];
const inputRead = form.elements["book_read"];
const submitBook = document.querySelector('.submit-btn');
const readYes = document.getElementById('read-yes');
const readNo = document.getElementById('read-no')
submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    clearForm();
   form.classList.toggle('display-grid');

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
    // read = inputReadNo.value;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook();

};

function displayBook() {
    container.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].id = i;
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('card-index', `${i}`)
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('p');
        const removeBook = document.createElement('button');
        const readStatus = document.createElement('button');
        removeBook.classList.add('book-remove');
        readStatus.classList.add('book-add');

       
        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookRead.textContent = `Read: ${myLibrary[i].read}`;
        removeBook.textContent = 'Remove';
        readStatus.textContent = 'Read';

        removeBook.addEventListener('click', (e) => {
            const bookCard = e.target.parentElement
            const id = bookCard.getAttribute('card-index');
            myLibrary = myLibrary.filter(book => book.id !== Number(id));
            bookCard.remove();
            console.log(book.id !== Number(id))
        });
        readStatus.addEventListener('click', (e) => {
            bookRead.textContent = `Read: ${myLibrary[i].readStatus()}`
        });
       
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        card.appendChild(removeBook);
        card.appendChild(readStatus);



        container.appendChild(card);

   
    }

};

function clearForm() {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    readYes.checked = false;
    readNo.checked = false;
}




