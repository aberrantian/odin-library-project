import { doc } from "../helper/doc.js";
import { toggleScreen } from "../helper/screenmgr.js";
import { editMode, removeMode, theme } from "../../main.js";

export function createLibraryScreen() {
    const libraryScreen = doc.new('div');
    libraryScreen.id = 'libraryScreen';
    
    const title = doc.new('h1');
    title.textContent = 'Library';
    
    const btnContainer = doc.new('div');
    btnContainer.id = 'btnContainer';

    const mainButtons = doc.new('div');
    mainButtons.id = 'mainButtons';
    
    const addBookBtn = doc.new('button');
    addBookBtn.textContent = 'Add';
    addBookBtn.type = 'button';
    addBookBtn.id = 'addBookBtn';
    addBookBtn.addEventListener('click', () => {
        if (editMode.state) {
            editMode.toggle();
        }

        if (removeMode.state) {
            removeMode.toggle();
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
    })
    
    const removeBookBtn = doc.new('button');
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.type = 'button';
    removeBookBtn.id = 'removeBookBtn';
    removeBookBtn.addEventListener('click', () => {
        removeMode.toggle();
    })

    const toggleThemeBtn = doc.new('button');
    toggleThemeBtn.textContent = 'frappe';
    toggleThemeBtn.type = 'button';
    toggleThemeBtn.id = 'toggleThemeBtn';
    toggleThemeBtn.addEventListener('click', () => {
        theme.toggle();
        console.log(theme.state)
    })
    
    mainButtons.append(addBookBtn, editBookBtn, removeBookBtn);
    btnContainer.append(mainButtons, toggleThemeBtn)
    
    const libraryGrid = doc.new('div');
    libraryGrid.id = 'library';
    
    libraryScreen.append(title, btnContainer, libraryGrid);

    return libraryScreen;
}
