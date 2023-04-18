import { Text } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { GRID } from '../../app-constants';
import { AppState } from '../../store/rootReducer';

import { Cards } from '../../components/cards/cards';
import { Menu } from '../../components/menu/menu';

import { Main } from './styled-main-screen';

type MainScreenProps = { route: any };

export const MainScreen = ({ route }: MainScreenProps) => {
  const [view, setView] = useState(GRID);

  const { pending: isPendingCategories } = useSelector((state: AppState) => state.categories);
  const { pending: isBooksPending } = useSelector((state: AppState) => state.books);

  const isPending = isPendingCategories || isBooksPending;
  const isVisible = !isPending;

  const handleChangeView = (viewChoice: string) => {
    setView(viewChoice);
  };

  return (
    <Main>
      {isPending && <Text>Loading...</Text>}
      <Menu onChangeView={handleChangeView} />
      {isVisible && <Cards category={route.name} viewChoice={view} />}
    </Main>
  );
};
