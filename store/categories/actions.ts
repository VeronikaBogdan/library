import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from './actionTypes';

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
