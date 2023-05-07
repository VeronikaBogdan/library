import { COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_FAILURE } from './actions';

import { CommentData, CommentDataSuccess, CommentActions, CommentState } from './types';

const initialState: CommentState = {
  comment: {} as CommentData,
  pending: true,
  token: '',
  error: false,
};

export default (state = initialState, action: CommentActions) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return { ...state, pending: true };
    case COMMENT_SUCCESS:
      const { comment: comment } = action;
      return { ...state, comment: comment, pending: false };
    case COMMENT_FAILURE:
      return { ...state, pending: false, error: true, comment: 0 };
    default:
      return { ...state };
  }
};
