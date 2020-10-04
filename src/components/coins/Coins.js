import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoinsItem from './CoinsItem';

const styles = {
  coins: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '1rem',
    fontWeight: 'bold'
  }
}

export default class Coins extends Component {
  render() {
    const { coins, rechargeBalance } = this.props;
    return (
      <div className='coins'>
        <span style={styles.coins}>Coins: </span>
        { coins.map((coin, i) => <CoinsItem coin={coin} key={i} onClick={rechargeBalance} />) }
      </div>
    )
  }
}

Coins.propTypes = {
  coins: PropTypes.array,
  rechargeBalance: PropTypes.func
}