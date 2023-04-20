import { FlatList, ListRenderItem, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ALL_BOOKS, GRID } from '../../app-constants';

import { Book } from '../../store/books/types';
import { booksRequest } from '../../store/books/actions';
import { AppState } from '../../store/rootReducer';
import { categorySwitcher } from '../../utils/category-switcher';
import { sortBooksByRating } from '../../utils/books-by-rating-sorter';

import { CardGrid } from '../card-grid/card-grid';
import { CardList } from '../card-list/card-list';

import { NoBooksText, NoBooksView } from './styled-cards';

type CardsProps = {
  viewChoice: string;
  sortChoice: string;
  category: string;
};

export const Cards = ({ viewChoice, sortChoice, category }: CardsProps) => {
  const dispatch = useDispatch();
  const { books, pending } = useSelector((state: AppState) => state.books);

  const filteredBooksByCategory = books.filter((book: Book) => book.categories.includes(categorySwitcher(category)));

  let receivedBooks = category === ALL_BOOKS ? books : filteredBooksByCategory;

  sortBooksByRating(receivedBooks, sortChoice);

  if (!receivedBooks.length)
    return (
      <NoBooksView>
        <NoBooksText>В этой категории книг ещё нет</NoBooksText>
      </NoBooksView>
    );

  const renderCardGrid: ListRenderItem<Book> = ({ item }) => (
    <CardGrid
      id={item.id}
      category={category}
      image={item.image.url}
      rating={item.rating}
      title={item.title}
      authors={item.authors}
      issueYear={item.issueYear}
      button='Забронировать'
      list=''
      higlight='clean code'
    />
  );

  const renderCardList: ListRenderItem<Book> = ({ item }) => (
    <CardList
      id={item.id}
      category={category}
      image={item.image.url}
      rating={item.rating}
      title={item.title}
      authors={item.authors}
      issueYear={item.issueYear}
      button='Забронировать'
      list=''
      higlight='clean code'
    />
  );

  return (
    <FlatList
      data={receivedBooks}
      keyExtractor={(card: Book) => card.id.toString()}
      renderItem={viewChoice === GRID ? renderCardGrid : renderCardList}
      refreshControl={<RefreshControl refreshing={pending} onRefresh={() => dispatch(booksRequest())} />}
    />
  );
};
