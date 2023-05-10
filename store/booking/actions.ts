export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const BOOKING_FAILURE = 'BOOKING_FAILURE';

import { BookingRequest, BookingSuccess, BookingFailure, BookingDataSuccess, BookingData } from './types';

export const bookingRequest = (bookingData: BookingData): BookingRequest => ({
  type: BOOKING_REQUEST,
  bookingData,
});

export const bookingSuccess = (booking: BookingDataSuccess): BookingSuccess => ({
  type: BOOKING_SUCCESS,
  booking: booking,
});

export const bookingFailure = (error: string): BookingFailure => ({
  type: BOOKING_FAILURE,
  error,
});
