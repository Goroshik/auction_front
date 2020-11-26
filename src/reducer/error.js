import { errorConstants } from '../_constants';

const initialState = {
  message: ''
};

export function error(state = initialState, action) {
  switch (action.type) {
    case errorConstants.USER_ERROR:
    case errorConstants.HISTORY_ERROR:
    case errorConstants.CATEGORY_ERROR:
    case errorConstants.CATEGORIES_ERROR:
    case errorConstants.PRODUCT_ERROR:
    case errorConstants.PRODUCTS_ERROR:
      return {
        ...state,
        ...action.error
      };
    case 'RESET_ERROR':
    default:
      return state;
  }
}