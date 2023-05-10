import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SyncStorage from 'sync-storage';

import { LIST } from '../../app-constants';

import { bookByIdRequest } from '../../store/bookById/actions';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';
import { Rating } from '../stars/rating';

import { ACCENT } from '../../styles/constant';
import { AuthorList, TitleList, StyledCardList, Wrapper } from './styled-card-list';
import { Booking, Image } from '../../store/books/types';

type CardListProps = {
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

export const CardList = ({
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
}: CardListProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const buttonChoice = (booking: Booking | null) => {
    if (booking === null)
      return <CardButton text='Забронировать' list='' choice={LIST} bookpage='' onPress={() => {}} />;

    if (booking.customerId === SyncStorage.get('userId'))
      return <CardButton text='Забронирована' list='' choice={LIST} bookpage='' onPress={() => {}} />;

    if (booking.customerId !== SyncStorage.get('userId'))
      return <CardButton text='Забронирована' list='list' choice={LIST} bookpage='' onPress={() => {}} />;
  };

  return (
    <StyledCardList
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('BookScreen', { bookId: id, category: category });
        dispatch(bookByIdRequest(id));
      }}
    >
      <BookImage image={image} choice={LIST} bookpage='' />
      <Wrapper>
        <TitleList
          highlightStyle={{ color: ACCENT }}
          searchWords={[higlight]}
          textToHighlight={title}
          numberOfLines={3}
        />
        <AuthorList numberOfLines={3}>
          {authors.map((author, index) => (
            <Text key={index}>{author}, </Text>
          ))}
          {issueYear}
        </AuthorList>
        <Rating amount={rating} choice='' />
        {buttonChoice(button)}
      </Wrapper>
    </StyledCardList>
  );
};
