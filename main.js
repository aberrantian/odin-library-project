import { screenTemplates, setScreen } from "./js/helper/screenmgr.js";
import { dummyContent } from "./js/helper/dummyContent.js";
import { updateLibrary } from "./js/helper/updateLibrary.js";
import { doc } from "./js/helper/doc.js";

// setup library datebase
export let books = [];
dummyContent.forEach(book => {
    books.push(book);
});

// setup screens
for (const key in screenTemplates) {
    document.body.appendChild(screenTemplates[key]());
}

export let editMode = {
    state: false,
    toggle: function() {
        if (removeMode.state) {
            removeMode.toggle()
        }
        
        editMode.state = !(editMode.state)

        if (editMode.state) {
            doc.get('editBookBtn').classList.add('edit-on')
        } else {
            doc.get('editBookBtn').classList.remove('edit-on')
        }
    },
    target: {
        id: null,
        get: function() {
            return editMode.target.id;
        },
        set: function(value) {
            editMode.target.id = value;
        }
    }
}

export let removeMode = {
    state: false,
    toggle: function() {
        if (editMode.state) {
            editMode.toggle()
        }
        
        removeMode.state = !(removeMode.state)
        
        if (removeMode.state) {
            doc.get('removeBookBtn').classList.add('remove-on')
        } else {
            doc.get('removeBookBtn').classList.remove('remove-on')
        }
    },
    target: null
}

updateLibrary();
setScreen();