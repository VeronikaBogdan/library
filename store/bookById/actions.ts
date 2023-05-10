export const BOOK_BY_ID_REQUEST = 'BOOK_BY_ID_REQUEST';
export const BOOK_BY_ID_SUCCESS = 'BOOK_BY_ID_SUCCESS';
export const BOOK_BY_ID_FAILURE = 'BOOK_BY_ID_FAILURE';

import { BookByIdRequest, BookByIdSuccess, BookByIdFailure, BookById } from './types';

export const bookByIdRequest = (bookId: number): BookByIdRequest => ({
  type: BOOK_BY_ID_REQUEST,
  bookId,
});

export const bookByIdSuccess = (bookById: BookById): BookByIdSuccess => ({
  type: BOOK_BY_ID_SUCCESS,
  bookById: bookById,
});

export const bookByIdFailure = (error: string): BookByIdFailure => ({
  type: BOOK_BY_ID_FAILURE,
  error,
});
