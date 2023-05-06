import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { BOOKPAGE } from '../../app-constants';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';

import { AppState } from '../../store/rootReducer';

import { AboutBookText, AboutBookTitle, AuthorLarge, Description, TitleLarge } from './styled-card-large';

export const CardLarge = () => {
  const { bookById } = useSelector((state: AppState) => state.bookById);
  const { id, title, authors, issueYear, description, images } = bookById;

  return (
    <View>
      <BookImage image={images[0].url} choice={BOOKPAGE} bookpage={id} />
      <Description>
        <TitleLarge>{title}</TitleLarge>
        <AuthorLarge>
          {authors.map((author, index) => (
            <Text key={index}>{author}, </Text>
          ))}
          {issueYear}
        </AuthorLarge>
        <CardButton text='Забронировать' list='' choice='' bookpage='bookpage' onPress={() => {}} />
        <AboutBookTitle>О книге</AboutBookTitle>
        <AboutBookText>{description}</AboutBookText>
      </Description>
    </View>
  );
};
