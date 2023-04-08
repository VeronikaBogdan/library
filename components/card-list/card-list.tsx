import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LIST } from '../../app-constants';
import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';
import { Rating } from '../stars/rating';

import { AuthorList, TitleList, StyledCardList, Wrapper } from './styled-card-list';

type CardListProps = {
  image: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  issueYear: string | null;
  higlight: string;
  button: string;
  list: string;
};

export const CardList = ({ image, rating, title, authors, issueYear, higlight, button, list }: CardListProps) => {
  const navigation = useNavigation();

  return (
    <StyledCardList activeOpacity={0.5} onPress={() => navigation.navigate('BookScreen')}>
      <BookImage image={image} choice={LIST} bookpage='' />
      <Wrapper>
        <TitleList numberOfLines={3}>{title}</TitleList>
        <AuthorList numberOfLines={3}>
          {authors.map((author, index) => (
            <Text key={index}>{author}, </Text>
          ))}
          {issueYear}
        </AuthorList>
        <Rating amount={rating} choice='' />
        <CardButton text={button} choice={LIST} list='list' bookpage='' />
      </Wrapper>
    </StyledCardList>
  );
};
