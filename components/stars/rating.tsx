import StarDefault from '../../assets/svg/star-default.svg';
import StarOutline from '../../assets/svg/star-outline.svg';

import { StyledText, StyledRating } from './styled-rating';

type RatingProps = { amount: number | null; choice: string };

export const Rating = ({ amount, choice }: RatingProps): JSX.Element => {
  const array = [0, 1, 2, 3, 4];

  const size = choice === 'bookscreen' ? 39 : 30;

  if (amount === 6)
    return (
      <StyledRating>
        {array.map((_, index) => (
          <StarOutline width={45} height={45} key={index} />
        ))}
      </StyledRating>
    );

  return (
    <StyledRating>
      {amount ? (
        array.map((_, index) =>
          index < amount - 1 ? (
            <StarDefault width={size} height={size} key={index} />
          ) : (
            <StarOutline width={size} height={size} key={Math.random()} />
          )
        )
      ) : (
        <StyledText>еще нет оценок</StyledText>
      )}
    </StyledRating>
  );
};
