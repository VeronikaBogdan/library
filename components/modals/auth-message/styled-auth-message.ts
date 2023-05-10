import styled from 'styled-components/native';
import { DARK } from '../../../styles/constant';
import { EntranceTitle } from '../../../screens/registration-screen/styled-sregistration-screen';

export const MessageTitle = styled(EntranceTitle)`
  align-self: center;
`;

export const MessageText = styled.Text`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;
  color: ${DARK};
  margin-vertical: 20px;
`;
