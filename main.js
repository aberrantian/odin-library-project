// backend
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

// output
const list = document.getElementById('list');

function updateList() {
    myLibrary.forEach(book => {
        let listItem = document.createElement('li');

        let title = document.createElement('p');
        title.textContent = book.title;

        let author = document.createElement('p');
        author.textContent = book.author;

        let date = document.createElement('p');
        date.textContent = book.date;

        listItem.append(title, author, date);
        list.appendChild(listItem);
    });
}


const submitBtn = document.getElementById('form-button');
submitBtn.addEventListener('click', (event) => {
    const input = {
        form: document.getElementById('form'),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        date: document.getElementById('date').value
    }

    if (input.title != '' && input.author != '' && input.date != '') {
        addBookToLibrary(input.title, input.author, input.date);
        updateList();
        input.form.reset();
    } else {
        alert('Cannot submit incomplete form');
    }
})
