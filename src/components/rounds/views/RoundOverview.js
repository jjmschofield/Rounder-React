import React, { Component } from 'react';
import { Container, Button, Header, Segment } from 'semantic-ui-react';

import RoundSummaryList from './overview/RoundSummaryListContainer';
import { ROUNDS_ROUTES } from '../routers/ROUNDS_ROUTES';

export class RoundOverview extends Component {
  constructor(props) {
    super(props);
    this.createRoundOnClick = this.createRoundOnClick.bind(this);
    this.roundSelectHandler = this.roundSelectHandler.bind(this);
  }

  createRoundOnClick() {
    this.props.history.push(ROUNDS_ROUTES.CREATE);
  }

  roundSelectHandler(round) {
    this.props.history.push(`${ROUNDS_ROUTES.VIEW}/${round.id}`);
  }

  render() {
    return (
      <div className="round-overview-view">
        <Segment inverted textAlign="center" vertical>
          <Header size="huge" content="Short term memory issues?" inverted />
          <Header size="large" content="Don't worry, we got you." inverted />
          <Button onClick={this.createRoundOnClick}>Get a Round In!</Button>
        </Segment>
        <Container>
          <Header size="tiny">Past Rounds</Header>
          <RoundSummaryList selectHandler={this.roundSelectHandler} />
        </Container>
      </div>
    );
  }
}

export default RoundOverview;
