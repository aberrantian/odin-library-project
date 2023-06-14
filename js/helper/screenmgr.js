import { createLibraryScreen } from "../screens/library-screen.js";
import { doc } from "./doc.js";

export const screenTemplates = {
    library: createLibraryScreen
}

export const screens = {
    library: function() {
        return doc.get('libraryScreen');
    }
}

export function setScreen(screen = doc.get('libraryScreen')) {
    for (const screen in screens) {
        screens[screen]().hidden = true;
    }

    screen.hidden = false;
}