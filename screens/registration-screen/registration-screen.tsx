import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { CardButton } from '../../components/button/card-button';
import { AuthMessage } from '../../components/modals/auth-message/auth-message';
import { Loader } from '../../components/loader/loader';

import { signUpRequest } from '../../store/registration/actions';
import { AppState } from '../../store/rootReducer';

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
  AppTitle,
} from './styled-sregistration-screen';

type RegistrationType = { firstName: string; lastName: string; password: string; username: string };

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
      token: Math.random().toString(36),
    },
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [showSteps, toggleShowSteps] = useState(false);
  const [isMessage, toggleIsMessage] = useState(false);

  const onSubmit = (userRegistrationData: RegistrationType) => {
    dispatch(signUpRequest({ ...userRegistrationData, token: Math.random().toString(36) }));
    if (!isMessage) toggleIsMessage(!isMessage);
  };

  const { pending, error, statusError, status } = useSelector((state: AppState) => state.signUp);

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
                  error={errors.username}
                />
              )}
              name='username'
            />
            {errors.username && <RedHint>Поле не может быть пустым</RedHint>}
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CommonInput
                  placeholder='Пароль'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  textContentType={'password'}
                  secureTextEntry
                  error={errors.password}
                />
              )}
              name='password'
            />
            {errors.password && <RedHint>Пароль содержит не менее 8 символов</RedHint>}
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
                <CommonInput
                  placeholder='Имя'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors.firstName}
                />
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
                <CommonInput
                  placeholder='Фамилия'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors.lastName}
                />
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
      {/* {isSubmitted && !status && pending && <Loader />} */}
      <AppTitle>Library</AppTitle>
      {!isMessage ? (
        <StyledModalView>
          <EntranceTitle>Регистрация</EntranceTitle>
          <EntranceStep>{step} шаг из 2</EntranceStep>
          <InputsWrapper>{registrationStep(step)}</InputsWrapper>
          <DownText>Есть учетная запись?</DownText>
          <TouchableOpacity onPress={() => navigation.navigate('AuthScreen')} style={{ alignSelf: 'flex-start' }}>
            <DownTextButton>
              Войти <AntDesign name='arrowright' size={24} color='black' />
            </DownTextButton>
          </TouchableOpacity>
        </StyledModalView>
      ) : statusError === '400' ? (
        <AuthMessage
          title='Данные не сохранились'
          message='Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.'
          buttonValue='назад к регистрации'
          onPress={() => {
            setStep(1);
            navigation.navigate('RegistrationScreen');
            toggleShowSteps(true);
            toggleIsMessage(!isMessage);
            reset();
          }}
        />
      ) : !!statusError ? (
        <AuthMessage
          title='Данные не сохранились'
          message='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз'
          buttonValue='повторить'
          onPress={handleSubmit(onSubmit)}
        />
      ) : !!status ? (
        <AuthMessage
          title='Регистрация успешна'
          message='Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль'
          buttonValue='вход'
          onPress={() => {
            navigation.navigate('AuthScreen');
            setStep(1);
            toggleShowSteps(true);
            toggleIsMessage(!isMessage);
            reset();
          }}
        />
      ) : (
        <StyledModalView>
          <EntranceTitle>Регистрация</EntranceTitle>
          <EntranceStep>{step} шаг из 2</EntranceStep>
          <InputsWrapper>{registrationStep(step)}</InputsWrapper>
          <DownText>Есть учетная запись?</DownText>
          <TouchableOpacity onPress={() => navigation.navigate('AuthScreen')} style={{ alignSelf: 'flex-start' }}>
            <DownTextButton>
              Войти <AntDesign name='arrowright' size={24} color='black' />
            </DownTextButton>
          </TouchableOpacity>
        </StyledModalView>
      )}
    </StyledView>
  );
};
