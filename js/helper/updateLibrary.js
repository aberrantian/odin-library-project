import { doc } from "./doc.js";
import { books } from "../../main.js";

function p(string = 'hello world') {
    let p = doc.new('p')
    p.textContent = string;
    return p;
}

export function updateLibrary(library = doc.get('library')) {
    if (library) {
        while (library.firstChild) {
            library.remove(library.firstChild);
        }
        
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
            card.id = index + 1;
        }
        
        cards.forEach(card => {
            library.appendChild(card);
        })
    } else {
        console.warn(`library is ${library}`);
    }
}