import { Text } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { GRID } from '../../app-constants';
import { AppState } from '../../store/rootReducer';

import { Cards } from '../../components/cards/cards';
import { Menu } from '../../components/menu/menu';
import { Loader } from '../../components/loader/loader';

import { Main } from './styled-main-screen';

type MainScreenProps = { route: any };

export const MainScreen = ({ route }: MainScreenProps) => {
  const [view, setView] = useState(GRID);

  const { pending: isPendingCategories, error: isErrorCategories } = useSelector((state: AppState) => state.categories);
  const { pending: isPendingBooks, error: isErrorBooks } = useSelector((state: AppState) => state.books);

  const isPending = isPendingCategories || isPendingBooks;
  const isError = isErrorBooks || isErrorCategories;
  const isVisible = !isPending && !isError;

  const handleChangeView = (viewChoice: string) => {
    setView(viewChoice);
  };

  return (
    <Main>
      {isPendingBooks && <Loader />}
      {isError && <Text>Error</Text>}
      {isVisible && <Menu onChangeView={handleChangeView} />}
      {isVisible && <Cards category={route.name} viewChoice={view} />}
    </Main>
  );
};
