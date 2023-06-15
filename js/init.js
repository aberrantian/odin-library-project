import { screenTemplates, setScreen } from "./helper/screenmgr.js";
import { dummyContent } from "./helper/dummyContent.js";
import { updateTable } from "./helper/updateTable.js";

// setup library datebase
export let books = [];
dummyContent.forEach(book => {
    books.push(book);
});

// setup table contents;
// export let table = [];
// updateTable();

// setup screens
export function init() {
    for (const key in screenTemplates) {
        document.body.appendChild(screenTemplates[key]());
    }
    
    setScreen();
}