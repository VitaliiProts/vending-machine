import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ButtonGetProduct extends Component {
  render() {
    const { getProduct } = this.props;
    return <Button variant="primary" onClick={ getProduct }>Get your product</Button>
  }
}

ButtonGetProduct.propTypes = {
  getProduct: PropTypes.func,
}