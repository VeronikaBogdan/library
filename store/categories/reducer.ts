import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from './actions';

import { CategoriesActions, CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: [],
  pending: true,
  token: '',
  error: false,
};

export default (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, pending: true };
    case CATEGORIES_SUCCESS:
      const { categories } = action;
      return { ...state, categories: categories, pending: false, error: null };
    case CATEGORIES_FAILURE:
      return { ...state, pending: false, error: true };
    default:
      return { ...state };
  }
};
