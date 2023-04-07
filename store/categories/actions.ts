export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';

import { CategoriesRequest, CategoriesSuccess, CategoriesFailure, Category } from './types';

export const categoriesRequest = (): CategoriesRequest => ({
  type: CATEGORIES_REQUEST,
});

export const categoriesSuccess = (categories: Category[]): CategoriesSuccess => ({
  type: CATEGORIES_SUCCESS,
  categories,
});

export const categoriesFailure = (error: string): CategoriesFailure => ({
  type: CATEGORIES_FAILURE,
  error,
});
