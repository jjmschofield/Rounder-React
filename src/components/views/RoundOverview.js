import React, { Component } from 'react';
import { Container, Button, Header, Segment, Icon, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import RoundSummaryList from '../rounds/RoundSummaryListContainer';
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
          <Divider hidden />
          <Header size="huge" content="Short term memory issues?" inverted />
          <Header size="medium" content="Don't worry, we got you." inverted />
          <Divider hidden />
          <Button onClick={this.createRoundOnClick} primary size="huge">
            Get a Round In
            <Icon name="arrow right" />
          </Button>
          <Divider hidden />
          <Divider hidden />
        </Segment>
        <Container>
          <Divider hidden />
          <Header align="center">
            <h2>Past Exploits</h2>
          </Header>
          <Divider hidden />
          <RoundSummaryList selectHandler={this.roundSelectHandler} />
          <Divider hidden />
        </Container>
      </div>
    );
  }
}

RoundOverview.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default RoundOverview;
