import React, { Component } from 'react';
import { List, Icon, Image } from 'semantic-ui-react';

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
        <Image size="small" src={this.props.bar.imageUrl} />
        <List.Content>
          <List.Header>{this.props.bar.name}</List.Header>
          <Icon name="point" />{this.props.bar.distance}m away
        </List.Content>
      </List.Item>
    );
  }
};

export default BarSummaryListItem;
