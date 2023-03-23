import styled from 'styled-components/native';

import * as styles from '../../styles/constant';

export const StyledCard = styled.TouchableOpacity`
  background: ${styles.WHITE};
  shadow-color: ${styles.BLACK40};
  elevation: 13;
  border-radius: 10px;
  margin-top: 16px;
  padding: 8px 16px 16px 16px;
  margin: 8px 16px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${styles.DARK};
  margin-top: 16px;
`;

export const Author = styled(Title)`
  font-weight: 400;
  color: ${styles.BLACK70};
  margin-top: 8px;
  letter-spacing: 0.1px;
  font-size: 18px;
  line-height: 24px;
`;
