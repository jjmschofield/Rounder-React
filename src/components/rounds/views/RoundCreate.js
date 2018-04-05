import React, { Component } from 'react';
import { Container, Button, Header, Segment } from 'semantic-ui-react';
import { ROUNDS_ROUTES } from '../routers/ROUNDS_ROUTES';
import { BarSummaryList } from './create/BarSummaryList';

export class RoundCreate extends Component {
  constructor(props) {
    super(props);
    this.selectBarOnClick = this.selectBarOnClick.bind(this);
  }

  selectBarOnClick() {
    this.props.history.push(`${ROUNDS_ROUTES.EDIT}`);
  }

  render() {
    return (
      <div className="round-create-view">
        <Segment textAlign="center" vertical>
          <Header size="huge" content="In <Bar Name>?" />
          <Button onClick={this.selectBarOnClick}>To The Menu!</Button>
        </Segment>
        <Container>
          <Header size="tiny">Other Bars Near You</Header>
          <BarSummaryList selectHandler={this.selectBarOnClick} />
        </Container>
      </div>
    );
  }
}

export default RoundCreate;
