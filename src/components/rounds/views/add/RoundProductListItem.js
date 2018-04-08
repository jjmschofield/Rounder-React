import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

export class RoundProductListItem extends Component {
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

  render() {
    return (
      <List.Item>
        <List.Content floated='right'>
          <Button.Group size="tiny">
            <Button onClick={this.onDecrement} icon="minus"/>
            <Button.Or text={this.props.product.qty}/>
            <Button onClick={this.onIncrement} positive icon="plus"/>
          </Button.Group>
        </List.Content>
        <List.Content>
          <List.Header>
            {this.props.product.name}
          </List.Header>
          £{this.props.product.price * this.props.product.qty}
        </List.Content>
      </List.Item>
    );
  }
};

export default RoundProductListItem;
