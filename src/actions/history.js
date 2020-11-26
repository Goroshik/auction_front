import { historyConstants, errorConstants } from '../_constants';
import { HistoryService } from '../services';

class HistoryActions {
  getAll(filterData) {
    return dispatch => {
      HistoryService.getAll(filterData)
        .then(history => dispatch({ type: historyConstants.GET_ALL_SUCCESS, history }))
        .catch(error => dispatch({ type: errorConstants.HISTORY_ERROR, error }));
    };
  }

  add(history) {
    return dispatch => {
      HistoryService.add(history)
        .then(result => {
          dispatch({ type: historyConstants.ADD_SUCCESS, result });
          dispatch(this.getAll({ productID: result.productID }));
        })
        .catch(error => dispatch({ type: errorConstants.HISTORY_ERROR, error }));
    };
  }
}

export default new HistoryActions();