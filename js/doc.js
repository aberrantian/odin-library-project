export const doc = {
    body: document.body,
    get: function(id) {
        return document.getElementById(id);
    },
    new: function(element) {
        return document.createElement(element);
    }
};