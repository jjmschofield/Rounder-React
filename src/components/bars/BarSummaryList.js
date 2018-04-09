import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { getBarsNearLocation } from '../../api/barsApi';

import { BarSummaryListItem } from './BarSummaryListItem';

export class BarSummaryList extends Component {
  constructor(props) {
    super(props);
    getBarsNearLocation({ lat: 0, long: 0 });
    this.listItemOnClick = this.listItemOnClick.bind(this);
  }

  listItemOnClick(round) {
    this.props.selectHandler(round);
  }

  barListItems() {
    const barListItems = this.props.bars.map((bar) => {
      return (
        <BarSummaryListItem
          bar={bar}
          key={bar.id}
          onClick={this.listItemOnClick}
        />
      );
    });

    return barListItems;
  }

  render() {
    return (
      <Card.Group size="huge" itemsPerRow="3" stackable>
        {this.barListItems()}
      </Card.Group>
    );
  }
}

export default BarSummaryList;
