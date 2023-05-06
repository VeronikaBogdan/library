import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { SIGNIN_REQUEST, signInSuccess, signInFailure } from './actions';
import { SignInUserData } from './types';
import { getData, storeData } from '../../utils/token';

// export const getAllAuthUsers = () => axios.get(`${HOST}/auth.json`);

export const instance = axios.create({
  baseURL: 'https://library-cleverland-2jfze.ondigitalocean.app/api/auth',
});

// instance.interceptors.response.use(
//   (res) => {
//     console.log('res: ', res.data.jwt);
//     storeData(res.data.jwt);

//     console.log('get', getData());
//     // getData();
//     // AsyncStorage.setItem('@jwtToken', res.data.jwt);
//     // console.log(AsyncStorage.getItem('@jwtToken'));
//     // window.localStorage.setItem('jwtToken', res.data.jwt);
//     return res;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const signIn = (signInUserData: SignInUserData) => instance.post('/local', signInUserData);

export function* signInSaga(action: any) {
  try {
    const response: { data: any } = yield call(signIn, action.signInUserData);
    yield put(signInSuccess(response.data.jwt));
    yield put(signInFailure(0));
  } catch (error: any) {
    yield put(signInFailure(error.response.status));
  }
}

export function* watcherSagaForSignIn() {
  yield takeLatest(SIGNIN_REQUEST, signInSaga);
}
