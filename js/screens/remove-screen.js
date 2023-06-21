import { doc } from "../helper/doc.js";
import { removeMode, books } from "../../main.js";
import { toggleScreen } from "../helper/screenmgr.js";
import { updateLibrary } from "../helper/updateLibrary.js";

export function createRemoveScreen() {
    const removeScreen = doc.new('div');
    removeScreen.id = 'removeScreen';

    const removeScreenContent = doc.new('div');
    removeScreenContent.id = 'removeScreenContent';

    const confirmMessage = doc.new('p');
    confirmMessage.textContent ='Permanently delete the following book?';
    confirmMessage.id = 'confirmMessage';

    const bookInfo = doc.new('div');
    bookInfo.id = 'rmvBookInfo';

    const rmvBtnContainer = doc.new('div');
    rmvBtnContainer.id = 'rmvBtnContainer';

    const cancelRemoveBtn = doc.new('button');
    cancelRemoveBtn.type = 'button';
    cancelRemoveBtn.textContent = 'Cancel';
    cancelRemoveBtn.id = 'cancelRemoveBtn';
    cancelRemoveBtn.addEventListener('click', () => {
        toggleScreen('removeScreen');
    })


    const confirmRemoveBtn = doc.new('button');
    confirmRemoveBtn.type = 'button';
    confirmRemoveBtn.textContent = 'Confirm';
    confirmRemoveBtn.id = 'confirmRemoveBtn';
    confirmRemoveBtn.addEventListener('click', () => {
        const target = books[removeMode.target.id];
        books.splice(target, 1);
        updateLibrary();
        removeMode.toggle();
        toggleScreen('removeScreen');
    })

    rmvBtnContainer.append(cancelRemoveBtn, confirmRemoveBtn);
    removeScreenContent.append(confirmMessage, bookInfo, rmvBtnContainer);
    removeScreen.append(removeScreenContent);

    return removeScreen;
}