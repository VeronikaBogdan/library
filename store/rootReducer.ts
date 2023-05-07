import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';
import booksReducer from './books/reducer';
import bookByIdReducer from './bookById/reducer';
import signUpReducer from './registration/reducer';
import signInReducer from './auth/reducer';
import commentReducer from './comments/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
  bookById: bookByIdReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  comment: commentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
