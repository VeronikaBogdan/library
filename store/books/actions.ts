export const BOOKS_REQUEST = 'BOOKS_REQUEST';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
export const BOOKS_FAILURE = 'BOOKS_FAILURE';

import { BooksRequest, BooksSuccess, BooksFailure, Book } from './types';

export const booksRequest = (): BooksRequest => ({
  type: BOOKS_REQUEST,
});

export const booksSuccess = (books: Book[]): BooksSuccess => ({
  type: BOOKS_SUCCESS,
  books,
});

export const booksFailure = (error: string): BooksFailure => ({
  type: BOOKS_FAILURE,
  error,
});
