import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export class RoundSummaryListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.round);
  }

  render() {
    return (
      <List.Item onClick={this.onClick}>
        <List.Content>
          <List.Header>{this.props.round.barName}</List.Header>
          {this.props.round.timestamp}
        </List.Content>
      </List.Item>
    );
  }
};

export default RoundSummaryListItem;
