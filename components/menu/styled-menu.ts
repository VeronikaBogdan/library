import styled from 'styled-components/native';

import * as styles from '../../styles/constant';

export const ButtonWrapper = styled.View`
  width: 110px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuWrapper = styled(ButtonWrapper)`
  width: 100%;
  padding: 16px 16px 8px;
  justify-content: space-between;
`;

type ButtonProps = {
  color: string;
};

export const SortButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: ${({ color }: ButtonProps) => (color === 'orange' ? styles.ORANGE : styles.WHITE)};
  elevation: 7;
  border-radius: 30px;
`;
