import React, { Component } from 'react';
import { Container, Button, Header, Segment } from 'semantic-ui-react';
import { getTime } from 'date-fns';

import { Product } from '../../../store/products/models/Product';
import { Round } from '../../../store/rounds/models/Round';
import { RoundProductList } from './add/RoundProductList';

export class RoundAdd extends Component {
  constructor(props) {
    super(props);

    const barId = parseInt(this.props.match.params.barId, 10);
    const bar = this.props.bars.barsById[ barId ];

    this.state = {
      barId,
      bar,
      round: new Round({
        barId,
        timestamp: getTime(Date.now()),
      }),
    };

    if (!this.state.bar) {
      this.props.fetchBarById(barId)
        .then(() => {
          this.setState({
            bar: this.props.bars.barsById[ barId ],
          });
        });
    }

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct(product) {
    const updatedProducts = Array.from(this.state.round.products);
    const existingProduct = updatedProducts.find((roundProduct) => {
      return roundProduct.id === product.id;
    });

    if (existingProduct) {
      existingProduct.qty += 1;
    }
    else {
      updatedProducts.push(new Product({
        id: product.id,
        qty: 1,
        price: product.price,
      }));
    }

    this.setState({
      round: {
        ...this.state.round,
        products: updatedProducts,
      },
    });
  }

  removeProduct(product) {
    let updatedProducts = Array.from(this.state.round.products);
    const existingProduct = updatedProducts.find((roundProduct) => {
      return roundProduct.id === product.id;
    });

    if (existingProduct) {
      existingProduct.qty -= 1;
      if (existingProduct.qty < 1) {
        updatedProducts = updatedProducts.filter((selectedProduct) => {
          return selectedProduct.id !== existingProduct.id;
        });
      }

      this.setState({
        round: {
          ...this.state.round,
          products: updatedProducts,
        },
      });
    }
  }

  getNamedProducts(products) {
    const namedProducts = Array.from(products);

    return namedProducts.map((product) => {
      const barProduct = this.state.bar.products.find((barProduct) => {
        return barProduct.id === product.id;
      });
      return Object.assign({}, product, { name: barProduct.name });
    });
  }


  render() {
    if (this.state.bar && this.state.round) {
      return (
        <div className="round-add-view">
          <Segment inverted textAlign="center" vertical>
            <Header size="huge" content={this.state.bar.name} inverted/>
            <Header size="large" content={this.state.round.timestamp} inverted/>
          </Segment>
          <Container>
            <RoundProductList
              products={this.getNamedProducts(this.state.round.products)}
              bar={this.state.bar}
              productDecrementHandler={this.removeProduct}
              productIncrementHandler={this.addProduct}
              addProductHandler={this.addProduct}
            />
          </Container>
        </div>
      );
    }

    return [];
  }
}

export default RoundAdd;
