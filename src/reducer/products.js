import { productsConstants, productConstants } from '../_constants';

const productsInitialState = [];
const productInitialState = {
  id: 0,
  productNumber: '',
  description: '',
  startPrice: 0,
  lastPrice: 0,
  categoriesValue: '',
  sales: false,
};

export function products(state = productsInitialState, action) {
  switch (action.type) {
    case productsConstants.GET_ALL_SUCCESS:
      return action.products;
    default:
      return state;
  }
}

export function product(state = productInitialState, action) {
  switch (action.type) {
    case productConstants.GET_SUCCESS:
    case productConstants.ADD_SUCCESS:
    case productConstants.UPDATE_SUCCESS:
      return {
        ...state,
        ...action.product
      };
    default:
      return state;
  }
}
