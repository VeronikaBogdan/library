import { Modal } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { bookByIdRequest } from '../../../store/bookById/actions';
import { booksRequest } from '../../../store/books/actions';
import { AppState } from '../../../store/rootReducer';

import { StyledModalView } from '../styled-modal';
import { CentralizedView } from './styled-refresh';
import { MessageText } from '../auth-message/styled-auth-message';
import { AssessScreenButton, StyledTextBook } from '../../button/styled-card-button';

export const RefreshModal = ({ visibleRefresh, choice }: { visibleRefresh: Function; choice: string }) => {
  const dispatch = useDispatch();
  const { bookById } = useSelector((state: AppState) => state.bookById);
  const { comment } = useSelector((state: AppState) => state.comment);
  const { booking } = useSelector((state: AppState) => state.booking);
  const statusComment = Object.entries(comment).length > 0;
  const statusBooking = Object.entries(booking).length > 0;

  const handleVisibleRefresh = () => {
    visibleRefresh(false);
    dispatch(bookByIdRequest(bookById.id));
    dispatch(booksRequest());
  };

  return (
    <Modal animationType='fade'>
      {choice === 'booking' ? (
        <CentralizedView status={statusBooking}>
          <StyledModalView>
            <MessageText>
              {statusBooking ? 'Выбранная книга забронирована!' : 'Бронирование не было отправлено. Попробуйте позже!'}
            </MessageText>
            <AssessScreenButton onPress={() => (statusBooking ? handleVisibleRefresh() : visibleRefresh(false))}>
              <StyledTextBook>{statusBooking ? 'нажмите для продолжения' : 'вернуться назад'}</StyledTextBook>
            </AssessScreenButton>
          </StyledModalView>
        </CentralizedView>
      ) : (
        <CentralizedView status={statusComment}>
          <StyledModalView>
            <MessageText>
              {statusComment
                ? 'Спасибо, что нашли время оценить книгу!'
                : 'Оценка не была отправлена. Попробуйте позже!'}
            </MessageText>
            <AssessScreenButton onPress={() => (statusComment ? handleVisibleRefresh() : visibleRefresh(false))}>
              <StyledTextBook>{statusComment ? 'нажмите для продолжения' : 'вернуться к книге'}</StyledTextBook>
            </AssessScreenButton>
          </StyledModalView>
        </CentralizedView>
      )}
    </Modal>
  );
};
