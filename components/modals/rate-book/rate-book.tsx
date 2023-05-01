import { useState } from 'react';
import { Modal, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import Cross from '../../../assets/svg/cross.svg';
import { CardButton } from '../../button/card-button';
import { Rating } from '../../stars/rating';

import { ORANGE } from '../../../styles/constant';
import { ModalTitle, StyledModalView } from '../styled-modal';
import { RateText, RatingInput, TextInput } from './styled-rate-book';

export const RateBookModal = ({ visible }: { visible: boolean }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [isVisible, setVisibility] = useState(visible);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: ~~(Math.random() * (1000 - 1) + 1),
      createdAt: new Date().toISOString(),
      rating: null,
      text: '',
      //   user: {
      // commetUserId:
      //   }
    },
  });
  const onSubmit = (data: any) => console.log(data);

  //   console.log(visible);
  //   console.log(isVisible);

  return (
    <Modal animationType='fade' transparent={true}>
      <StyledModalView>
        <Cross width={35} height={35} onPress={() => setVisibility(!isVisible)} />
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
        {errors.rating && <Text>Это обязательное поле с допустимыми значениями от 1 до 5</Text>}
        <Rating amount={getValues('rating')} choice='bookscreen' />

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
        {errors.text && <Text>Это обязательное поле</Text>}
        <CardButton text='Оценить' bookpage='bookpage' onPress={handleSubmit(onSubmit)} list='' choice='' />
      </StyledModalView>
    </Modal>
  );
};
