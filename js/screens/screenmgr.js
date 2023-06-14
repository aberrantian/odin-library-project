import { createLibraryScreen } from "./library-screen.js";
import { doc } from "../doc.js";

export const screenTemplates = {
    library: createLibraryScreen
}

export function setScreen(screen) {
    const screens = {
        library: doc.get('libraryScreen')
    }
    
    for (const screen in screens) {
        screen.hidden = true;
    }

    const defaultScreen = screen.library;

    const newScreen = screen || defaultScreen;
    newScreen.hidden = false;
}