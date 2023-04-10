import { useState } from 'react';

import { Cards } from '../../components/cards/cards';
import { Menu } from '../../components/menu/menu';

import { GRID } from '../../app-constants';

import { Main } from './styled-main-screen';

type MainScreenProps = { route: any };

export const MainScreen = ({ route }: MainScreenProps) => {
  const [view, setView] = useState(GRID);

  const handleChangeView = (viewChoice: string) => {
    setView(viewChoice);
  };

  return (
    <Main>
      <Menu onChangeView={handleChangeView} />
      <Cards category={route.name} viewChoice={view} />
    </Main>
  );
};
