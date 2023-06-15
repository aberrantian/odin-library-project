import { doc } from "./doc.js";
import { books } from "../init.js";

export function updateTable() {
    const cell = doc.new('td');
    let cells = [];
    const row = doc.new('tr');
    let rows = [];
    
    let newTable = doc.new('table');
    let table = doc.get('libraryTable');

    const topRow = new row;
    

    books.forEach(book => {
        console.log(book);
    });

    table = newTable;
    table.id = 'libraryTable';
}