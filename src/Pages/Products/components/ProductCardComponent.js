import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productNumber, description, startPrice, lastPrice, sales, id } = this.props.product;
    return (
      <div style={{ border: '5px solid black', margin: '4px' }} >
        <Link to={`/products/${id}`}>
          <div sales={sales.toString()}>
            <div>{productNumber}</div>
            <div>{description}</div>
            <div>{startPrice}</div>
            <div>{lastPrice}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export { ProductCard };