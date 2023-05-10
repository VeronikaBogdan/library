import { BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE } from './actions';

export interface BookingUserData {
  order: boolean;
  dateOrder: string;
  book: string;
  customer: string;
}

export interface BookingData {
  data: BookingUserData;
}

export interface BookingDataSuccess {
  data: {
    id: number;
    attributes: {
      order: boolean;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      dateOrder: string;
    };
  };
  meta: {};
}

export interface BookingState {
  booking: BookingData;
  pending: boolean;
  token: string;
  error: boolean | null;
}

export interface BookingRequest {
  type: typeof BOOKING_REQUEST;
  bookingData: BookingData;
}

export interface BookingSuccess {
  type: typeof BOOKING_SUCCESS;
  booking: BookingDataSuccess;
}

export interface BookingFailure {
  type: typeof BOOKING_FAILURE;
  error: string;
}

export type BookingActions = BookingRequest | BookingSuccess | BookingFailure;
