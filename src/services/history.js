import axios from 'axios';

import { url, path } from './request.config';
import { makeRequestData } from '../_helpers';

const historyPath = path.history;

class HistoryService {
  async getAll(params) {
    try {
      const response = await axios.get(`${url}/${historyPath}`, makeRequestData(params));

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async add(history) {
    try {
      const response = await axios.post(`${url}/${historyPath}/`, history, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default new HistoryService();