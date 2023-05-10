import styled from 'styled-components/native';

import { BGNEGATIVE } from './../../styles/constant';

export const ErrorWrapper = styled.View`
  flex-direction: row;
  background-color: ${BGNEGATIVE};
  border-radius: 10px;
  margin-top: 30px;
  padding: 18px 16px;
  margin: 8px 16px;
`;

export const ErrorText = styled.Text`
  flex: 1;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-left: 10px;
`;
