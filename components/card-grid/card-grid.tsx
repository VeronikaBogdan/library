import { Image, Text } from 'react-native';

import { Rating } from '../stars/rating';

import { Author, Title, StyledCard } from './styled-card-grid';

type CardGridProps = {
  image: string | null;
  rating: number | null;
  title: string;
  authors: string;
  issueYear: string;
  higlight: string;
};

export const CardGrid = ({ image, rating, title, authors, issueYear, higlight }: CardGridProps) => (
  <StyledCard activeOpacity={0.5}>
    <Image source={require('../../assets/png/image.png')} />
    <Rating amount={rating} />
    <Title numberOfLines={3}>{title}</Title>
    <Author numberOfLines={3}>{authors}</Author>
  </StyledCard>
);
