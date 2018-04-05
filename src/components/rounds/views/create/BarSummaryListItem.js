import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export class BarSummaryListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.bar);
  }

  render() {
    return (
      <List.Item onClick={this.onClick}>
        <List.Content>
          <List.Header>{this.props.bar.name}</List.Header>
          {this.props.bar.distance}
        </List.Content>
      </List.Item>
    );
  }
};

export default BarSummaryListItem;
