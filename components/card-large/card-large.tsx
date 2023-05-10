import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import SyncStorage from 'sync-storage';

import { BOOKPAGE } from '../../app-constants';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';

import { AppState } from '../../store/rootReducer';
import { Booking } from '../../store/books/types';

import { AboutBookText, AboutBookTitle, AuthorLarge, Description, TitleLarge } from './styled-card-large';

export const CardLarge = () => {
  const { bookById } = useSelector((state: AppState) => state.bookById);
  const { id, title, authors, issueYear, description, images, booking } = bookById;

  const BookProps = { text: 'Забронировать', list: '', choice: '', bookpage: 'bookpage', onPress: () => {} };
  const BookedProps = { text: 'Забронирована', list: '', choice: '', bookpage: 'bookpage', onPress: () => {} };
  const IsTakenProps = { text: 'Занята до ', list: 'list', choice: '', bookpage: 'bookpage', onPress: () => {} };

  const buttonChoice = (booking: Booking | null) => {
    if (booking === null)
      return <CardButton text='Забронировать' list='' choice='' bookpage='bookpage' onPress={() => {}} />;

    if (booking.customerId === SyncStorage.get('userId'))
      return <CardButton text='Забронирована' list='' choice='' bookpage='bookpage' onPress={() => {}} />;

    if (booking.customerId !== SyncStorage.get('userId'))
      return <CardButton text='Забронирована' list='list' choice='' bookpage='bookpage' onPress={() => {}} />;
  };

  return (
    <View>
      <BookImage image={images[0]} choice={BOOKPAGE} bookpage={id} />
      <Description>
        <TitleLarge>{title}</TitleLarge>
        <AuthorLarge>
          {authors.map((author, index) => (
            <Text key={index}>{author}, </Text>
          ))}
          {issueYear}
        </AuthorLarge>
        {buttonChoice(booking)}
        <AboutBookTitle>О книге</AboutBookTitle>
        <AboutBookText>{description}</AboutBookText>
      </Description>
    </View>
  );
};
