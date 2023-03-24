import { Image, Text } from 'react-native';

import { GRID } from '../../app-constants';

import { BookImage } from '../book-image/book-image';
import { Rating } from '../stars/rating';

import { Author, Title, StyledCard } from './styled-card-grid';

type CardGridProps = {
  image: object | null;
  rating: number | null;
  title: string;
  authors: string[];
  issueYear: string;
  higlight: string;
};

export const CardGrid = ({ image, rating, title, authors, issueYear, higlight }: CardGridProps) => (
  <StyledCard activeOpacity={0.5}>
    <BookImage image={image} choice={GRID} bookpage='' />
    <Rating amount={rating} />
    <Title numberOfLines={3}>{title}</Title>
    <Author numberOfLines={3}>
      {authors.map((author, index) => (
        <Text key={index}>{author}, </Text>
      ))}
      {issueYear}
    </Author>
  </StyledCard>
);
