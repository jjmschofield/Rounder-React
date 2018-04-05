import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import { BarSummaryListItem } from './BarSummaryListItem';

export class BarSummaryList extends Component {
  constructor(props) {
    super(props);
    this.listItemOnClick = this.listItemOnClick.bind(this);
  }

  listItemOnClick(round) {
    this.props.selectHandler(round);
  }

  barListItems() {
    const barData = [
      {
        id: 0,
        distance: 0,
        name: 'Some Bar',
        address: 'Some Address',
      },
      {
        id: 1,
        distance: 0.2,
        name: 'Some Bar 2',
        address: 'Some Address',
      },
      {
        id: 2,
        distance: 0.3,
        name: 'Some Bar 3',
        address: 'Some Address',
      },
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
