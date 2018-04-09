import React, { Component } from 'react';
import { Container, Button, Header, Segment, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { ROUNDS_ROUTES } from '../routers/ROUNDS_ROUTES';
import { BarsState } from '../../store/bars/models/BarsState';
import { Round } from '../../store/rounds/models/Round';
import { ProductList } from '../products/ProductList';
import { getCurrentTimestamp, toStandardDateFormat } from '../../utils/dateUtils';

export class RoundAdd extends Component {
  constructor(props) {
    super(props);

    const barId = parseInt(this.props.match.params.barId, 10);

    this.state = {
      barId,
      round: new Round({
        barId,
        timestamp: getCurrentTimestamp(),
      }),
    };

    this.productsUpdateHandler = this.productsUpdateHandler.bind(this);
    this.submitRound = this.submitRound.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  getBarFromStore(barId) {
    const bar = this.props.bars.barsById[barId];

    if (bar) {
      return bar;
    }
    else if (!this.props.bars.fetchInProgress) {
      this.props.fetchBarById(barId)
        .catch(() => {
          this.props.history.push(ROUNDS_ROUTES.ROOT);
        });
    }

    return null;
  }

  submitRound() {
    this.props.putRound(this.state.round)
      .then((savedRound) => {
        this.props.history.push(`${ROUNDS_ROUTES.VIEW}/${savedRound.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  productsUpdateHandler(updatedProducts) {
    this.setState({
      round: {
        ...this.state.round,
        products: updatedProducts,
      },
    });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const bar = this.getBarFromStore(this.state.barId);

    if (bar && this.state.round) {
      return (
        <div className="round-add-view main-view">
          <Segment inverted textAlign="center" vertical>
            <Divider hidden />
            <Header inverted size="huge" content={`Getting the round in @ ${bar.name}`} />
            <Header inverted size="small" content={toStandardDateFormat(this.state.round.timestamp)} />
            <Divider hidden />
            <Divider hidden />
          </Segment>
          <Divider hidden />
          <Container>
            <Header>
              <h1>Your Order</h1>
            </Header>
            <ProductList
              products={this.state.round.products}
              bar={bar}
              productsUpdateHandler={this.productsUpdateHandler}
              doneHandler={this.submitRound}
              edit
            />
          </Container>
          <Container>
            <Button.Group fluid size="large">
              <Button onClick={this.goBack} basic>Wait! On second thoughts...</Button>
            </Button.Group>
          </Container>
          <Divider hidden />
        </div>
      );
    }
    return [];
  }
}

RoundAdd.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      barId: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  bars: PropTypes.objectOf(BarsState).isRequired,
  fetchBarById: PropTypes.func.isRequired,
  putRound: PropTypes.func.isRequired,
};

export default RoundAdd;
