import axios from 'axios';

import { url, path } from './request.config';
import { makeRequestData } from '../_helpers';

const usersPath = path.users;
const loginPath = path.login;

class UserService {
  async login(userData) {
    try {
      const response = await axios.post(`${url}/${loginPath}`, userData);

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async add(userData) {
    try {
      const response = await axios.post(`${url}/${usersPath}/`, userData);

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async getById(userID) {
    try {
      const response = await axios.get(`${url}/${usersPath}/${userID}`, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async getByToken() {
    try {
      const response = await axios.get(`${url}/${usersPath}/`, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async update(userData) {
    try {
      const response = await axios.put(`${url}/${usersPath}/`, userData, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default new UserService();