import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { debounce } from 'lodash';

import { productsActions, categoriesAction, errorAction } from '../../actions';
import { ErrorComponent, Header } from '../../components';
import { ProductCard } from './components';

class ProductsPage extends React.Component {
  getFilteredProducts = debounce(options => {
    this.props.getProducts({ categoriesValue: options });
  }, 2000);

  componentDidMount() {
    this.props.resetError();
    this.props.getCategories();
    this.props.getProducts();
  }

  handleChange = target => {
    const options = target ? target.map(option => option.value) : [];
    this.getFilteredProducts(options);
  }

  render() {
    const { products, categories } = this.props;
    return (
      <div>
        <Header />
        <h2>Products</h2>
        {categories.length && <Select options={categories} onChange={this.handleChange} isMulti />}
        <ul>
          {products.map(product => <li key={product.id}><ProductCard product={product} /></li>)}
        </ul>

        {this.props.error.message && <ErrorComponent error={this.props.error} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { products, categories, error } = state;
  return {
    products,
    categories,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: chosenCategories => dispatch(productsActions.getAll(chosenCategories)),
    getCategories: () => dispatch(categoriesAction.getAll()),
    resetError: () => dispatch(errorAction.reset())
  };
}

const connectedProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export { connectedProductsPage as ProductsPage };
