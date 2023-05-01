import styled from 'styled-components/native';

import { BLACK40, BLACK5, DARK } from './../../styles/constant';

export const StyledModalView = styled.View`
  height: 100%;
  flex: 1;
  margin: 25px;
  padding: 30px 16px 32px;
  background-color: ${BLACK5};
  border: ${BLACK40};
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  /* margin-top: 15px; */
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${DARK};
`;
