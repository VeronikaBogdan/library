import axios from 'axios';
import SyncStorage from 'sync-storage';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { SIGNIN_REQUEST, signInSuccess, signInFailure } from './actions';
import { SignInUserData } from './types';

// export const getAllAuthUsers = () => axios.get(`${HOST}/auth.json`);

export const instance = axios.create({
  baseURL: `${HOST}/api/auth`,
});

instance.interceptors.response.use(
  (res) => {
    SyncStorage.set('jwtToken', res.data.jwt);
    SyncStorage.set('userId', res.data.user.id);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
