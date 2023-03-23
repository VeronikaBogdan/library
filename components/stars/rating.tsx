import StarDefault from '../../assets/svg/star-default.svg';
import StarOutline from '../../assets/svg/star-outline.svg';

import { StyledText, StyledRating } from './styled-rating';

type RatingProps = { amount: number | null };

export const Rating = ({ amount }: RatingProps): JSX.Element => {
  const array = [0, 1, 2, 3, 4];

  if (amount === 6)
    return (
      <StyledRating>
        {array.map((_, index) => (
          <StarOutline width={30} height={30} key={index} />
        ))}
      </StyledRating>
    );

  return (
    <StyledRating>
      {amount ? (
        array.map((_, index) =>
          index < amount ? (
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
