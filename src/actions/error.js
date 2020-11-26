import { errorConstants } from '../_constants';

class ErrorActions {
  set(message) {
    return dispatch => {
      dispatch({ type: errorConstants.USER_ERROR, message });
    };
  }

  reset() {
    return dispatch => dispatch({ type: errorConstants.RESET_ERROR });
  }
}

export default new ErrorActions();