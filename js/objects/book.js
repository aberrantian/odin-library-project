export function Book(title = 'title', author = 'author', pages = 300, date = 2000, read = false) {
    if (arguments.length == 5) {
        for (let index = 0; index < arguments.length; index++) {
            this.arguments[index] = arguments[index];
        }
    }
}
