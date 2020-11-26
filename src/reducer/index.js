import { combineReducers } from 'redux';

import { user } from './user';
import { authentication } from './authentication';
import { products, product } from './products';
import { history } from './history';
import { categories, category } from './categories';
import { error } from './error';
import { resetStore } from './resetStore';

const rootReducer = combineReducers({
  user,
  authentication,
  products,
  product,
  categories,
  category,
  history,
  error,
  resetStore
});

export default rootReducer;