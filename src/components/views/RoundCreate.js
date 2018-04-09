import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Header, Segment, Dimmer, Loader, Image, Icon, Divider } from 'semantic-ui-react';

import { ROUNDS_ROUTES } from '../routers/ROUNDS_ROUTES';
import { BarSummaryList } from '../bars/BarSummaryList';
import { BarsState } from '../../store/bars/models/BarsState';

export class RoundCreate extends Component {
  constructor(props) {
    super(props);
    this.selectBarOnClick = this.selectBarOnClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchBarsNearby();
  }

  getBars() {
    const bars = Object.keys(this.props.bars.barsById).map((barId) => {
      return this.props.bars.barsById[ barId ];
    });

    bars.sort((a, b) => {
      return a.distance - b.distance;
    });

    return bars;
  }

  goBack() {
    this.props.history.goBack();
  }

  selectBarOnClick(bar) {
    this.props.history.push(`${ROUNDS_ROUTES.CREATE}/bar/${bar.id}`);
  }

  render() {
    const bars = this.getBars();
    const closestBar = bars[ 0 ];
    const otherBars = bars.slice(1);

    if (bars.length > 0) {
      return (
        <div className="round-create-view main-view">
          <Segment inverted textAlign="center" vertical>
            <Header size="huge" inverted>
              <Header.Content>
                <Divider hidden/>
                <h1>Looks like you are in {closestBar.name}?</h1>
                <Divider hidden/>
                <Image centered size="large" src={closestBar.imageUrl}/>
                <Divider hidden/>
                <Button onClick={() => this.selectBarOnClick(closestBar)} primary size="huge">
                  Yep
                  <Icon name="arrow right"/>
                </Button>
                <Divider hidden/>
                <Divider hidden/>
              </Header.Content>
            </Header>
          </Segment>
          <Divider hidden/>
          <Container>
            <Header align="center"><h2>Other Bars Near You</h2></Header>
            <Divider hidden />
            <BarSummaryList bars={otherBars} selectHandler={this.selectBarOnClick}/>
          </Container>
          <Divider hidden/>
          <Container align="center">
            <Button.Group fluid size="large">
              <Button onClick={this.goBack} basic>Argh! Get Me Out Of Here!</Button>
            </Button.Group>
          </Container>
          <Divider hidden/>
        </div>
      );
    }

    return (
      <Dimmer active>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }
}

RoundCreate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  bars: PropTypes.objectOf(BarsState).isRequired,
  fetchBarsNearby: PropTypes.func.isRequired,
};

export default RoundCreate;
