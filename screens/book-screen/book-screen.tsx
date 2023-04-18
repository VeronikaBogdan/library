import { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, RefreshControl, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNRestart from 'react-native-restart';

import Slash from '../../assets/svg/slash.svg';
import { CardLarge } from '../../components/card-large/card-large';
import { Comments } from '../../components/comments/comments';
import { DetailsInfo } from '../../components/details-info/details-info';
import { RatingBook } from '../../components/rating-book/rating-book';

import { bookByIdRequest } from '../../store/bookById/actions';
import { AppState } from '../../store/rootReducer';

import { categoryIdSwitcher } from '../../utils/category-id-switcher';

import { BreadCrumbsText, BreadCrumbsWrapper, ViewWrapper } from './styled-book-screen';

type BookScreenProps = { route: any };

export const BookScreen = ({ route }: BookScreenProps) => {
  const dispatch = useDispatch();
  const [loading, toggleLoading] = useState(true);
  const { bookId, category } = route.params;

  const { bookById, pending } = useSelector((state: AppState) => state.bookById);

  useLayoutEffect(() => {
    dispatch(bookByIdRequest(bookId));
    // toggleLoading(!pending);
  }, [dispatch]);

  // console.log('bookById book', bookById);
  console.log('pending', pending);
  // console.log('bookById', bookById.id, 'bookId', bookId);
  console.log(!loading ? 'pendingQQQQQ' : `bookById ${bookById.id} bookId ${bookId} QQQQ`);
  console.log(bookById.id === bookId ? 'ура' : 'loading...');

  console.log('loading:', loading, 'pending:', pending);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={!loading}
          onRefresh={() => {
            dispatch(bookByIdRequest(bookId));
            // toggleLoading(!pending);
          }}
          // onRefresh={() => {
          //   dispatch(bookByIdRequest(bookId));
          //   toggleLoading(false);
          //   console.log('loading:', loading, 'pending', pending);
          // }}
        />
      }
    >
      <BreadCrumbsWrapper>
        <BreadCrumbsText>
          {categoryIdSwitcher(category)} / {bookById.id === bookId ? bookById.title : 'loading...'}
          {/* {categoryIdSwitcher(category)}
          <Slash /> Грокаем алгоритмы. Иллюстрированное пособие программистов и любопытствующих */}
        </BreadCrumbsText>
      </BreadCrumbsWrapper>
      <ViewWrapper>
        <CardLarge bookId={bookId} />
        <RatingBook />
        <DetailsInfo />
        <Comments />
      </ViewWrapper>
    </ScrollView>
  );
};
