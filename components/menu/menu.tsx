import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import IconClose from '../../assets/svg/cross.svg';
import List from '../../assets/svg/menu.svg';
import IconSearch from '../../assets/svg/search.svg';
import SortDesc from '../../assets/svg/sort-descending.svg';
import SortAsc from '../../assets/svg/sort-ascending.svg';
import Grid from '../../assets/svg/square-four.svg';

import { ASCENDING, DESCENDING, GRID, LIST } from '../../app-constants';
import { BLACK40, ORANGE, WHITE } from '../../styles/constant';

import { SearchInput, SearchWrapper } from '../inputs/search-input/styled-search-input';
import { ButtonWrapper, MenuWrapper, SortButton } from './styled-menu';

type MenuProps = {
  onChangeView: Function;
  onChangeSort: Function;
  onChangeSearch: Function;
};

export const Menu = ({ onChangeView, onChangeSort, onChangeSearch }: MenuProps) => {
  const [viewChoice, setViewChoice] = useState(LIST);
  const [sortChoice, setSortChoice] = useState(ASCENDING);
  const [searchTitle, setSearchTitle] = useState('');
  const [isOpenSearch, toggleSearch] = useState(false);

  const handleChangeView = () => {
    onChangeView(viewChoice);
  };

  const handleChangeSort = () => {
    onChangeSort(sortChoice);
  };

  const handleChangeSearch = (title: string) => {
    onChangeSearch(title);
    setSearchTitle(title);
  };

  return (
    <MenuWrapper>
      {isOpenSearch ? (
        <SearchWrapper isOpenSearch={isOpenSearch}>
          <SearchInput
            inputMode='search'
            placeholder='Поиск книги или автора…'
            cursorColor={ORANGE}
            value={searchTitle}
            onChangeText={handleChangeSearch}
          />
          <TouchableOpacity
            onPress={() => {
              toggleSearch(!isOpenSearch);
            }}
          >
            <IconClose />
          </TouchableOpacity>
        </SearchWrapper>
      ) : (
        <>
          <ButtonWrapper>
            <SortButton
              color='white'
              onPress={() => {
                toggleSearch(!isOpenSearch);
              }}
            >
              <IconSearch />
            </SortButton>
            {sortChoice === DESCENDING ? (
              <SortButton
                color='white'
                onPress={() => {
                  handleChangeSort();
                  setSortChoice(ASCENDING);
                }}
              >
                <SortDesc />
              </SortButton>
            ) : (
              <SortButton
                color='white'
                onPress={() => {
                  handleChangeSort();
                  setSortChoice(DESCENDING);
                }}
              >
                <SortAsc />
              </SortButton>
            )}
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
        </>
      )}
    </MenuWrapper>
  );
};
