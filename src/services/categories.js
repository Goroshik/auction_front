import axios from 'axios';

import { url, path } from './request.config';
import { makeRequestData } from '../_helpers';

const categoriesPath = path.categories;

class CategoriesService {
  async getAll() {
    try {
      const response = await axios.get(`${url}/${categoriesPath}`, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async add(category) {
    try {
      const response = await axios.post(`${url}/${categoriesPath}/`, category, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async update(categoryID, category) {
    try {
      const response = await axios.put(`${url}/${categoriesPath}/`, category, makeRequestData({ categoryID: categoryID }));

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async delete(categoryID) {
    try {
      const response = await axios.delete(`${url}/${categoriesPath}/`, makeRequestData({ categoryID: categoryID }));

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default new CategoriesService();