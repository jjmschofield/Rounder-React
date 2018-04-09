import React, { Component } from 'react';
import { List, Dimmer, Loader } from 'semantic-ui-react';

import { RoundSummaryListItem } from './RoundSummaryListItem';

export class RoundSummaryList extends Component {
  constructor(props) {
    super(props);
    this.listItemOnClick = this.listItemOnClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoundsFromApi(0);
  }

  getRoundsFromStore() {
    const rounds = Object.keys(this.props.rounds.roundsById).map((roundId) => {
      return this.props.rounds.roundsById[ roundId ];
    });

    rounds.sort((a, b) => {
      return b.timestamp - a.timestamp;
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
          bar={this.props.bars.barsById[ round.barId ]}
          key={round.id}
          onClick={this.listItemOnClick}
        />
      );
    });
  }

  render() {
    const rounds = this.getRoundsFromStore();
    const roundListItems = this.createRoundListItems(rounds);

    if (!this.props.rounds.fetchInProgress && !this.props.bars.fetchInProgress) {
      return (
        <List divided relaxed size="huge" selection>
          {roundListItems}
        </List>
      );
    }
    return (
      <Dimmer active>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }
}

export default RoundSummaryList;
