import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { toStandardCurrencyFormat } from '../../utils/currencyUtils';
import { Product } from '../../store/products/models/Product';

export class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.props.onIncrement(this.props.product);
  }

  onDecrement() {
    this.props.onDecrement(this.props.product);
  }

  renderControls() {
    if (this.props.edit) {
      return (
        <List.Content floated="right">
          <Button.Group size="tiny">
            <Button onClick={this.onDecrement} icon="minus"/>
            <Button.Or text={this.props.product.qty}/>
            <Button onClick={this.onIncrement} positive icon="plus"/>
          </Button.Group>
        </List.Content>
      );
    }

    return (
      <List.Content floated="right">
        x {this.props.product.qty}
      </List.Content>
    );
  }

  render() {
    return (
      <List.Item>
        {this.renderControls()}
        <List.Content>
          <List.Header>
            {this.props.product.name}
          </List.Header>
          {toStandardCurrencyFormat(this.props.product.price * this.props.product.qty)}
        </List.Content>
      </List.Item>
    );
  }
}

ProductListItem.defaultProps = {
  onIncrement: () => {},
  onDecrement: () => {},
  edit: false,
};

ProductListItem.propTypes = {
  product: PropTypes.objectOf(Product).isRequired,
  onIncrement: PropTypes.func,
  edit: PropTypes.bool,
  onDecrement: PropTypes.func,
};

export default ProductListItem;
