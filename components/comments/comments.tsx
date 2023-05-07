import { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SyncStorage from 'sync-storage';

import Down from '../../assets/svg/down.svg';
import Up from '../../assets/svg/up.svg';

import { bookByIdRequest } from '../../store/bookById/actions';
import { AppState } from '../../store/rootReducer';

import { SectionTitle } from '../../screens/book-screen/styled-book-screen';
import { Rating } from '../stars/rating';
import { RefreshModal } from '../modals/refresh/refresh';
import { RateBookModal } from '../modals/rate-book/rate-book';

import { dateFormatter, dateSorter } from '../../utils/date-formatter';

import {
  Comment,
  CommentsAmount,
  CommentsTitleWrapper,
  UserInfo,
  UserImage,
  UserName,
  CommentText,
} from './styled-comments';
import { CardButton } from '../button/card-button';

import { ORANGE } from '../../styles/constant';
import { IsTakendScreenButton, StyledTextIsTaken } from '../button/styled-card-button';

export const Comments = () => {
  const dispatch = useDispatch();
  const { bookById, pending } = useSelector((state: AppState) => state.bookById);
  const [isOpen, setOpen] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [isVisibleModalRefresh, setVisibleModalRefresh] = useState(false);

  const { comments } = bookById;

  const toggleComments = () => {
    setOpen(!isOpen);
  };

  const handleChangeModal = (isVisible: boolean) => {
    setVisible(isVisible);
  };

  const handleChangeModalRefresh = (isVisible: boolean) => {
    setVisibleModalRefresh(isVisible);
  };

  return (
    <View>
      <CommentsTitleWrapper onPress={toggleComments} android_ripple={{ color: ORANGE }}>
        <SectionTitle>Отзывы</SectionTitle>
        <CommentsAmount>{!pending && comments ? comments.length : '0'}</CommentsAmount>
        {isOpen ? <Up /> : <Down />}
      </CommentsTitleWrapper>
      {!pending &&
        comments &&
        comments.sort(dateSorter).map((comment, index) => (
          <Comment isOpen={isOpen} key={index}>
            <UserInfo>
              <UserImage source={require('../../assets/png/review.png')} />
              <View>
                <UserName>
                  {comment.user.firstName} {comment.user.lastName}
                </UserName>
                <UserName>{dateFormatter(comment.createdAt)}</UserName>
              </View>
            </UserInfo>
            <Rating amount={comment.rating} choice='' />
            <CommentText>{comment.text}</CommentText>
          </Comment>
        ))}
      {bookById.comments.some((item) => item.user.commentUserId === SyncStorage.get('userId')) ? (
        <IsTakendScreenButton>
          <StyledTextIsTaken>Вы уже оставили отзыв</StyledTextIsTaken>
        </IsTakendScreenButton>
      ) : (
        <CardButton text='Оценить книгу' list='' choice='' bookpage='bookpage' onPress={() => setVisible(true)} />
      )}
      {isVisible && (
        <RateBookModal visible={handleChangeModal} bookId={bookById.id} visibleRefresh={handleChangeModalRefresh} />
      )}
      {isVisibleModalRefresh && <RefreshModal visibleRefresh={handleChangeModalRefresh} />}
    </View>
  );
};
