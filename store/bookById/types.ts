import { BOOK_BY_ID_REQUEST, BOOK_BY_ID_SUCCESS, BOOK_BY_ID_FAILURE } from './actions';

import { Booking, Delivery, History, Image } from '../books/types';

export interface User {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface Comment {
  id: number | null;
  rating: number;
  text: string | null;
  createdAt: string;
  user: User;
}

export interface BookById {
  id: number;
  title: string;
  rating: number | null;
  issueYear: string | null;
  description: string | null;
  publish: string | null;
  pages: string | null;
  cover: string | null;
  weight: string | null;
  format: string | null;
  ISBN: string | null;
  producer: string | null;
  authors: string[] | null;
  images: Image[] | null;
  categories: string[] | null;
  comments: Comment[] | null;
  booking: Booking | null;
  delivery: Delivery | null;
  histories: History[] | null;
}

export interface BookByIdState {
  bookById: BookById;
  pending: boolean;
  token: string;
  error: boolean | null;
}

export interface BookByIdRequest {
  type: typeof BOOK_BY_ID_REQUEST;
  bookId: number;
}

export interface BookByIdSuccess {
  type: typeof BOOK_BY_ID_SUCCESS;
  bookById: BookById;
}

export interface BookByIdFailure {
  type: typeof BOOK_BY_ID_FAILURE;
  error: string;
}

export type BookByIdActions = BookByIdRequest | BookByIdSuccess | BookByIdFailure;
