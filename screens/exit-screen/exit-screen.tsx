import { useNavigation } from '@react-navigation/native';
import SyncStorage from 'sync-storage';

import { ExitText, ExitView } from './styled-exit-screen';
import {
  AssessScreenButton,
  BookedButton,
  StyledTextBook,
  StyledTextBooked,
} from '../../components/button/styled-card-button';

export const ExitScreen = () => {
  const navigation = useNavigation();

  return (
    <ExitView>
      <ExitText>Хотите выйти? </ExitText>
      <AssessScreenButton
        onPress={() => {
          navigation.navigate('AuthScreen');
          SyncStorage.set('jwtToken', '');
        }}
      >
        <StyledTextBook>Выйти</StyledTextBook>
      </AssessScreenButton>
      <BookedButton onPress={() => navigation.navigate('AllBooks')}>
        <StyledTextBooked>Вернуться на главный экран</StyledTextBooked>
      </BookedButton>
    </ExitView>
  );
};
