import { createSelector } from 'reselect';

import { CategoriesState } from '../rootReducer';

const getCategories = (state: CategoriesState) => state.categories.categories;
const getPending = (state: CategoriesState) => state.categories.pending;
const getToken = (state: CategoriesState) => state.categories.token;
const getError = (state: CategoriesState) => state.categories.error;

export const getCategoriesSelector = createSelector(getCategories, (categories) => categories);
export const getPendingSelector = createSelector(getPending, (pending) => pending);
export const gettokenSelector = createSelector(getToken, (token) => token);
export const getErrorSelector = createSelector(getError, (error) => error);
