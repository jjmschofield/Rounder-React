import React, { Component } from 'react';
import { Container, Button, Header, Segment, Divider, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { ROUNDS_ROUTES } from '../routers/ROUNDS_ROUTES';
import { ProductList } from '../products/ProductList';
import { toStandardDateFormat } from '../../utils/dateUtils';
import { RoundsState } from '../../store/rounds/models/RoundsState';
import { BarsState } from '../../store/bars/models/BarsState';

export class RoundView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roundId: parseInt(this.props.match.params.roundId, 10),
    };

    this.gotoOverview = this.gotoOverview.bind(this);
  }

  getRoundFromStore(roundId) {
    const round = this.props.rounds.roundsById[roundId];

    if (round) {
      return round;
    }

    if (!this.props.rounds.fetchInProgress) {
      this.props.fetchRoundById(roundId)
        .catch(() => {
          this.gotoOverview();
        });
    }

    return null;
  }

  getBarFromStore(barId) {
    const bar = this.props.bars.barsById[barId];
    return bar || null;
  }

  gotoOverview() {
    this.props.history.push(ROUNDS_ROUTES.ROOT);
  }

  render() {
    const round = this.getRoundFromStore(this.state.roundId);
    if (round) {
      const bar = this.getBarFromStore(round.barId);
      if (bar) {
        return (
          <div className="round-view-view main-view">
            <Segment inverted textAlign="center" vertical>
              <Divider hidden />
              <Header inverted size="huge" content={`Your round @ ${bar.name}`} />
              <Header inverted size="small" content={toStandardDateFormat(round.timestamp)} />
              <Divider hidden />
              <Divider hidden />
            </Segment>
            <Divider hidden />
            <Container>
              <Header>
                <h1>Your Order</h1>
              </Header>
              <ProductList
                products={round.products}
                bar={bar}
              />
            </Container>
            <Divider hidden />
            <Container align="center">
              <Button.Group size="large">
                <Button onClick={this.gotoOverview} basic color="blue">
                  <Icon name="arrow left" />
                  Back to the Round Overview
                </Button>
              </Button.Group>
            </Container>
            <Divider hidden />
          </div>
        );
      }
    }
    return [];
  }
}

RoundView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      roundId: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  bars: PropTypes.objectOf(BarsState).isRequired,
  rounds: PropTypes.objectOf(RoundsState).isRequired,
  fetchRoundById: PropTypes.func.isRequired,
};

export default RoundView;
