import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { getBarsNearLocation } from '../../../../api/barsApi';

import { Bar } from '../../../../store/bars/models/Bar';

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
    const barData = [
      new Bar({ id: 0, name: 'Some Bar' }),
      new Bar({ id: 1, name: 'Some Other Bar' }),
      new Bar({ id: 1, name: 'Some Other Other Bar' }),
    ];

    const barListItems = barData.map((bar) => {
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
      <List celled>
        {this.barListItems()}
      </List>
    );
  }
}

export default BarSummaryList;
