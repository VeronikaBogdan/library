import { useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNRestart from 'react-native-restart';

import { GRID } from '../../app-constants';

import { booksRequest } from '../../store/books/actions';
import { Book } from '../../store/books/types';
import { AppState } from '../../store/rootReducer';

import { CardGrid } from '../card-grid/card-grid';
import { CardList } from '../card-list/card-list';

type CardsProps = {
  viewChoice: string;
  category: string;
};

export const Cards = ({ viewChoice, category }: CardsProps) => {
  const dispatch = useDispatch();

  const { books, pending } = useSelector((state: AppState) => state.books);

  // console.log('pending books ', pending);

  useEffect(() => {
    dispatch(booksRequest());
  }, [dispatch]);

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
      data={books}
      keyExtractor={(card: Book) => card.id.toString()}
      renderItem={viewChoice === GRID ? renderCardGrid : renderCardList}
    />
  );
};
