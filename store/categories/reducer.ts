import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from './actionTypes';

import { CategoriesActions, CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: [],
  pending: false,
  token: '',
  error: null,
};

const reducers = (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, pending: true };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        pending: false,
        token: action.payload.token,
        error: null,
      };
    case CATEGORIES_FAILURE:
      return { ...state, pending: false, token: '', error: action.payload.error };
    default:
      return { ...state };
  }
};

export default reducers;
