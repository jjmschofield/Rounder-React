import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import { RoundSummaryListItem } from './RoundSummaryListItem';

export class RoundSummaryList extends Component {
  constructor(props) {
    super(props);
    this.listItemOnClick = this.listItemOnClick.bind(this);
  }

  listItemOnClick(round) {
    this.props.selectHandler(round);
  }

  roundListItems() {
    const roundData = [
      {
        id: 0,
        timestamp: 1522962029247,
        barName: 'Some Bar',
      },
      {
        id: 1,
        timestamp: 1522962029247,
        barName: 'Some Bar',
      },
      {
        id: 2,
        timestamp: 1522962029247,
        barName: 'Some Bar',
      },
    ];

    const roundListItems = roundData.map((round) => {
      return (
        <RoundSummaryListItem
          round={round}
          key={round.id}
          onClick={this.listItemOnClick}
        />
      );
    });

    return roundListItems;
  }

  render() {
    return (
      <List celled>
        {this.roundListItems()}
      </List>
    );
  }
}

export default RoundSummaryList;
