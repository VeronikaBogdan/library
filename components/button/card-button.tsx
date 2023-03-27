import { View } from 'react-native/Libraries/Components/View/View';
import {
  BookedButton,
  BookedPageButton,
  BookPageButton,
  BookButton,
  IsTakendButton,
  IsTakendPagetButton,
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
  // if (bookpage === 'bookpage') {
  //   if (text === 'Забронировать') return <BookPageButton><Text>{text}</Text></BookPageButton>;
  //   if (text === 'Оценить книгу') return <BookPageButton className='review'><Text>{text}</Text></BookPageButton>;
  //   if (text === 'Забронирована') return <BookedPageButton><Text>{text}</Text></BookedPageButton>;
  //   if (list === 'list') return <IsTakendPagetButton><Text>{text}</Text></IsTakendPagetButton>;
  // }

  return (
    <IsTakendButton>
      <StyledTextIsTaken>{text}</StyledTextIsTaken>
    </IsTakendButton>
  );
};
