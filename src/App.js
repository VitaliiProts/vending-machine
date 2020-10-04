import React, { Component } from 'react';
import ProductList from './components/grid/ProductList';
import Coins from './components/coins/Coins';
import GetMoney from './components/buttons/ButtonGetMoney';
import GetProduct from './components/buttons/ButtonGetProduct';


class App extends Component {
  render() {
    return (
      <>
        <ProductList />
        <Coins />
        <GetMoney />
        <GetProduct />
      </>
    )
  }
}

export default App;
