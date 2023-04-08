import { useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { GRID } from '../../app-constants';

import { booksRequest } from '../../store/books/actions';
import { Book } from '../../store/books/types';
import { AppState } from '../../store/rootReducer';

import { CardGrid } from '../card-grid/card-grid';
import { CardList } from '../card-list/card-list';

const renderCardGrid: ListRenderItem<Book> = ({ item }) => (
  <CardGrid
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

type CardsProps = {
  viewChoice: string;
};

export const Cards = ({ viewChoice }: CardsProps) => {
  const dispatch = useDispatch();

  const { books } = useSelector((state: AppState) => state.books);

  useEffect(() => {
    dispatch(booksRequest());
  }, [dispatch]);

  return (
    <FlatList
      data={books}
      keyExtractor={(card: Book) => `${card.id}`}
      renderItem={viewChoice === GRID ? renderCardGrid : renderCardList}
    />
  );
};
