import ErrorIcon from '../../assets/svg/error-icon.svg';

import { ErrorWrapper, ErrorText } from './styled-error';

export const ErrorView = () => (
  <ErrorWrapper>
    <ErrorIcon />
    <ErrorText>Что-то пошло не так. Обновите приложение через некоторое время.</ErrorText>
  </ErrorWrapper>
);
