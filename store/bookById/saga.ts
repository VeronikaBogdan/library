import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { BOOK_BY_ID_REQUEST, bookByIdSuccess, bookByIdFailure } from './actions';
import { BookById } from './types';

export const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.request.use(
  (res) => {
    //   res.headers['Authorization'] = `Bearer ${localStorage.getItem('jwtToken')}`;
    res.headers[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyMSwiaWF0IjoxNjgwMjI1OTA3LCJleHAiOjE2ODI4MTc5MDd9.icXXUYIAvmpu_-qemPBdsoyO2-ER4fS3kSYI2ph7V0Q`;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export const bookById = (bookId: number) => instance.get(`/api/books/${bookId}`);
export const bookById = (bookId: number) => instance.get(`/${bookId}.json`);
// export const bookById = (bookId: number) => instance.get(`/2.json`);

export function* bookByIdSaga(action: any) {
  try {
    const response: { data: BookById } = yield call(bookById, action.bookId);
    const { data } = response;
    yield put(bookByIdSuccess(data));
  } catch (error: any) {
    yield put(bookByIdFailure(error.message));
  }
}

export function* watcherSagaForBookById() {
  yield all([takeLatest(BOOK_BY_ID_REQUEST, bookByIdSaga)]);
}
