import axios from 'axios';

import { url, path } from './request.config';
import { makeRequestData } from '../_helpers';

const productsPath = path.products;

class ProductsService {
  async getAll(params) {
    try {
      const response = await axios.get(`${url}/${productsPath}`, makeRequestData(params));

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async getByID(productID) {
    try {
      const response = await axios.get(`${url}/${productsPath}/${productID}`, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async add(product) {
    try {
      const response = await axios.post(`${url}/${productsPath}/`, product, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async update(product) {
    try {
      const response = await axios.put(`${url}/${productsPath}/${product.id}`, product, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  async delete(productID) {
    try {
      const response = await axios.delete(`${url}/${productsPath}/${productID}`, makeRequestData());

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default new ProductsService();