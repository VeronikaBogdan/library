export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';

import {
  CategoriesRequest,
  CategoriesSuccess,
  CategoriesSuccessPayload,
  CategoriesFailure,
  CategoriesFailurePayload,
} from './types';

export const categoriesRequest = (): CategoriesRequest => ({
  type: CATEGORIES_REQUEST,
});

export const categoriesSuccess = (payload: CategoriesSuccessPayload): CategoriesSuccess => ({
  type: CATEGORIES_SUCCESS,
  payload,
});

export const categoriesFailure = (payload: CategoriesFailurePayload): CategoriesFailure => ({
  type: CATEGORIES_FAILURE,
  payload,
});
