import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { signInRequest } from '../../store/auth/actions';
import { AppState } from '../../store/rootReducer';

import { ORANGE } from '../../styles/constant';
import { AssessScreenButton, StyledTextBook } from '../../components/button/styled-card-button';
import { StyledModalView } from '../../components/modals/styled-modal';

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
import { AuthMessage } from '../../components/modals/auth-message/auth-message';

type authDataType = { username: string; password: string };

export const AuthScreen = () => {
  const {
    control,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: { username: '', password: '' },
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = (userAuthData: authDataType) => {
    dispatch(signInRequest(userAuthData));
    token && navigation.navigate('AllBooks');
  };

  const { pending, error, statusError, token } = useSelector((state: AppState) => state.signIn);

  return (
    <StyledView>
      <AppTitle>Library</AppTitle>
      {!!statusError && statusError !== '400' ? (
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
                  error={errors.username}
                />
              )}
              name='username'
            />
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
              }}
              render={({ field: { onChange, onBlur } }) => (
                <CommonInput
                  placeholder='Пароль'
                  cursorColor={ORANGE}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  textContentType={'password'}
                  secureTextEntry
                  error={errors.password}
                />
              )}
              name='password'
            />
            {(statusError === '400' || (isSubmitted && !isValid)) && <RedHint>Неверный логин или пароль!</RedHint>}
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
