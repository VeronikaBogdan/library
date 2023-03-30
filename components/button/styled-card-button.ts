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

export const BookScreenButton = styled(BookButton)`
  margin-top: 0px;
`;

export const AssessScreenButton = styled(BookButton)`
  margin-top: 15px;
`;

export const BookedScreenButton = styled(BookedButton)`
  margin-top: 0px;
`;

export const IsTakendScreenButton = styled(IsTakendButton)`
  margin-top: 0px;
`;
