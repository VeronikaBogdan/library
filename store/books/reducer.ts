import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE } from './actions';

import { BooksActions, BooksState } from './types';

const initialState: BooksState = {
  books: [],
  pending: true,
  token: '',
  error: null,
};

export default (state = initialState, action: BooksActions) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return { ...state, pending: true };
    case BOOKS_SUCCESS:
      const { books } = action;
      return { ...state, books: books, pending: false, error: null };
    case BOOKS_FAILURE:
      const { error } = action;
      return { ...state, pending: false, error: error };
    default:
      return { ...state };
  }
};
