import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import SyncStorage from 'sync-storage';

import { signInRequest } from '../../store/auth/actions';
import { categoriesRequest } from '../../store/categories/actions';
import { booksRequest } from '../../store/books/actions';
import { AppState } from '../../store/rootReducer';
import { SignInUserData } from '../../store/auth/types';

import { ORANGE } from '../../styles/constant';
import { Loader } from '../../components/loader/loader';
import { AssessScreenButton, StyledTextBook } from '../../components/button/styled-card-button';
import { StyledModalView } from '../../components/modals/styled-modal';
import { AuthMessage } from '../../components/modals/auth-message/auth-message';

import {
  CommonInput,
  DownText,
  DownTextButton,
  EntranceTitle,
  StyledView,
  InputsWrapper,
  RedHint,
  AppTitle,
} from '../registration-screen/styled-sregistration-screen';

type authDataType = { identifier: string; password: string };

export const AuthScreen = () => {
  const {
    control,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: { identifier: '', password: '' },
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = (userAuthData: SignInUserData) => {
    dispatch(signInRequest(userAuthData));
    reset();
  };

  const { pending, statusError, token } = useSelector((state: AppState) => state.signIn);

  useEffect(() => {
    if (token && SyncStorage.get('jwtToken')) {
      navigation.navigate('AllBooks');
      dispatch(categoriesRequest());
      dispatch(booksRequest());
    }
  }, [token, SyncStorage.get('jwtToken')]);

  return pending ? (
    <Loader />
  ) : (
    <StyledView>
      <AppTitle>Library</AppTitle>
      {!!statusError && statusError !== 400 ? (
        <AuthMessage
          title='Вход не выполнен'
          message='Что-то пошло не так. Попробуйте ещё раз'
          buttonValue='повторить'
          onPress={handleSubmit(onSubmit)}
        />
      ) : (
        <StyledModalView>
          <EntranceTitle>Вход в личный кабинет</EntranceTitle>
          <InputsWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur } }) => (
                <CommonInput
                  placeholder='Логин'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  textContentType='username'
                  error={errors.identifier}
                />
              )}
              name='identifier'
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur } }) => (
                <CommonInput
                  placeholder='Пароль'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  textContentType='password'
                  secureTextEntry
                  error={errors.password}
                />
              )}
              name='password'
            />
            {((isSubmitted && !isValid) || statusError === 400) && <RedHint>Неверный логин или пароль!</RedHint>}
            <AssessScreenButton onPress={handleSubmit(onSubmit)}>
              <StyledTextBook>Вход</StyledTextBook>
            </AssessScreenButton>
          </InputsWrapper>
          <DownText>Нет учётной записи?</DownText>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationScreen')}
            style={{ alignSelf: 'flex-start' }}
          >
            <DownTextButton>
              Регистрация <AntDesign name='arrowright' size={24} color='black' />
            </DownTextButton>
          </TouchableOpacity>
        </StyledModalView>
      )}
    </StyledView>
  );
};
