import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { getBarsNearLocation } from '../../../../api/barsApi';

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
      <List divided relaxed size="huge" selection>
        {this.barListItems()}
      </List>
    );
  }
}

export default BarSummaryList;
