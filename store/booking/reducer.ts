import { BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE } from './actions';

import { BookingData, BookingDataSuccess, BookingActions, BookingState } from './types';

const initialState: BookingState = {
  booking: {} as BookingData,
  pending: true,
  token: '',
  error: false,
};

export default (state = initialState, action: BookingActions) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return { ...state, pending: true };
    case BOOKING_SUCCESS:
      const { booking: booking } = action;
      return { ...state, booking: booking, pending: false };
    case BOOKING_FAILURE:
      return { ...state, pending: false, error: true, booking: 0 };
    default:
      return { ...state };
  }
};
