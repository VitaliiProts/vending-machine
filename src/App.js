import React, { Component } from 'react';
import ProductList from './components/grid/ProductList';
import Coins from './components/coins/Coins';
import ButtonGetMoney from './components/buttons/ButtonGetMoney';
import ButtonGetProduct from './components/buttons/ButtonGetProduct';

import { Button } from 'react-bootstrap';
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
    coins: [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2],
    balance: 0,
  }

  getItem = id => {
    console.log('id', id)
  }

  rechargeBalance = val => {
    console.log('val', val)
  }

  render() {
    let balance = this.state.balance;

    return (
      <section className='container'>
        <h1 className='text-center'>Vending Machine</h1>

        <ProductList products={this.state.products} getItem={this.getItem} />
        <Coins coins={this.state.coins} rechargeBalance={this.rechargeBalance} />
        <div className='payment-block'>
          <ButtonGetMoney />
          <Button variant="outline-info" disabled>
            Balance: <strong>{ balance < 1 ? `${Math.round(balance * 100)}p` : `£${balance}` }</strong>
          </Button>
          <ButtonGetProduct />
        </div>
      </section>
    )
  }
}

export default App;
