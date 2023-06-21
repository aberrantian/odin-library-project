import { createLibraryScreen } from "../screens/library-screen.js";
import { createAddScreen } from "../screens/add-screen.js";
import { createRemoveScreen } from "../screens/remove-screen.js";
import { doc } from "./doc.js";

export const screenTemplates = {
    library: createLibraryScreen,
    add: createAddScreen,
    remove: createRemoveScreen
}

export const screens = {
    library: function() {
        return doc.get('libraryScreen');
    },
    add: function() {
        return doc.get('addScreen');
    },
    remove: function() {
        return doc.get('removeScreen');
    }
}

export function setScreen(screen = doc.get('libraryScreen')) {
    for (const screen in screens) {
        screens[screen]().style.display = 'none';
    }

    screen.style.display = '';
}

export function toggleScreen(screen) {
    screen = doc.get(screen);
    if (screen.style.display == 'none') {
        screen.style.display = '';
    } else {
        screen.style.display = 'none'
    }
}