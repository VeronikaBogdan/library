import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

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
} from '../registration-screen/styled-sregistration-screen';

type authDataType = { username: string; password: string };

export const AuthScreen = () => {
  const {
    control,
    formState: { isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const navigation = useNavigation();

  const onSubmit = (userAuthData: authDataType) => console.log(userAuthData);

  return (
    <StyledView>
      <StyledModalView>
        <EntranceTitle>Вход в личный кабинет</EntranceTitle>
        <InputsWrapper>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur } }) => (
              <CommonInput placeholder='Логин' cursorColor={ORANGE} onBlur={onBlur} onChangeText={onChange} />
            )}
            name='username'
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur } }) => (
              <CommonInput placeholder='Пароль' cursorColor={ORANGE} onBlur={onBlur} onChangeText={onChange} />
            )}
            name='password'
          />
          {isSubmitted && !isValid && <RedHint>Неверный логин или пароль!</RedHint>}
          <AssessScreenButton onPress={handleSubmit(onSubmit)}>
            <StyledTextBook>Вход</StyledTextBook>
          </AssessScreenButton>
        </InputsWrapper>
        <DownText>Нет учётной записи?</DownText>
        <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')} style={{ alignSelf: 'flex-start' }}>
          <DownTextButton>Регистрация</DownTextButton>
        </TouchableOpacity>
      </StyledModalView>
    </StyledView>
  );
};
