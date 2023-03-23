import { FlatList, ListRenderItem } from 'react-native';

import { CardGrid } from '../card-grid/card-grid';
import { CardList } from '../card-list/card-list';

import { books } from '../../screens/main-screen/books';

type CardTypes = {
  id: number;
  image: object | null;
  rating: number | null;
  title: string;
  authors: string[];
  issueYear: string;
  categories: string[];
  button: string;
  list: string;
};

const renderCardGrid: ListRenderItem<CardTypes> = ({ item }) => (
  <CardGrid
    image='image'
    rating={item.rating}
    title={item.title}
    authors={item.authors}
    issueYear={item.issueYear}
    higlight='clean code'
  />
);

const renderCardList: ListRenderItem<CardTypes> = ({ item }) => (
  <CardList
    image='image'
    rating={item.rating}
    title={item.title}
    authors={item.authors}
    issueYear={item.issueYear}
    higlight='clean code'
  />
);

export const Cards = () => (
  <FlatList data={books} keyExtractor={(card: CardTypes) => `${card.id}`} renderItem={renderCardList} />
);
