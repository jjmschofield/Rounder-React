import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

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
      <Card onClick={this.onClick}>
        <Image src={this.props.bar.imageUrl}/>
        <Card.Content>
          <Card.Header>{this.props.bar.name}</Card.Header>
          <Icon name="point"/>{this.props.bar.distance}m away
        </Card.Content>
      </Card>
    );
  }
};

export default BarSummaryListItem;
