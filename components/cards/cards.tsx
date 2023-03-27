import { FlatList, ListRenderItem } from 'react-native';

import { CardGrid } from '../card-grid/card-grid';
import { CardList } from '../card-list/card-list';

import { GRID } from '../../app-constants';

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
    image={item.image}
    rating={item.rating}
    title={item.title}
    authors={item.authors}
    issueYear={item.issueYear}
    button={item.button}
    list={item.list}
    higlight='clean code'
  />
);

const renderCardList: ListRenderItem<CardTypes> = ({ item }) => (
  <CardList
    image={item.image}
    rating={item.rating}
    title={item.title}
    authors={item.authors}
    issueYear={item.issueYear}
    button={item.button}
    list={item.list}
    higlight='clean code'
  />
);

type CardsProps = {
  viewChoice: string;
};

export const Cards = ({ viewChoice }: CardsProps) => (
  <FlatList
    data={books}
    keyExtractor={(card: CardTypes) => `${card.id}`}
    renderItem={viewChoice === GRID ? renderCardGrid : renderCardList}
  />
);
