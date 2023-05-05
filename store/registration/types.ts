import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actions';

export interface SignUpUserData {
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  token: string;
}

export interface SignUpState {
  pending: boolean;
  status: string;
  error: boolean;
  statusError: string;
}

export interface SignUpRequest {
  type: typeof SIGNUP_REQUEST;
  signUpUserData: SignUpUserData;
}

export interface SignUpSuccess {
  type: typeof SIGNUP_SUCCESS;
  status: string;
}

export interface SignUpFailure {
  type: typeof SIGNUP_FAILURE;
  error: any;
}

export type SignUpActions = SignUpRequest | SignUpSuccess | SignUpFailure;
