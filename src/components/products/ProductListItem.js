import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

import { toStandardCurrencyFormat } from '../../utils/currencyUtils';

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
};

export default ProductListItem;
