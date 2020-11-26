import { categoryConstants, categoriesConstants, errorConstants } from '../_constants';
import { CategoriesService } from '../services';

class CategoriesActions {
  getAll() {
    return dispatch => {
      CategoriesService.getAll()
        .then(categories => dispatch({ type: categoriesConstants.GET_ALL_SUCCESS, categories }))
        .catch(error => dispatch({ type: errorConstants.CATEGORIES_ERROR, error }));
    };
  }

  add(categoryData) {
    return dispatch => {
      CategoriesService.add(categoryData)
        .then(category => dispatch({ type: categoryConstants.ADD_SUCCESS, category }))
        .catch(error => dispatch({ type: errorConstants.CATEGORY_ERROR, error }));
    };
  }

  save(categoryData) {
    return dispatch => {
      CategoriesService.update(categoryData)
        .then(category => dispatch({ type: categoryConstants.UPDATE_SUCCESS, category }))
        .catch(error => dispatch({ type: errorConstants.CATEGORY_ERROR, error }));
    };
  }

  delete(categoryID) {
    return dispatch => {
      CategoriesService.delete(categoryID)
        .then(result => dispatch({ type: categoryConstants.DELETE_SUCCESS, result }))
        .catch(error => dispatch({ type: errorConstants.CATEGORY_ERROR, error }));
    };
  }
}

export default new CategoriesActions();