import styled from 'styled-components/native';

import * as styles from '../../styles/constant';

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${styles.ORANGE};
  padding: 9px;
`;

export const BookButton = styled(Button)`
  width: 100%;
  border-radius: 25px;
  margin: 35px 0 10px;
`;

export const BookedButton = styled(BookButton)`
  background: ${styles.WHITE};
  border: 1px ${styles.BLACK20};
`;

export const IsTakendButton = styled(BookButton)`
  background: ${styles.BLACK5};
  border: 1px ${styles.BLACK20};
`;

export const StyledTextBook = styled.Text`
  color: ${styles.WHITE};
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const StyledTextBooked = styled(StyledTextBook)`
  color: ${styles.DARK};
`;

export const StyledTextIsTaken = styled(StyledTextBook)`
  color: ${styles.BLACK40};
`;

export const BookPageButton = styled(BookButton)`
  max-width: 640px;
  align-self: flex-start;
`;

export const BookedPageButton = styled(BookedButton)`
  max-width: 350px;
  align-self: flex-start;
`;

export const IsTakendPagetButton = styled(IsTakendButton)`
  max-width: 350px;
  align-self: flex-start;
`;
