import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import SyncStorage from 'sync-storage';

import { HOST } from '../../app-constants';

import { BOOK_BY_ID_REQUEST, bookByIdSuccess, bookByIdFailure } from './actions';
import { BookById } from './types';

export const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.request.use(
  (res) => {
    res.headers['Authorization'] = `Bearer ${SyncStorage.get('jwtToken')}`;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const bookById = (bookId: number) => instance.get(`/api/books/${bookId}`);
// export const bookById = (bookId: number) => instance.get(`/book/book/${bookId - 2}.json`);

export function* bookByIdSaga(action: any) {
  try {
    const response: { data: BookById } = yield call(bookById, action.bookId);
    const { data } = response;
    yield put(bookByIdSuccess(data));
  } catch (error: any) {
    yield put(bookByIdFailure(error));
  }
}

export function* watcherSagaForBookById() {
  yield takeLatest(BOOK_BY_ID_REQUEST, bookByIdSaga);
}
