import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from './actions';

export interface Category {
  name: string;
  path: string;
  id: number;
}

export interface CategoriesState {
  categories: Category[];
  pending: boolean;
  token: string;
  error: boolean | null;
}

// export interface CategoriesPayload {
//   values: {};
//   //   values: { email: string; password: string };
//   callback: any;
// }

export interface CategoriesRequest {
  type: typeof CATEGORIES_REQUEST;
}

export interface CategoriesSuccess {
  type: typeof CATEGORIES_SUCCESS;
  categories: Category[];
}

export interface CategoriesFailure {
  type: typeof CATEGORIES_FAILURE;
  error: string;
}

export type CategoriesActions = CategoriesRequest | CategoriesSuccess | CategoriesFailure;
