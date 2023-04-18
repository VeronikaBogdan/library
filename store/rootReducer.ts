import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';
import booksReducer from './books/reducer';
import bookByIdReducer from './bookById/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
  bookById: bookByIdReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
