import { Book } from '../store/books/types';

export const filterBooksBySearch = (books: Book[], searchTitle: string) =>
  books.filter((book) => book.title.toUpperCase().includes(searchTitle.toUpperCase()));
