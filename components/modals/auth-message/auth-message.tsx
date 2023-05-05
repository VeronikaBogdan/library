import { StyledModalView } from '../styled-modal';
import { AssessScreenButton, StyledTextBook } from '../../button/styled-card-button';
import { MessageTitle, MessageText } from './styled-auth-message';

type AuthMessageType = { title: string; message: string; buttonValue: string; onPress: Function };

export const AuthMessage = ({ title, message, buttonValue, onPress }: AuthMessageType) => (
  <StyledModalView>
    <MessageTitle>{title}</MessageTitle>
    <MessageText>{message}</MessageText>
    <AssessScreenButton onPress={onPress}>
      <StyledTextBook>{buttonValue}</StyledTextBook>
    </AssessScreenButton>
  </StyledModalView>
);
