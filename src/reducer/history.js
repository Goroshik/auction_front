import { historyConstants } from '../_constants';

const historyInitialState = {
  items: []
};

export function history(state = historyInitialState, action) {
  switch (action.type) {
    case historyConstants.GET_ALL_SUCCESS:
    case historyConstants.GET_FILTERED_SUCCESS:
    case historyConstants.ADD_SUCCESS:
      return {
        ...state,
        items: action.history || []
      };
    default:
      return state;
  }
}