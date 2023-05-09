import { useState } from 'react';
import { useSelector } from 'react-redux';

import { GRID, DESCENDING } from '../../app-constants';
import { AppState } from '../../store/rootReducer';

import { Cards } from '../../components/cards/cards';
import { Menu } from '../../components/menu/menu';
import { Loader } from '../../components/loader/loader';
import { ErrorView } from '../../components/error/error';

import { Main } from './styled-main-screen';

type MainScreenProps = { route: any };

export const MainScreen = ({ route }: MainScreenProps) => {
  const [view, setView] = useState(GRID);
  const [sort, setSort] = useState(DESCENDING);
  const [searchTitle, setSearchTitle] = useState('');

  const { pending: isPendingCategories, error: isErrorCategories } = useSelector((state: AppState) => state.categories);
  const { pending: isPendingBooks, error: isErrorBooks } = useSelector((state: AppState) => state.books);

  const isPending = isPendingCategories || isPendingBooks;
  const isError = isErrorBooks || isErrorCategories;
  const isVisible = !isPending && !isError;

  const handleChangeView = (viewChoice: string) => {
    setView(viewChoice);
  };

  const handleChangeSort = (sortChoice: string) => {
    setSort(sortChoice);
  };

  const handleChangeSearch = (search: string) => {
    setSearchTitle(search);
  };

  return (
    <Main>
      {isPendingBooks && <Loader />}
      {isError && <ErrorView />}
      {isVisible && (
        <Menu onChangeView={handleChangeView} onChangeSort={handleChangeSort} onChangeSearch={handleChangeSearch} />
      )}
      {isVisible && <Cards category={route.name} viewChoice={view} sortChoice={sort} searchTitle={searchTitle} />}
    </Main>
  );
};
