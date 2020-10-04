import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const styles = {
  btn: {
    margin: '5px',
    cursor: 'pointer'
  },
};

export default class CoinsItem extends Component {
  render() {
    const { coin, onClick } = this.props;
    return (
      <Button variant="outline-success" style={styles.btn} value={coin} onClick={() => onClick(coin)} >
        { coin < 1 ? `${Math.round(coin * 100)}p` : `£${coin}` }
      </Button>
    )
  }
}

CoinsItem.propTypes = {
  coin: PropTypes.number,
  onClick: PropTypes.func
}