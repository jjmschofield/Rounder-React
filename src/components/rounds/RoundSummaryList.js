import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Card } from 'semantic-ui-react';

import { RoundsState } from '../../store/rounds/models/RoundsState';
import { BarsState } from '../../store/bars/models/BarsState';
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
        <Card.Group size="huge" itemsPerRow="3" stackable>
          {roundListItems}
        </Card.Group>
      );
    }
    return (
      <Dimmer active>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }
}

RoundSummaryList.defaultProps = {
  selectHandler: () => {},
};

RoundSummaryList.propTypes = {
  rounds: PropTypes.objectOf(RoundsState).isRequired,
  bars: PropTypes.objectOf(BarsState).isRequired,
  fetchRoundsFromApi: PropTypes.func.isRequired,
  selectHandler: PropTypes.func,
};

export default RoundSummaryList;
