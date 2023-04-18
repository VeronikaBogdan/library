import { useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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

  useEffect(() => {
    dispatch(bookByIdRequest(bookId));
  }, [dispatch]);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={!loading} onRefresh={() => dispatch(bookByIdRequest(bookId))} />}
    >
      <BreadCrumbsWrapper>
        <BreadCrumbsText>
          {categoryIdSwitcher(category)} / {bookById.title}
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
