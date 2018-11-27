import { combineReducers } from 'redux';
import BooksRedcucer from './reducer_books';
import ActiveBookRedcucer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksRedcucer,
  activeBook: ActiveBookRedcucer
});

export default rootReducer;
