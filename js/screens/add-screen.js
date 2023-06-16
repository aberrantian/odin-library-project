import { doc } from "../helper/doc.js";

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


    const readLabel = doc.new('label');
    readLabel.textContent = 'Read';
    readLabel.htmlFor = 'read';
    
    const read = doc.new('input');
    read.id = 'read';
    read.type = 'checkbox';


    const cancelBtn = doc.new('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    
    const submitBtn = doc.new('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Submit';

    addForm.append(
        titleLabel, title,
        authorLabel, author,
        pagesLabel, pages,
        dateLabel, date,
        readLabel, read
        );

    return addScreen;
}