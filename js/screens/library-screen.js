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
            editBookBtn.classList.remove('edit-on');
        }
        toggleScreen('addScreen');
        doc.get('title').focus();
    })
    
    const editBookBtn = doc.new('button');
    editBookBtn.textContent = 'Edit';
    editBookBtn.type = 'button';
    editBookBtn.id = 'editBookBtn';
    editBookBtn.addEventListener('click', () => {
        editMode.toggle()

        if (editMode.state) {
            editBookBtn.classList.add('edit-on')
        } else {
            editBookBtn.classList.remove('edit-on')
        }
    })
    
    const removeBookBtn = doc.new('button');
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.type = 'button';
    removeBookBtn.id = 'removeBookBtn';
    removeBookBtn.addEventListener('click', () => {
        console.log('remove a book')
    })
    
    btnContainer.append(addBookBtn, editBookBtn, removeBookBtn);
    
    const libraryGrid = doc.new('div');
    libraryGrid.id = 'library';
    
    libraryScreen.append(title, btnContainer, libraryGrid);

    return libraryScreen;
}
