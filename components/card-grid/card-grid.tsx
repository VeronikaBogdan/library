import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GRID } from '../../app-constants';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';
import { Rating } from '../stars/rating';

import { Author, Title, StyledCard } from './styled-card-grid';

type CardGridProps = {
  id: number;
  category: string;
  image: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  issueYear: string | null;
  higlight: string;
  button: string;
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
  const navigation = useNavigation();

  return (
    <StyledCard
      activeOpacity={0.5}
      onPress={() => navigation.navigate('BookScreen', { bookId: id, category: category })}
    >
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
};
