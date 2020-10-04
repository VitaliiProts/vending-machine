import React, { Component } from 'react';
import { withAlert  } from 'react-alert'
import { Button } from 'react-bootstrap';

import ProductList from './components/grid/ProductList';
import Coins from './components/coins/Coins';
import ButtonGetMoney from './components/buttons/ButtonGetMoney';
import ButtonGetProduct from './components/buttons/ButtonGetProduct';

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
    currentProduct: '',
    purchasePermission: true,
  }

  getItem = id => {
    const message = this.props.alert;
    const copyProductsArr = this.state.products.slice();
    const purchasePermission = this.state.purchasePermission;
    const currentProduct = this.state.currentProduct;
    const totalItem = copyProductsArr[id].total;
    const nameItem = copyProductsArr[id].name;
    const priceItem = copyProductsArr[id].price;
    let balance = this.state.balance;

    if (priceItem && purchasePermission > balance && totalItem > 0) {      
      message.error('Please insert coins');
    }

    if (!purchasePermission) {
      message.error(`Please pick up your product ${currentProduct}`)
    }

    if(purchasePermission && totalItem < 1){
      message.error('The product is over');
    }

    if (purchasePermission && totalItem > 0 && copyProductsArr[id].total > 0 && priceItem <= balance) {
      copyProductsArr[id].total--;
      balance -= priceItem;

      this.setState({
        products: copyProductsArr,
        purchasePermission: !purchasePermission,
        currentProduct: nameItem,
        balance: balance,
      })
    }
  }

  rechargeBalance = val => {
    const message = this.props.alert;
    const balance = this.state.balance;
    const purchasePermission = this.state.purchasePermission;
    const currentProduct = this.state.currentProduct;
    const newBalance = balance + val;

    if (purchasePermission) {
      this.setState({
        balance: parseFloat(newBalance.toFixed(2))
      }); 
    } else {
      message.error(`please pick up your product ${currentProduct}`);
    }
  }

  getMoney = () => {
    this.setState({
      balance: 0,
      purchasePermission: true,
    })

  }

  getProduct = () => {
    this.setState({
      purchasePermission: true,
      currentProduct: ''
    })
  }

  render() {
    let balance = this.state.balance;
    let lastPurchased = this.state.currentProduct;

    return (
      <section className='container'>
        <h1 className='text-center'>Vending Machine</h1>

        <ProductList products={this.state.products} getItem={this.getItem} />
        <Coins coins={this.state.coins} rechargeBalance={this.rechargeBalance} />
        <div className='payment-block'>
          <ButtonGetMoney getMoney={this.getMoney} balance={balance} lastPurchased={lastPurchased} />
          <Button variant="outline-info" disabled>
            Balance: <strong>{ balance < 1 ? `${Math.round(balance * 100)}p` : `£${balance}` }</strong>
          </Button>
          <ButtonGetProduct getProduct={this.getProduct} balance={balance} lastPurchased={lastPurchased} />
        </div>
      </section>
    )
  }
}

export default withAlert()(App);