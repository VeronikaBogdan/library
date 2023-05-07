import { COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_FAILURE } from './actions';

export interface CommentUserData {
  rating: number;
  text: string | null;
  book: string;
  user: string;
}

export interface CommentData {
  data: CommentUserData;
}

export interface CommentDataSuccess {
  data: {
    id: number;
    attributes: {
      rating: number;
      text: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  meta: {};
}

export interface CommentState {
  comment: CommentData;
  pending: boolean;
  token: string;
  error: boolean | null;
}

export interface CommentRequest {
  type: typeof COMMENT_REQUEST;
  commentData: CommentData;
}

export interface CommentSuccess {
  type: typeof COMMENT_SUCCESS;
  comment: CommentDataSuccess;
}

export interface CommentFailure {
  type: typeof COMMENT_FAILURE;
  error: string;
}

export type CommentActions = CommentRequest | CommentSuccess | CommentFailure;
