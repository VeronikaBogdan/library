import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actions';

export interface SignInUserData {
  identifier: string;
  password: string;
}

export interface SignInState {
  pending: boolean;
  token: string;
  error: boolean;
  statusError: number;
}

export interface SignInRequest {
  type: typeof SIGNIN_REQUEST;
  signInUserData: SignInUserData;
}

export interface SignInSuccess {
  type: typeof SIGNIN_SUCCESS;
  token: string;
}

export interface SignInFailure {
  type: typeof SIGNIN_FAILURE;
  error: string;
}

export type SignInActions = SignInRequest | SignInSuccess | SignInFailure;
