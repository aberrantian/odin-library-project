import { doc } from "../helper/doc.js";

export function createAddScreen() {
    const addScreen = doc.new('div');
    addScreen.id = 'addScreen';

    return addScreen;
}