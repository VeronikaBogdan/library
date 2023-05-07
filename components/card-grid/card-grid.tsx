import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { GRID } from '../../app-constants';

import { bookByIdRequest } from '../../store/bookById/actions';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';
import { Rating } from '../stars/rating';

import { ACCENT } from '../../styles/constant';
import { Author, HighlightTitle, StyledCard } from './styled-card-grid';

type CardGridProps = {
  id: number;
  category: string;
  image: string;
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
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
      <CardButton text={button} choice={GRID} list='' bookpage='' onPress={() => {}} />
    </StyledCard>
  );
};
