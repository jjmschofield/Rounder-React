import React, { Component } from 'react';
import { Container, Button, Header, Segment, Dimmer, Loader, Image } from 'semantic-ui-react';
import { ROUNDS_ROUTES } from '../routers/ROUNDS_ROUTES';
import { BarSummaryList } from './create/BarSummaryList';

export class RoundCreate extends Component {
  constructor(props) {
    super(props);
    this.selectBarOnClick = this.selectBarOnClick.bind(this);
    this.goBackOnClick = this.goBackOnClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBarsNearby();
  }

  goBackOnClick() {
    this.props.history.goBack();
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

  selectBarOnClick(bar) {
    this.props.history.push(`${ROUNDS_ROUTES.CREATE}/bar/${bar.id}`);
  }

  render() {
    const bars = this.getBars();
    const closestBar = bars[ 0 ];
    const otherBars = bars.slice(1);

    if (bars.length > 0) {

      return (
        <div className="round-create-view">
          <Segment textAlign="center" vertical>
            <Image src={closestBar.imageUrl} />
            <Header size="huge" content={`In ${closestBar.name}?`}/>
            <Button onClick={() => this.selectBarOnClick(closestBar)}>Yep!</Button>
          </Segment>
          <Container>
            <Header size="tiny">Other Bars Near You</Header>
            <BarSummaryList bars={otherBars} selectHandler={this.selectBarOnClick}/>
          </Container>
          <Container>
            <Button onClick={this.goBackOnClick}>Argh! Get Me Out Of Here!</Button>
          </Container>
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

export default RoundCreate;
