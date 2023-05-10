import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';
import booksReducer from './books/reducer';
import bookByIdReducer from './bookById/reducer';
import signUpReducer from './registration/reducer';
import signInReducer from './auth/reducer';
import commentReducer from './comments/reducer';
import bookingReducer from './booking/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
  bookById: bookByIdReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  comment: commentReducer,
  booking: bookingReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
