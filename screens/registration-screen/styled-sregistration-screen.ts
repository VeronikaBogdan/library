import styled from 'styled-components/native';
import { ORANGE, WHITE, BLACK40, BLACK70, BLACK10, DARK, ACCENT } from '../../styles/constant';
import { ModalTitle } from '../../components/modals/styled-modal';
import { RateText } from '../../components/modals/rate-book/styled-rate-book';

export const StyledView = styled.View`
  height: 100%;
  background-color: ${ORANGE};
  justify-content: center;
`;

export const AppTitle = styled.Text`
  align-self: center;
  font-weight: 600;
  font-size: 35px;
  letter-spacing: 1px;
  color: ${WHITE};
`;

export const EntranceTitle = styled(ModalTitle)`
  align-self: flex-start;
  font-size: 27px;
`;

export const EntranceStep = styled(RateText)`
  align-self: flex-start;
`;

export const InputsWrapper = styled.View`
  width: 100%;
  padding-vertical: 20px;
`;

export const DownText = styled.Text`
  font-weight: 400;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${BLACK70};
  align-self: flex-start;
`;

export const DownTextButton = styled.Text`
  letter-spacing: 0.2px;
  color: ${DARK};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
`;

export const CommonInput = styled.TextInput`
  height: 50px;
  background-color: ${BLACK10};
  color: ${DARK};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  border-color: ${({ error }) => (error ? ACCENT : BLACK40)};
  /* border-color: ${BLACK40}; */
  border-bottom-width: 1px;
  margin-top: 15px;
  margin-vertical: 10px;
  padding-left: 5px;
`;

export const RedHint = styled.Text`
  color: ${ACCENT};
`;
