import React, { Component } from 'react';

import { List, Image, Card } from 'semantic-ui-react';
import { toStandardDateFormat } from '../../utils/dateUtils';

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
        <Card onClick={this.onClick}>
          <Image src={this.props.bar.imageUrl}/>
          <Card.Content>
            <Card.Header>
              {this.props.bar.name}
            </Card.Header>
            @ {toStandardDateFormat(this.props.round.timestamp)}
          </Card.Content>
        </Card>
      );
    }
    return [];
  }
};

export default RoundSummaryListItem;
