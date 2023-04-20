import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE } from './actions';

export interface Image {
  url: string | null;
}

export interface Booking {
  id: number;
  order: boolean;
  dateOrder: string | null;
  customerId: number | null;
  customerFirstName: string | null;
  customerLastName: string | null;
}

export interface Delivery {
  id: number;
  handed: boolean;
  dateHandedFrom: string | null;
  dateHandedTo: string | null;
  recipientId: number | null;
  recipientFirstName: string | null;
  recipientLastName: string | null;
}

export interface History {
  id: number | null;
  userId: number | null;
}

export interface Book {
  issueYear: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  image: Image | null;
  categories: string[] | null;
  id: number;
  booking: Booking | null;
  delivery: Delivery | null;
  histories: History[] | null;
}

export interface BooksState {
  books: Book[];
  pending: boolean;
  token: string;
  error: boolean | null;
}

export interface BooksRequest {
  type: typeof BOOKS_REQUEST;
}

export interface BooksSuccess {
  type: typeof BOOKS_SUCCESS;
  books: Book[];
}

export interface BooksFailure {
  type: typeof BOOKS_FAILURE;
  error: string;
}

export type BooksActions = BooksRequest | BooksSuccess | BooksFailure;
