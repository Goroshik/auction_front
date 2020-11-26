import { categoriesConstants, categoryConstants } from '../_constants';

const categoriesInitialState = [];
const categoryInitialState = {
  id: 0,
  label: '',
  value: '',
};

export function categories(state = categoriesInitialState, action) {
  switch (action.type) {
    case categoriesConstants.GET_ALL_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}

export function category(state = categoryInitialState, action) {
  switch (action.type) {
    case categoryConstants.ADD_SUCCESS:
    case categoryConstants.UPDATE_SUCCESS:
      return {
        ...state,
        ...action.category
      };
    default:
      return state;
  }
}
