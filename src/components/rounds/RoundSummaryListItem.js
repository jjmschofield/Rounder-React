import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Card } from 'semantic-ui-react';

import { toStandardDateFormat } from '../../utils/dateUtils';
import { Round } from '../../store/rounds/models/Round';
import { Bar } from '../../store/bars/models/Bar';

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
          <Image src={this.props.bar.imageUrl} />
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
}

RoundSummaryListItem.defaultProps = {
  onClick: () => {},
};

RoundSummaryListItem.propTypes = {
  round: PropTypes.objectOf(Round).isRequired,
  bar: PropTypes.objectOf(Bar).isRequired,
  onClick: PropTypes.func,
};

export default RoundSummaryListItem;
