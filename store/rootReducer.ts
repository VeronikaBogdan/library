import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export type CategoriesState = ReturnType<typeof rootReducer>;

export default rootReducer;
