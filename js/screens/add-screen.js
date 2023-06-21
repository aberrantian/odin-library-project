import { doc } from "../helper/doc.js";
import { toggleScreen } from "../helper/screenmgr.js";
import { Book } from "../objects/book.js";
import { books } from "../../main.js";
import { updateLibrary } from "../helper/updateLibrary.js";

export function createAddScreen() {
    const addScreen = doc.new('div');
    addScreen.id = 'addScreen';

    const addForm = doc.new('form');
    addForm.id = 'addForm';

    addScreen.appendChild(addForm);


    const titleLabel = doc.new('label');
    titleLabel.textContent = 'Title';
    titleLabel.htmlFor = 'title';

    const title = doc.new('input');
    title.id = 'title';
    title.minLenght = 1;
    title.required = true;


    const authorLabel = doc.new('label');
    authorLabel.textContent = 'Author';
    authorLabel.htmlFor = 'author';
    
    const author = doc.new('input');
    author.id = 'author';


    const pagesLabel = doc.new('label');
    pagesLabel.textContent = 'Pages';
    pagesLabel.htmlFor = 'pages';
    
    const numberInputKeys = [
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Tab",
    ];

    const pages = doc.new('input');
    pages.id = 'pages';
    pages.type = 'number';
    pages.min = 0;
    pages.addEventListener('keydown', (event) => {
        if (isNaN(Number(event.key)) && !(numberInputKeys.includes(event.key))) {
            event.preventDefault();
        }
    })


    const dateLabel = doc.new('label');
    dateLabel.textContent = 'Date';
    dateLabel.htmlFor = 'date';
    
    const date = doc.new('input');
    date.id = 'date';
    date.type = 'number';
    date.min = 0;
    date.addEventListener('keydown', (event) => {
        if (isNaN(Number(event.key)) && !(numberInputKeys.includes(event.key))) {
            event.preventDefault();
        }
    })


    const readContainer = doc.new('div');
    readContainer.id = 'readContainer';

    const readLabel = doc.new('label');
    readLabel.textContent = 'Read';
    readLabel.htmlFor = 'read';
    
    const read = doc.new('input');
    read.id = 'read';
    read.type = 'checkbox';

    readContainer.append(readLabel, read);


    const btnContainer = doc.new('div');
    btnContainer.id = 'form-btnContainer';

    const cancelBtn = doc.new('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.id = 'cancelBtn';
    cancelBtn.addEventListener('click', () => {
        toggleScreen('addScreen');
        doc.get('addForm').reset();
        doc.get('addBookBtn').focus();
    })
    
    const submitBtn = doc.new('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Submit';
    submitBtn.id = 'submitBtn';
    submitBtn.addEventListener('click', (event) => {
        if (title.value.length <= 0) {
            title.focus();
            titleLabel.textContent = 'Title - Required';
            return;
        } else {
            titleLabel.textContent = 'Title';
        }
        
        if (author.value.length <= 0) {
            author.focus();
            authorLabel.textContent = 'Author - Required';
            return;
        } else {
            authorLabel.textContent = 'Author';
        }
        
        if (pages.value <= 0) {
            pages.focus();
            pagesLabel.textContent = 'Pages - Required';
            return;
        } else {
            pagesLabel.textContent = 'Pages';
        }

        if (date.value <= 0) {
            date.focus();
            dateLabel.textContent = 'Date - Required';
            return;
        } else {
            dateLabel.textContent = 'Date';
        }

        const newBook = new Book(
            title.value,
            author.value,
            Number(pages.value),
            Number(date.value),
            read.checked
        )

        books.unshift(newBook);
        updateLibrary();
        toggleScreen('addScreen');
        doc.get('addForm').reset();
    })

    btnContainer.append(cancelBtn, submitBtn);

    addForm.append(
        titleLabel, title,
        authorLabel, author,
        pagesLabel, pages,
        dateLabel, date,
        readContainer,
        btnContainer
        );

    return addScreen;
}