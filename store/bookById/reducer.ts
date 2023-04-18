import { BOOK_BY_ID_REQUEST, BOOK_BY_ID_SUCCESS, BOOK_BY_ID_FAILURE } from './actions';

import { BookById, BookByIdActions, BookByIdState } from './types';

const initialState: BookByIdState = {
  bookById: {} as BookById,
  pending: true,
  token: '',
  error: null,
};

export default (state = initialState, action: BookByIdActions) => {
  switch (action.type) {
    case BOOK_BY_ID_REQUEST:
      return { ...state, pending: true, bookById: {} as BookById };
    case BOOK_BY_ID_SUCCESS:
      const { bookById: bookById } = action;
      return { ...state, bookById: bookById, pending: false };
    case BOOK_BY_ID_FAILURE:
      const { error } = action;
      return { ...state, pending: false, error: error };
    default:
      return { ...state };
  }
};
