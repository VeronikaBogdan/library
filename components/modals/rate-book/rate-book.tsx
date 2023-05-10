import { useState } from 'react';
import { Modal, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import SyncStorage from 'sync-storage';

import Cross from '../../../assets/svg/cross.svg';
import { CardButton } from '../../button/card-button';

import { commentRequest } from '../../../store/comments/actions';
import { AppState } from '../../../store/rootReducer';
import { CommentUserData } from '../../../store/comments/types';

import { ORANGE } from '../../../styles/constant';
import { RedHint, StyledView } from '../../../screens/registration-screen/styled-sregistration-screen';
import { ModalTitle, StyledModalView } from '../styled-modal';
import { RateText, RatingInput, TextInput } from './styled-rate-book';

export const RateBookModal = ({
  visible,
  bookId,
  visibleRefresh,
}: {
  visible: Function;
  bookId: number;
  visibleRefresh: Function;
}) => {
  const dispatch = useDispatch();
  const [isVisible, setVisibility] = useState(false);

  const handleVisible = () => {
    visible(isVisible);
  };

  const handleVisibleRefresh = () => {
    visibleRefresh(true);
  };

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      rating: '',
      text: '' || null,
      book: bookId.toString(),
      user: SyncStorage.get('userId').toString(),
    },
  });

  const { pending } = useSelector((state: AppState) => state.comment);

  const onSubmit = (commentData: CommentUserData) => {
    dispatch(commentRequest({ data: commentData }));
    console.log({ data: commentData });
    console.log(pending);
    handleVisible();
    handleVisibleRefresh();
    setVisibility(false);
  };

  return (
    <Modal animationType='fade' transparent={true}>
      <StyledView>
        <StyledModalView>
          <TouchableOpacity
            onPress={() => {
              handleVisible();
              setVisibility(false);
              visibleRefresh(false);
            }}
          >
            <Cross width={35} height={35} />
          </TouchableOpacity>
          <ModalTitle>Оцените книгу</ModalTitle>
          <RateText>Ваша оценка: </RateText>
          <Controller
            control={control}
            rules={{
              required: true,
              max: 5,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RatingInput
                maxLength={1}
                placeholder='Введите от 1 до 5'
                cursorColor={ORANGE}
                onBlur={onBlur}
                inputMode='numeric'
                value={value}
                onChangeText={onChange}
              />
            )}
            name='rating'
          />
          {errors.rating && <RedHint>Это обязательное поле с допустимыми значениями от 1 до 5</RedHint>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                multiline
                placeholder='Оставить отзыв'
                cursorColor={ORANGE}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
            name='text'
          />
          <CardButton text='Оценить' bookpage='bookpage' onPress={handleSubmit(onSubmit)} list='' choice='' />
        </StyledModalView>
      </StyledView>
    </Modal>
  );
};
