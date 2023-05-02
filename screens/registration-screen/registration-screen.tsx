import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { CardButton } from '../../components/button/card-button';
import { AssessScreenButton, StyledTextBook } from '../../components/button/styled-card-button';

import { ORANGE } from '../../styles/constant';
import { StyledModalView } from '../../components/modals/styled-modal';
import {
  CommonInput,
  DownText,
  DownTextButton,
  EntranceTitle,
  EntranceStep,
  StyledView,
  InputsWrapper,
  RedHint,
} from './styled-sregistration-screen';

type registrationDataType = { username: string; password: string; firstName: string; lastName: string };

export const RegistrationScreen = () => {
  const {
    control,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [showSteps, toggleShowSteps] = useState(false);

  const onSubmit = (userRegistrationData: registrationDataType) => console.log(userRegistrationData);

  const registrationStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CommonInput
                  placeholder='Придумайте логин для входа'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name='username'
            />
            {errors.username && <RedHint>Используйте для логина латинский алфавит и цифры</RedHint>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CommonInput
                  placeholder='Пароль'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name='password'
            />
            {errors.password && <RedHint>Пароль не менее 8 символов, с заглавной буквой и цифрой</RedHint>}
            {isValid ? (
              <AssessScreenButton
                onPress={() => {
                  setStep(2);
                }}
              >
                <StyledTextBook>Следующий шаг</StyledTextBook>
              </AssessScreenButton>
            ) : (
              <CardButton text='Следующий шаг' choice='' bookpage='' list='' onPress={() => {}} />
            )}
          </>
        );
      case 2:
        return (
          <>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur } }) => (
                <CommonInput placeholder='Имя' cursorColor={ORANGE} onBlur={onBlur} onChangeText={onChange} />
              )}
              name='firstName'
            />
            {errors.firstName && <RedHint>Поле не может быть пустым</RedHint>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur } }) => (
                <CommonInput placeholder='Фамилия' cursorColor={ORANGE} onBlur={onBlur} onChangeText={onChange} />
              )}
              name='lastName'
            />
            {errors.lastName && <RedHint>Поле не может быть пустым</RedHint>}
            {isValid ? (
              <AssessScreenButton onPress={handleSubmit(onSubmit)}>
                <StyledTextBook>Зарегистрироваться</StyledTextBook>
              </AssessScreenButton>
            ) : (
              <CardButton text='Зарегистрироваться' choice='' bookpage='' list='' onPress={() => {}} />
            )}
          </>
        );
    }
  };

  return (
    <StyledView>
      <StyledModalView>
        <EntranceTitle>Регистрация</EntranceTitle>
        <EntranceStep>{step} шаг из 2</EntranceStep>
        <InputsWrapper>{registrationStep(step)}</InputsWrapper>
        <DownText>Есть учетная запись?</DownText>
        <TouchableOpacity onPress={() => navigation.navigate('AuthScreen')} style={{ alignSelf: 'flex-start' }}>
          <DownTextButton>Войти</DownTextButton>
        </TouchableOpacity>
      </StyledModalView>
    </StyledView>
  );
};
