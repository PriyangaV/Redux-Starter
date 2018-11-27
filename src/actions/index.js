export function selectBook(book) {
    // selectBook is an ActionCreator and it needs to return an object. An object with an type property.
    // An action will always have two properties - type(describes the purpose of the action)/payload

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}