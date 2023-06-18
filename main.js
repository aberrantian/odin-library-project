import { screenTemplates, setScreen } from "./js/helper/screenmgr.js";
import { dummyContent } from "./js/helper/dummyContent.js";
import { updateLibrary } from "./js/helper/updateLibrary.js";

// setup library datebase
export let books = [];
dummyContent.forEach(book => {
    books.push(book);
});

// setup screens
for (const key in screenTemplates) {
    document.body.appendChild(screenTemplates[key]());
}

updateLibrary();
setScreen();