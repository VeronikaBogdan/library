import { FlatList, ListRenderItem } from 'react-native';

import { CardGrid } from '../card-grid/card-grid';

import { books } from '../../screens/main-screen/books';

type CardTypes = {
  id: string;
  image: string | null;
  rating: number | null;
  title: string;
  author: string;
  button: string;
  list: string;
};

const renderCardGrid: ListRenderItem<CardTypes> = ({ item }) => (
  <CardGrid
    image='image'
    rating={item.rating}
    title={item.title}
    authors={item.author}
    issueYear='2023'
    higlight='clean code'
  />
);

export const Cards = () => (
  <FlatList data={books} keyExtractor={(card: CardTypes) => card.id} renderItem={renderCardGrid} />
);
