import { books } from "../../main.js";
import { Book } from "../objects/book.js";

export function addBook(title, author, pages, date, read) {
    if (arguments.length == 5) {
        const newBook = new Book(title, author, pages, date, read);
    } else {
        const newBook = new Book();
    }

    books.push(newBook);
}