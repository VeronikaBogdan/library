import { useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CardLarge } from '../../components/card-large/card-large';
import { Comments } from '../../components/comments/comments';
import { DetailsInfo } from '../../components/details-info/details-info';
import { ErrorView } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';
import { RatingBook } from '../../components/rating-book/rating-book';

import { bookByIdRequest } from '../../store/bookById/actions';
import { AppState } from '../../store/rootReducer';

import { categorySwitcher } from '../../utils/category-switcher';

import { BreadCrumbsText, BreadCrumbsWrapper, ViewWrapper } from './styled-book-screen';

type BookScreenProps = { route: any };

export const BookScreen = ({ route }: BookScreenProps) => {
  const dispatch = useDispatch();
  const { bookId, category } = route.params;

  const { bookById, pending, error } = useSelector((state: AppState) => state.bookById);

  const isVisible = !pending && !error;

  useEffect(() => {
    dispatch(bookByIdRequest(bookId));
  }, [dispatch]);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={pending} onRefresh={() => dispatch(bookByIdRequest(bookId))} />}
    >
      {pending && <Loader />}
      {error && <ErrorView />}
      {isVisible && (
        <>
          <BreadCrumbsWrapper>
            <BreadCrumbsText>
              {categorySwitcher(category)} / {bookById.title}
            </BreadCrumbsText>
          </BreadCrumbsWrapper>
          <ViewWrapper>
            <CardLarge />
            <RatingBook />
            <DetailsInfo />
            <Comments />
          </ViewWrapper>
        </>
      )}
    </ScrollView>
  );
};
