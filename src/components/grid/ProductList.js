import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  render() {
    const { products, getItem } = this.props;
    return (
      <div className='product-list'>
        { products.map(product => <ProductItem product={product} key={product.id} onClick={getItem} />) }
      </div>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  getItem: PropTypes.func
}