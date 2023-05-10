import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actions';

import { SignUpUserData, SignUpActions, SignUpState } from './types';

const initialState: SignUpState = {
  pending: false,
  status: '',
  error: false,
  statusError: '',
};

export default (state = initialState, action: SignUpActions) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, pending: true };
    case SIGNUP_SUCCESS:
      const { status } = action;
      return { ...state, pending: false, status: status };
    case SIGNUP_FAILURE:
      const { error } = action;
      return { ...state, pending: false, error: true, statusError: error };
    default:
      return { ...state };
  }
};
