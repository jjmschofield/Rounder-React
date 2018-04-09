import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { getBarsNearLocation } from '../../api/barsApi';
import { BarSummaryListItem } from './BarSummaryListItem';
import { Bar } from '../../store/bars/models/Bar';

export class BarSummaryList extends Component {
  constructor(props) {
    super(props);
    getBarsNearLocation({ lat: 0, long: 0 });
    this.listItemOnClick = this.listItemOnClick.bind(this);
  }

  listItemOnClick(round) {
    this.props.selectHandler(round);
  }

  barListItems(bars) {
    return bars.map((bar) => {
      return (
        <BarSummaryListItem
          bar={bar}
          key={bar.id}
          onClick={this.listItemOnClick}
        />
      );
    });
  }

  render() {
    return (
      <Card.Group size="huge" itemsPerRow="3" stackable>
        {this.barListItems(this.props.bars)}
      </Card.Group>
    );
  }
}

BarSummaryList.propTypes = {
  bars: PropTypes.arrayOf(Bar).isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default BarSummaryList;
