import { Modal } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { bookByIdRequest } from '../../../store/bookById/actions';
import { AppState } from '../../../store/rootReducer';

import { StyledModalView } from '../styled-modal';
import { CentralizedView } from './styled-refresh';
import { MessageText } from '../auth-message/styled-auth-message';
import { AssessScreenButton, StyledTextBook } from '../../button/styled-card-button';

export const RefreshModal = ({ visibleRefresh }: { visibleRefresh: Function }) => {
  const dispatch = useDispatch();
  const { bookById } = useSelector((state: AppState) => state.bookById);
  const { comment } = useSelector((state: AppState) => state.comment);
  const status = Object.entries(comment).length > 0;

  const handleVisibleRefresh = () => {
    visibleRefresh(false);
    dispatch(bookByIdRequest(bookById.id));
  };

  return (
    <Modal animationType='fade'>
      <CentralizedView status={status}>
        <StyledModalView>
          <MessageText>
            {status ? 'Спасибо, что нашли время оценить книгу!' : 'Оценка не была отправлена. Попробуйте позже!'}
          </MessageText>
          <AssessScreenButton onPress={() => (status ? handleVisibleRefresh() : visibleRefresh(false))}>
            <StyledTextBook>{status ? 'обновить' : 'вернуться назад'}</StyledTextBook>
          </AssessScreenButton>
        </StyledModalView>
      </CentralizedView>
    </Modal>
  );
};
