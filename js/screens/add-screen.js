import { doc } from "../helper/doc.js";
import { toggleScreen } from "../helper/screenmgr.js";
import { Book } from "../objects/book.js";
import { books, editMode } from "../../main.js";
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

    const titleInput = doc.new('input');
    titleInput.id = 'title';
    titleInput.minLenght = 1;
    titleInput.required = true;


    const authorLabel = doc.new('label');
    authorLabel.textContent = 'Author';
    authorLabel.htmlFor = 'author';
    
    const authorInput = doc.new('input');
    authorInput.id = 'author';


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

    const pagesInput = doc.new('input');
    pagesInput.id = 'pages';
    pagesInput.type = 'number';
    pagesInput.min = 0;
    pagesInput.addEventListener('keydown', (event) => {
        if (isNaN(Number(event.key)) && !(numberInputKeys.includes(event.key))) {
            event.preventDefault();
        } else if (event.key == " ") {
            event.preventDefault();
        }
    })


    const dateLabel = doc.new('label');
    dateLabel.textContent = 'Date';
    dateLabel.htmlFor = 'date';
    
    const dateInput = doc.new('input');
    dateInput.id = 'date';
    dateInput.type = 'number';
    dateInput.min = 0;
    dateInput.addEventListener('keydown', (event) => {
        if (isNaN(Number(event.key)) && !(numberInputKeys.includes(event.key))) {
            event.preventDefault();
        } else if (event.key == " ") {
            event.preventDefault();
        }
    })


    const readContainer = doc.new('div');
    readContainer.id = 'readContainer';

    const readLabel = doc.new('label');
    readLabel.textContent = 'Read';
    readLabel.htmlFor = 'read';
    
    const readInput = doc.new('input');
    readInput.id = 'read';
    readInput.type = 'checkbox';

    readContainer.append(readLabel, readInput);


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

        if (editMode.state) {
            books[editMode.target.id] = newBook;
        } else {
            books.unshift(newBook);
        }

        updateLibrary();
        toggleScreen('addScreen');
        doc.get('addForm').reset();
    })

    btnContainer.append(cancelBtn, submitBtn);

    addForm.append(
        titleLabel, titleInput,
        authorLabel, authorInput,
        pagesLabel, pagesInput,
        dateLabel, dateInput,
        readContainer,
        btnContainer
        );

    return addScreen;
}