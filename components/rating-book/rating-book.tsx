import { View } from 'react-native';
import { Rating } from '../stars/rating';

import { NoRatingText, RatingNumber, RatingTitle, RatingWrapper } from './styled-rating-book';

export const RatingBook = () => {
  const rating: number = null;

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
