import { doc } from "./doc.js";
import { books, editMode, removeMode } from "../../main.js";
import { toggleScreen } from "./screenmgr.js";

function p(string = 'hello world') {
    let p = doc.new('p')
    p.textContent = string;
    return p;
}

export function updateLibrary(library = doc.get('library')) {
    // clear library
    library.innerHTML = '';

    // populate library
    let cards = [];
    
    books.forEach(book => {
        let card = doc.new('div');
        const title = p(`${book.title}`);
        const author = p(`${book.author}`);
        const pages = p(`pages: ${book.pages}`);
        const date = p(`published in ${book.date}`);

        if (book.read) {
            card.classList.add('read');
        }

        card.classList.add('card');

        card.append(title, author, pages, date);
        cards.push(card);
    });

    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        card.id = index;
        card.addEventListener('click', (event) => {
            if (editMode.state) {
                const target = event.target.id;
                editMode.target.id = target;
                
                const book = books[target];
                doc.get('title').value = book.title;
                doc.get('author').value = book.author;
                doc.get('pages').value = book.pages;
                doc.get('date').value = book.date;
                doc.get('read').checked = book.read;
                toggleScreen('addScreen');
            } else if (removeMode.state) {
                const target = event.target;
                removeMode.target = target;

                const bookInfo = doc.get('rmvBookInfo');
                bookInfo.innerHTML = '';

                for (let index = 0; index < target.childNodes.length; index++) {
                    const p = doc.new('p');
                    p.textContent = target.childNodes[index].textContent;
                    bookInfo.append(p);
                }

                toggleScreen('removeScreen');
            }
        })
    }
    
    cards.forEach(card => {
        library.appendChild(card);
    })
}