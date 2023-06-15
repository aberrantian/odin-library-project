import { doc } from "../helper/doc.js";

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
    
    const editBookBtn = doc.new('button');
    editBookBtn.textContent = 'Edit';
    editBookBtn.type = 'button';
    
    const removeBookBtn = doc.new('button');
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.type = 'button';
    
    btnContainer.append(addBookBtn, editBookBtn, removeBookBtn);
    
    const libraryGrid = doc.new('div');
    libraryGrid.id = 'libraryTable';
    
    libraryScreen.append(title, btnContainer, libraryGrid);

    return libraryScreen;
}
