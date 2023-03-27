import { useState } from 'react';

import IconClose from '../../assets/svg/cross.svg';
import List from '../../assets/svg/menu.svg';
import IconSearch from '../../assets/svg/search.svg';
import SortDesc from '../../assets/svg/sort-descending.svg';
import SortAsc from '../../assets/svg/sort-ascending.svg';
import Grid from '../../assets/svg/square-four.svg';

import { ASCENDING, DESCENDING, GRID, LIST } from '../../app-constants';
import { BLACK40, WHITE } from '../../styles/constant';

import { ButtonWrapper, MenuWrapper, SortButton } from './styled-menu';

type MenuProps = {
  onChangeView: Function;
};

export const Menu = ({ onChangeView }: MenuProps) => {
  const [viewChoice, setViewChoice] = useState(LIST);

  const handleChangeView = () => {
    onChangeView(viewChoice);
  };

  return (
    <MenuWrapper>
      <ButtonWrapper>
        <SortButton color='white'>
          <IconSearch />
        </SortButton>
        <SortButton color='white'>
          <SortAsc />
        </SortButton>
      </ButtonWrapper>
      {viewChoice === LIST ? (
        <ButtonWrapper>
          <SortButton color='orange'>
            <Grid fill={WHITE} />
          </SortButton>
          <SortButton
            color='white'
            onPress={() => {
              handleChangeView();
              setViewChoice(GRID);
            }}
          >
            <List fill={BLACK40} />
          </SortButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <SortButton
            color='white'
            onPress={() => {
              handleChangeView();
              setViewChoice(LIST);
            }}
          >
            <Grid fill={BLACK40} />
          </SortButton>
          <SortButton color='orange'>
            <List fill={WHITE} />
          </SortButton>
        </ButtonWrapper>
      )}
    </MenuWrapper>
  );
};
