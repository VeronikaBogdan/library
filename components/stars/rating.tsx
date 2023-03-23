import React from 'react';

import { Text } from 'react-native';
import StarDefault from '../../assets/svg/star-default.svg';
import StarOutline from '../../assets/svg/star-outline.svg';

import { StyledText, StyledRating } from './styled-rating';

type RatingProps = { amount: number };

export const Rating = ({ amount }: RatingProps): JSX.Element => {
  const array = [0, 1, 2, 3, 4];

  if (amount === 6)
    return (
      <>
        {array.map((_, index) => (
          <StarOutline width={30} height={30} key={index} />
        ))}
      </>
    );

  return (
    <StyledRating>
      {amount >= 0 ? (
        array.map((_, index) =>
          index <= amount ? (
            <StarDefault width={30} height={30} key={index} />
          ) : (
            <StarOutline width={30} height={30} key={Math.random()} />
          )
        )
      ) : (
        <StyledText>еще нет оценок</StyledText>
      )}
    </StyledRating>
  );
};
