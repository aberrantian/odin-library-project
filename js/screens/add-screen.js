import { doc } from "../helper/doc.js";
import { toggleScreen } from "../helper/screenmgr.js";

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
    
    const pages = doc.new('input');
    pages.id = 'pages';
    pages.type = 'number';
    pages.min = 0;


    const dateLabel = doc.new('label');
    dateLabel.textContent = 'Date';
    dateLabel.htmlFor = 'date';
    
    const date = doc.new('input');
    date.id = 'date';
    date.type = 'number';
    date.min = 0;


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
        doc.get('addBookBtn').focus();
    })
    
    const submitBtn = doc.new('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Submit';
    submitBtn.id = 'submitBtn';

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