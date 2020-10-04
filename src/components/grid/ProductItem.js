import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const styles = {
  card: {
    width: '18rem',
    margin: '1rem',
    cursor: 'pointer'
  },
  cardTitle: {
    paddingBottom: '1rem',
    fontSize: '2rem',
    color: 'tomato'
  }
};

export default class ProductItem extends Component {
  render() {
    const { product, onClick } = this.props;

    return (
      <Card className="text-center" style={styles.card} onClick={() => onClick(product.id)} >
        <Card.Body>
          <Card.Title style={styles.cardTitle}>{ product.name }</Card.Title>
          <Card.Text>Price: { product.price < 1 ? `${Math.round(product.price * 100)}p` : `£${product.price}`  } </Card.Text>
        </Card.Body>
        {
          product.total ? 
          <Card.Footer><small className="text-muted">Available items: <b>{ product.total }</b></small></Card.Footer> :
          <Card.Footer><small className="text-muted">Out of stock</small></Card.Footer>
        }
      </Card>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
}