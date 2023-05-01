import { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Down from '../../assets/svg/down.svg';
import Up from '../../assets/svg/up.svg';

import { AppState } from '../../store/rootReducer';

import { SectionTitle } from '../../screens/book-screen/styled-book-screen';
import { Rating } from '../stars/rating';

import { dateFormatter } from '../../utils/date-formatter';

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
import { RateBookModal } from '../modals/rate-book/rate-book';

export const Comments = () => {
  const { bookById, pending, error } = useSelector((state: AppState) => state.bookById);
  const [isOpen, setOpen] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  const { comments } = bookById;

  const toggleComments = () => {
    setOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <View>
      <CommentsTitleWrapper onPress={toggleComments} android_ripple={{ color: ORANGE }}>
        <SectionTitle>Отзывы</SectionTitle>
        <CommentsAmount>{!pending && Object.entries(comments).length}</CommentsAmount>
        {isOpen ? <Up /> : <Down />}
      </CommentsTitleWrapper>
      {!pending &&
        Object.entries(comments).map((comment, index) => (
          <Comment isOpen={isOpen} key={index}>
            <UserInfo>
              <UserImage source={require('../../assets/png/review.png')} />
              <View>
                <UserName>
                  {comment[1].user.firstName} {comment[1].user.lastName}
                </UserName>
                <UserName>{dateFormatter(comment[1].createdAt)}</UserName>
              </View>
            </UserInfo>
            <Rating amount={comment[1].rating} choice='' />
            <CommentText>{comment[1].text}</CommentText>
          </Comment>
        ))}
      <CardButton text='Оценить книгу' list='' choice='' bookpage='bookpage' onPress={toggleModal} />
      {isVisibleModal && <RateBookModal visible={isVisibleModal} />}
    </View>
  );
};
