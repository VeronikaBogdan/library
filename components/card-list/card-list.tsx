import { Image, Text } from 'react-native';

import { Rating } from '../stars/rating';

import { AuthorList, TitleList, StyledCardList, Wrapper } from './styled-card-list';

type CardListProps = {
  image: string | null;
  rating: number | null;
  title: string;
  authors: string[];
  issueYear: string;
  higlight: string;
};

export const CardList = ({ image, rating, title, authors, issueYear, higlight }: CardListProps) => (
  <StyledCardList activeOpacity={0.5}>
    <Image source={require('../../assets/png/image.png')} />
    <Wrapper>
      <TitleList numberOfLines={3}>{title}</TitleList>
      <AuthorList numberOfLines={3}>
        {authors.map((author, index) => (
          <Text key={index}>{author}, </Text>
        ))}
        {issueYear}
      </AuthorList>
      <Rating amount={rating} />
    </Wrapper>
  </StyledCardList>
);
