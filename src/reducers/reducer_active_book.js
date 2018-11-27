// Reducers always get two arguments state/action

// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    // state += 1
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}