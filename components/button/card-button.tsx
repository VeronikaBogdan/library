import { Text } from 'react-native';

import {
  BookedGridButton,
  BookedListButton,
  BookedPageButton,
  BookPageButton,
  GridBookButton,
  IsTakendGridButton,
  IsTakendListButton,
  IsTakendPagetButton,
  ListBookButton,
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
        <GridBookButton>
          <Text>{text}</Text>
        </GridBookButton>
      );
    if (text === 'Забронирована')
      return (
        <BookedGridButton>
          <Text>{text}</Text>
        </BookedGridButton>
      );
    if (list === 'list')
      return (
        <IsTakendGridButton>
          <Text>{text}</Text>
        </IsTakendGridButton>
      );
  }
  // if (choice === 'list') {
  //   if (text === 'Забронировать') return <ListBookButton>{text}</ListBookButton>;
  //   if (text === 'Забронирована') return <BookedListButton>{text}</BookedListButton>;
  //   if (list === 'list') return <IsTakendListButton>{text}</IsTakendListButton>;
  // }
  // if (bookpage === 'bookpage') {
  //   if (text === 'Забронировать') return <BookPageButton>{text}</BookPageButton>;
  //   if (text === 'Оценить книгу') return <BookPageButton className='review'>{text}</BookPageButton>;
  //   if (text === 'Забронирована') return <BookedPageButton>{text}</BookedPageButton>;
  //   if (list === 'list') return <IsTakendPagetButton>{text}</IsTakendPagetButton>;
  // }

  return <IsTakendGridButton>{text}</IsTakendGridButton>;
};
