import {
  AssessScreenButton,
  BookedButton,
  BookedScreenButton,
  BookScreenButton,
  BookButton,
  IsTakendButton,
  IsTakendScreenButton,
  StyledTextBook,
  StyledTextBooked,
  StyledTextIsTaken,
} from './styled-card-button';

type CardButtonProps = {
  text: string;
  list: string;
  choice: string;
  bookpage: string;
};

export const CardButton = ({ text, list, choice, bookpage }: CardButtonProps) => {
  if (choice === 'grid') {
    if (text === 'Забронировать')
      return (
        <BookButton>
          <StyledTextBook>{text}</StyledTextBook>
        </BookButton>
      );
    if (text === 'Забронирована')
      return (
        <BookedButton>
          <StyledTextBooked>{text}</StyledTextBooked>
        </BookedButton>
      );
    if (list === 'list')
      return (
        <IsTakendButton>
          <StyledTextIsTaken>{text}</StyledTextIsTaken>
        </IsTakendButton>
      );
  }
  if (choice === 'list') {
    if (text === 'Забронировать')
      return (
        <BookButton>
          <StyledTextBook>{text}</StyledTextBook>
        </BookButton>
      );
    if (text === 'Забронирована')
      return (
        <BookedButton>
          <StyledTextBooked>{text}</StyledTextBooked>
        </BookedButton>
      );
    if (list === 'list')
      return (
        <IsTakendButton activeOpacity={1}>
          <StyledTextIsTaken>{text}</StyledTextIsTaken>
        </IsTakendButton>
      );
  }
  if (bookpage === 'bookpage') {
    if (text === 'Забронировать')
      return (
        <BookScreenButton>
          <StyledTextBook>{text}</StyledTextBook>
        </BookScreenButton>
      );
    if (text === 'Оценить книгу')
      return (
        <AssessScreenButton>
          <StyledTextBook>{text}</StyledTextBook>
        </AssessScreenButton>
      );
    if (text === 'Забронирована')
      return (
        <BookedScreenButton>
          <StyledTextBooked>{text}</StyledTextBooked>
        </BookedScreenButton>
      );
    if (list === 'list')
      return (
        <IsTakendScreenButton activeOpacity={1}>
          <StyledTextIsTaken>{text}</StyledTextIsTaken>
        </IsTakendScreenButton>
      );
  }

  return (
    <IsTakendButton>
      <StyledTextIsTaken>{text}</StyledTextIsTaken>
    </IsTakendButton>
  );
};
