import { userConstants } from '../_constants';

const initialState = {
  userID: 0
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        userID: action.data.id
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}