import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './actions';

import { SignInActions, SignInState } from './types';

const initialState: SignInState = {
  token: '',
  pending: true,
  error: false,
  statusError: '',
};

export default (state = initialState, action: SignInActions) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { ...state, pending: true };
    case SIGNIN_SUCCESS:
      const { token } = action;
      return { ...state, pending: false, token: token };
    case SIGNIN_FAILURE:
      const { error } = action;
      return { ...state, pending: false, error: true, statusError: error };
    default:
      return { ...state };
  }
};
