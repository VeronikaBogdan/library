export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

import { SignUpRequest, SignUpSuccess, SignUpFailure, SignUpUserData } from './types';

export const signUpRequest = (signUpUserData: SignUpUserData): SignUpRequest => ({
  type: SIGNUP_REQUEST,
  signUpUserData,
});

export const signUpSuccess = (signUp: any): SignUpSuccess => ({
  type: SIGNUP_SUCCESS,
  status: signUp,
});

export const signUpFailure = (error: string): SignUpFailure => ({
  type: SIGNUP_FAILURE,
  error,
});
