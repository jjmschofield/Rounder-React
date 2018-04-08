import React, { Component } from 'react';
import { Container, Button, Header, Segment } from 'semantic-ui-react';

export class RoundEdit extends Component {
  constructor(props) {
    super(props);
    const round = {
      id: 0,
      barName: 'Some Bar',
      timestamp: 1522962029247,
    };

    this.state = {
      round,
    };
  }

  render() {
    return (
      <div className="round-overview-view">
        <Segment inverted textAlign="center" vertical>
          <Header size="huge" content={this.state.round.barName} inverted />
          <Header size="large" content={this.state.round.timestamp} inverted />
        </Segment>
        <Container>
        </Container>
      </div>
    );
  }
}

export default RoundEdit;
