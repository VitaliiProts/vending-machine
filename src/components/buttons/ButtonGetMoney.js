import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ButtonGetMoney extends Component {
  render() {
    const { getMoney, balance, lastPurchased } = this.props;
    return <Button variant="success" onClick={getMoney} disabled={(balance <= 0) ? true : lastPurchased === '' ? false : true}>Get your money</Button>
  }
}

ButtonGetMoney.propTypes = {
  getMoney: PropTypes.func,
  balance: PropTypes.number,
  lastPurchased: PropTypes.string
}