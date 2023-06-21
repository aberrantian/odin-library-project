import { doc } from "../helper/doc.js";
import { toggleScreen } from "../helper/screenmgr.js";
import { editMode } from "../../main.js";

export function createLibraryScreen() {
    const libraryScreen = doc.new('div');
    libraryScreen.id = 'libraryScreen';
    
    const title = doc.new('h1');
    title.textContent = 'Library';
    
    const btnContainer = doc.new('div');
    btnContainer.id = 'btnContainer';
    
    const addBookBtn = doc.new('button');
    addBookBtn.textContent = 'Add';
    addBookBtn.type = 'button';
    addBookBtn.id = 'addBookBtn';
    addBookBtn.addEventListener('click', () => {
        if (editMode.state) {
            editMode.toggle();
        }
        toggleScreen('addScreen');
        doc.get('title').focus();
    })
    
    const editBookBtn = doc.new('button');
    editBookBtn.textContent = 'Edit';
    editBookBtn.type = 'button';
    editBookBtn.id = 'editBookBtn';
    editBookBtn.addEventListener('click', (event) => {
        editMode.toggle()
        // remember to make sure editmode and removemode can't be on at the same time
    })
    
    const removeBookBtn = doc.new('button');
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.type = 'button';
    removeBookBtn.id = 'removeBookBtn';
    removeBookBtn.addEventListener('click', (event) => {
        console.log(event)
    })
    
    btnContainer.append(addBookBtn, editBookBtn, removeBookBtn);
    
    const libraryGrid = doc.new('div');
    libraryGrid.id = 'library';
    
    libraryScreen.append(title, btnContainer, libraryGrid);

    return libraryScreen;
}
