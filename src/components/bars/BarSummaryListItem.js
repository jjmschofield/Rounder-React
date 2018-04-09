import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { Bar } from '../../store/bars/models/Bar';

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

BarSummaryListItem.propTypes = {
  bar: PropTypes.objectOf(Bar).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BarSummaryListItem;
