import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

export class RoundSummaryListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.round);
  }

  render() {
    if (this.props.round && this.props.bar) {
      return (
        <List.Item onClick={this.onClick}>
          <Image size="small" src={this.props.bar.imageUrl} />
          <List.Content>
            <List.Header>{this.props.bar.name}</List.Header>
            {this.props.round.timestamp}
          </List.Content>
        </List.Item>
      );
    }
    return [];
  }
};

export default RoundSummaryListItem;
