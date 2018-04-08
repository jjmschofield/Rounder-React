import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import { RoundSummaryListItem } from './RoundSummaryListItem';

export class RoundSummaryList extends Component {
  constructor(props) {
    super(props);
    this.listItemOnClick = this.listItemOnClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.rounds.fetched) {
      this.props.fetchRoundsFromApi(0);
    }
  }

  getRoundsFromStore() {
    const rounds = Object.keys(this.props.rounds.roundsById).map((roundId) => {
      return this.props.rounds.roundsById[ roundId ];
    });

    rounds.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });

    return rounds;
  }

  listItemOnClick(round) {
    this.props.selectHandler(round);
  }

  createRoundListItems(rounds) {
    return rounds.map((round) => {
      return (
        <RoundSummaryListItem
          round={round}
          key={round.id}
          onClick={this.listItemOnClick}
        />
      );
    });
  }

  render() {
    const rounds = this.getRoundsFromStore();
    const roundListItems = this.createRoundListItems(rounds);

    return (
      <List celled>
        {roundListItems}
      </List>
    );
  }
}

export default RoundSummaryList;
