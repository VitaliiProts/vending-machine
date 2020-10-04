import React, { Component } from 'react';
import ProductList from './components/grid/ProductList';
import Coins from './components/coins/Coins';
import GetMoney from './components/buttons/ButtonGetMoney';
import GetProduct from './components/buttons/ButtonGetProduct';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    products: [
      { id: 0, name: 'Coca-cola', price: 0.50, total: 2 },
      { id: 1, name: 'Pepsi', price: 5, total: 1 },
      { id: 2, name: 'Lipton', price: 2, total: 7 },
      { id: 3, name: 'Sandora', price: 2.5, total: 4 },
      { id: 4, name: 'Наш сік', price: 0.20, total: 3 },
      { id: 5, name: 'Моршинська', price: 2, total: 3 },
    ],
  }

  getItem = id => {
    console.log('TEST')
  }

  render() {
    return (
      <section className='container'>
        <h1 className='text-center'>Vending Machine</h1>

        <ProductList products={this.state.products} getItem={this.getItem} />
        <Coins />
        <GetMoney />
        <GetProduct />
      </section>
    )
  }
}

export default App;
