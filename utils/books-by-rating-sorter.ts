import { ASCENDING } from '../app-constants';
import { Book } from '../store/books/types';

export const sortBooksByRating = (books: Book[], sortChoice: string) =>
  books.sort((firstBook, secondBook) =>
    sortChoice === ASCENDING ? firstBook.rating - secondBook.rating : secondBook.rating - firstBook.rating
  );
