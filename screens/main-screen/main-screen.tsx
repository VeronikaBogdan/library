import { useState } from 'react';

import { Cards } from '../../components/cards/cards';
import { Menu } from '../../components/menu/menu';

import { GRID } from '../../app-constants';

import { Main } from './styled-main-screen';

export const MainScreen = () => {
  const [view, setView] = useState(GRID);

  const handleChangeView = (viewChoice: string) => {
    setView(viewChoice);
  };

  return (
    <Main>
      <Menu onChangeView={handleChangeView} />
      <Cards viewChoice={view} />
    </Main>
  );
};
