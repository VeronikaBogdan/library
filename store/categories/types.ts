import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from './actionTypes';

export interface ICategories {
  token: string;
}

export interface Category {
  name: string;
  path: string;
  id: number;
}

export interface CategoriesState {
  categories: Category[];
  pending: boolean;
  token: string;
  error: string | null;
}

// export interface CategoriesPayload {
//   values: {};
//   //   values: { email: string; password: string };
//   callback: any;
// }

export interface CategoriesSuccessPayload {
  token: string;
  categories: Category[];
}

export interface CategoriesFailurePayload {
  error: string;
}

export interface CategoriesRequest {
  type: typeof CATEGORIES_REQUEST;
  //   payload: CategoriesPayload;
}

export interface CategoriesSuccess {
  type: typeof CATEGORIES_SUCCESS;
  payload: CategoriesSuccessPayload;
}

export interface CategoriesFailure {
  type: typeof CATEGORIES_FAILURE;
  payload: CategoriesFailurePayload;
}

export type CategoriesActions = CategoriesRequest | CategoriesSuccess | CategoriesFailure;
