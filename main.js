let myLibrary = [];

function Book(title, author, date) {
    this.title = title;
    this.author = author;
    this.date = date;
}

function addBookToLibrary(title, author, date) {
    let newBook = new Book(title, author, date);
    
    myLibrary.push(newBook);
}

// input setup
const currentYear = new Date().getFullYear();
const date = document.getElementById('date');
date.max = currentYear;
date.value = currentYear;