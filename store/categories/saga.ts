import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { categoriesSuccess, categoriesFailure } from './actions';

import { CATEGORIES_REQUEST } from './actions';

import { HOST } from '../../app-constants';

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

export const categories = () => instance.get('/api/categories');

export function* categoriesSaga() {
  try {
    const response: { data: any } = yield call(categories);
    yield put(categoriesSuccess({ categories: response.data }));
  } catch (error: any) {
    yield put(categoriesFailure({ error: error.message }));
  }
}

export function* watcherSagaForCategories() {
  yield all([takeLatest(CATEGORIES_REQUEST, categoriesSaga)]);
}
