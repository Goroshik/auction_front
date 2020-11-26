import { productConstants, productsConstants, errorConstants } from '../_constants';
import { ProductsService } from '../services';

class ProductsActions {
  getAll(chosenCategories) {
    return dispatch => {
      ProductsService.getAll(chosenCategories)
        .then(products => {
          if (chosenCategories) {
            dispatch({ type: productsConstants.GET_ALL_SUCCESS, products });
          }
          dispatch({ type: productsConstants.GET_ALL_SUCCESS, products });
        })
        .catch(error => dispatch({ type: errorConstants.PRODUCTS_ERROR, error }));
    };
  }

  add(product) {
    return dispatch => {
      ProductsService.add(product)
        .then(product => dispatch({ type: productConstants.ADD_SUCCESS, product }))
        .catch(error => dispatch({ type: errorConstants.PRODUCT_ERROR, error }));
    };
  }

  getByID(product) {
    return dispatch => {
      ProductsService.getByID(product)
        .then(product => dispatch({ type: productConstants.GET_SUCCESS, product }))
        .catch(error => dispatch({ type: errorConstants.PRODUCT_ERROR, error }));
    };
  }

  save(productData) {
    return dispatch => {
      ProductsService.update(productData)
        .then(product => dispatch({ type: productConstants.UPDATE_SUCCESS, product }))
        .catch(error => dispatch({ type: errorConstants.PRODUCT_ERROR, error }));
    };
  }

  delete(productID) {
    return dispatch => {
      ProductsService.delete(productID)
        .then(result => dispatch({ type: productConstants.DELETE_SUCCESS, result }))
        .catch(error => dispatch({ type: errorConstants.PRODUCT_ERROR, error }));
    };
  }
}

export default new ProductsActions();