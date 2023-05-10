import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SyncStorage from 'sync-storage';

import { GRID } from '../../app-constants';

import { bookByIdRequest } from '../../store/bookById/actions';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';
import { Rating } from '../stars/rating';

import { ACCENT } from '../../styles/constant';
import { Author, HighlightTitle, StyledCard } from './styled-card-grid';
import { Booking, Image } from '../../store/books/types';

type CardGridProps = {
  id: number;
  category: string;
  image: Image;
  rating: number | null;
  title: string;
  authors: string[] | null;
  issueYear: string | null;
  higlight: string;
  button: Booking;
  list: string;
};

export const CardGrid = ({
  id,
  category,
  image,
  rating,
  title,
  authors,
  issueYear,
  higlight,
  button,
  list,
}: CardGridProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const buttonChoice = (booking: Booking | null) => {
    if (booking === null)
      return <CardButton text='Забронировать' list='' choice={GRID} bookpage='' onPress={() => {}} />;

    if (booking.customerId === SyncStorage.get('userId'))
      return <CardButton text='Забронирована' list='' choice={GRID} bookpage='' onPress={() => {}} />;

    if (booking.customerId !== SyncStorage.get('userId'))
      return <CardButton text='Забронирована' list='list' choice={GRID} bookpage='' onPress={() => {}} />;
  };

  return (
    <StyledCard
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('BookScreen', { bookId: id, category: category });
        dispatch(bookByIdRequest(id));
      }}
    >
      <BookImage image={image} choice={GRID} bookpage='' />
      <Rating amount={rating} choice='' />
      <HighlightTitle
        highlightStyle={{ color: ACCENT }}
        searchWords={[higlight]}
        textToHighlight={title}
        numberOfLines={3}
      />
      <Author numberOfLines={3}>
        {authors.map((author, index) => (
          <Text key={index}>{author}, </Text>
        ))}
        {issueYear}
      </Author>
      {buttonChoice(button)}
    </StyledCard>
  );
};
