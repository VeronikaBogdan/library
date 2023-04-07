import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';
import booksReducer from './books/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
