import { Image, Text } from 'react-native';

import { GRID } from '../../app-constants';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';
import { Rating } from '../stars/rating';

import { Author, Title, StyledCard } from './styled-card-grid';

type CardGridProps = {
  image: object | null;
  rating: number | null;
  title: string;
  authors: string[];
  issueYear: string;
  higlight: string;
  button: string;
  list: string;
};

export const CardGrid = ({ image, rating, title, authors, issueYear, higlight, button, list }: CardGridProps) => (
  <StyledCard activeOpacity={0.5}>
    <BookImage image={image} choice={GRID} bookpage='' />
    <Rating amount={rating} choice='' />
    <Title numberOfLines={3}>{title}</Title>
    <Author numberOfLines={3}>
      {authors.map((author, index) => (
        <Text key={index}>{author}, </Text>
      ))}
      {issueYear}
    </Author>
    <CardButton text={button} choice={GRID} list='' bookpage='' />
  </StyledCard>
);
