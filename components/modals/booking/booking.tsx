import { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import SyncStorage from 'sync-storage';

import Cross from '../../../assets/svg/cross.svg';

import { bookingRequest } from '../../../store/booking/actions';
import { BookingUserData } from '../../../store/booking/types';

import { StyledView } from '../../../screens/registration-screen/styled-sregistration-screen';
import { ModalTitle, StyledModalView } from '../styled-modal';
import { AssessScreenButton, StyledTextBook } from '../../button/styled-card-button';

export const BookingModal = ({
  visible,
  bookId,
  visibleBooking,
}: {
  visible: Function;
  bookId: number;
  visibleBooking: Function;
}) => {
  const dispatch = useDispatch();
  const [isVisible, setVisibility] = useState(false);

  const handleVisible = () => {
    visible(isVisible);
  };

  const handleVisibleBooking = () => {
    visibleBooking(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      order: true,
      dateOrder: new Date().toISOString(),
      book: bookId.toString(),
      customer: SyncStorage.get('userId').toString(),
    },
  });

  const onSubmit = (bookingData: BookingUserData) => {
    dispatch(bookingRequest({ data: bookingData }));
    handleVisible();
    handleVisibleBooking();
    setVisibility(false);
  };

  return (
    <Modal animationType='fade'>
      <StyledView>
        <StyledModalView>
          <TouchableOpacity
            onPress={() => {
              handleVisible();
              setVisibility(false);
              visibleBooking(false);
            }}
          >
            <Cross width={35} height={35} />
          </TouchableOpacity>
          <ModalTitle>Подтвердите бронирование:</ModalTitle>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <AssessScreenButton onPress={handleSubmit(onSubmit)}>
                <StyledTextBook>Забронировать на сегодня</StyledTextBook>
              </AssessScreenButton>
            )}
            name='dateOrder'
          />
        </StyledModalView>
      </StyledView>
    </Modal>
  );
};
