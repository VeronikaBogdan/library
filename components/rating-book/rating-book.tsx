import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { AppState } from '../../store/rootReducer';

import { Rating } from '../stars/rating';

import { NoRatingText, RatingNumber, RatingTitle, RatingWrapper } from './styled-rating-book';

export const RatingBook = () => {
  const { bookById } = useSelector((state: AppState) => state.bookById);
  const rating = bookById.rating;

  return (
    <View>
      <RatingTitle>Рейтинг</RatingTitle>
      {rating ? (
        <RatingWrapper>
          <Rating amount={rating} choice='bookscreen' />
          <RatingNumber>{rating}</RatingNumber>
        </RatingWrapper>
      ) : (
        <RatingWrapper>
          <Rating amount={6} choice='' />
          <NoRatingText>еще нет оценок</NoRatingText>
        </RatingWrapper>
      )}
    </View>
  );
};
