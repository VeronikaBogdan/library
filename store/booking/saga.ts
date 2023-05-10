import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import SyncStorage from 'sync-storage';

import { HOST } from '../../app-constants';

import { BOOKING_REQUEST, bookingSuccess, bookingFailure } from './actions';
import { BookingData } from './types';

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

export const booking = (bookingData: BookingData) => instance.post('/api/bookings', bookingData);

export function* bookingSaga(action: any) {
  try {
    const response: { data: any } = yield call(booking, action.bookingData);
    const { data } = response;
    yield put(bookingSuccess(data));
  } catch (error: any) {
    console.log(error);
    yield put(bookingFailure(error));
  }
}

export function* watcherSagaForBooking() {
  yield takeLatest(BOOKING_REQUEST, bookingSaga);
}
