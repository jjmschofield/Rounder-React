import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';


import { RoundProductListItem } from './RoundProductListItem';
import { ProductSelectModal } from './ProductSelectModal';

export class RoundProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addProductModalOpen: false,
    };

    this.toggleProductSelectModal = this.toggleProductSelectModal.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.incrementProduct = this.incrementProduct.bind(this);
    this.decrementProduct = this.decrementProduct.bind(this);
  }

  toggleProductSelectModal() {
    this.setState({
      addProductModalOpen: !this.state.addProductModalOpen,
    });
  }

  addProduct(product) {
    this.toggleProductSelectModal();
    this.props.addProductHandler(product);
  }

  incrementProduct(product) {
    this.props.productIncrementHandler(product);
  }

  decrementProduct(product) {
    this.props.productDecrementHandler(product);
  }

  productListItems() {
    const productListItems = this.props.products.map((product) => {
      return (
        <RoundProductListItem
          product={product}
          onIncrement={this.incrementProduct}
          onDecrement={this.decrementProduct}
          key={product.id}
        />
      );
    });
    return productListItems;
  }

  render() {
    return (
      <div>
        <List divided relaxed size="medium">
          {this.productListItems()}
          <List.Item>
            <Button onClick={this.toggleProductSelectModal}>Add Product</Button>
          </List.Item>
        </List>
        <ProductSelectModal
          open={this.state.addProductModalOpen}
          onClose={this.toggleProductSelectModal}
          onSelect={this.addProduct}
          products={this.props.bar.products
          }/>
      </div>

    );
  }
}

export default RoundProductList;
