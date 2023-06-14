import { screenTemplates, setScreen } from "./helper/screenmgr.js";

export function init() {
    for (const key in screenTemplates) {
        document.body.appendChild(screenTemplates[key]());
    }

    setScreen();
}