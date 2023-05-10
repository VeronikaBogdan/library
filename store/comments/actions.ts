export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAILURE = 'COMMENT_FAILURE';

import { CommentRequest, CommentSuccess, CommentFailure, CommentDataSuccess, CommentData } from './types';

export const commentRequest = (commentData: CommentData): CommentRequest => ({
  type: COMMENT_REQUEST,
  commentData,
});

export const commentSuccess = (comment: CommentDataSuccess): CommentSuccess => ({
  type: COMMENT_SUCCESS,
  comment: comment,
});

export const commentFailure = (error: string): CommentFailure => ({
  type: COMMENT_FAILURE,
  error,
});
