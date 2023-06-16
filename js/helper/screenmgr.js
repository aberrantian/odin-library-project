import { createLibraryScreen } from "../screens/library-screen.js";
import { createAddScreen } from "../screens/add-screen.js";
import { doc } from "./doc.js";

export const screenTemplates = {
    library: createLibraryScreen,
    add: createAddScreen
}

export const screens = {
    library: function() {
        return doc.get('libraryScreen');
    },
    add: function() {
        return doc.get('addScreen');
    }
}

export function setScreen(screen = doc.get('libraryScreen')) {
    for (const screen in screens) {
        screens[screen]().hidden = true;
    }

    screen.hidden = false;
}