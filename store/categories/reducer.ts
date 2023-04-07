import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from './actions';

import { CategoriesActions, CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: [],
  pending: false,
  token: '',
  error: null,
};

export default (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, pending: true };
    case CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload.categories, pending: false, error: null };
    case CATEGORIES_FAILURE:
      return { ...state, pending: false, error: action.payload.error };
    default:
      return { ...state };
  }
};
