import { userConstants } from '../_constants';

const userInitialState = {
  email: '',
  firstName: '',
  lastName: ''
};

export function user(state = userInitialState, action) {
  switch (action.type) {
    case userConstants.GET_SUCCESS:
    case userConstants.UPDATE_SUCCESS:
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
}