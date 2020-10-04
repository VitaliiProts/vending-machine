import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ButtonGetMoney extends Component {
  render() {
    const { getMoney } = this.props;
    return <Button variant="success" onClick={getMoney} >Get your money</Button>
  }
}

ButtonGetMoney.propTypes = {
  getMoney: PropTypes.func,
}