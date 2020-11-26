import { userConstants, errorConstants } from '../_constants';
import { UserService } from '../services';

import { browserHistory } from '../_helpers';

class UserActions {
  login(userData) {
    return dispatch => {
      UserService.login(userData)
        .then(user => {
          localStorage.setItem('token', user.token);

          dispatch({ type: userConstants.LOGIN_SUCCESS, ...userData.email });
          browserHistory.push('/products');
        })
        .catch(error => {
          dispatch({ type: errorConstants.USER_ERROR, error });
        });
    };
  }

  logout() {
    localStorage.removeItem('token');
    browserHistory.push('/login');
    return { type: userConstants.LOGOUT };
  }

  registration(userData) {
    return dispatch => {
      UserService.add(userData)
        .then(user => {
          dispatch({ type: userConstants.REGISTER_SUCCESS, user });

          const loginData = {
            email: userData.email,
            password: userData.password
          };

          dispatch(this.login(loginData));
        })
        .catch(error => dispatch({ type: errorConstants.USER_ERROR, error }));
    };
  }

  getByID(userID) {
    return dispatch => {
      UserService.getById(userID)
        .then(user => dispatch({ type: userConstants.GET_SUCCESS, user }))
        .catch(error => dispatch({ type: errorConstants.USER_ERROR, error }));
    };
  }

  getByToken() {
    return dispatch => {
      UserService.getByToken()
        .then(user => dispatch({ type: userConstants.GET_SUCCESS, user }))
        .catch(error => dispatch({ type: errorConstants.USER_ERROR, error }));
    };
  }

  save(userData) {
    return dispatch => {
      UserService.update(userData)
        .then(user => dispatch({ type: userConstants.UPDATE_SUCCESS, user }))
        .catch(error => dispatch({ type: errorConstants.USER_ERROR, error }));
    };
  }
}

export default new UserActions();