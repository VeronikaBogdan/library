export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

import { SignInRequest, SignInSuccess, SignInFailure, SignInUserData } from './types';

export const signInRequest = (signInUserData: SignInUserData): SignInRequest => ({
  type: SIGNIN_REQUEST,
  signInUserData,
});

export const signInSuccess = (token: string): SignInSuccess => ({
  type: SIGNIN_SUCCESS,
  token,
});

export const signInFailure = (error: number): SignInFailure => ({
  type: SIGNIN_FAILURE,
  error,
});
