import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ButtonGetProduct extends Component {
  render() {
    const { getProduct, lastPurchased } = this.props;
    return (
      <Button variant="primary" onClick={ getProduct } disabled={lastPurchased === '' ? true : false}>
        Get your product { lastPurchased  }
      </Button>
    )
  }
}

ButtonGetProduct.propTypes = {
  getProduct: PropTypes.func,
  lastPurchased: PropTypes.string
}