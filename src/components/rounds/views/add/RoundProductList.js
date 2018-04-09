import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import { RoundProductListItem } from './RoundProductListItem';
import { RoundProductListControls } from './RoundProductListControls';
import { ProductSelectModal } from './ProductSelectModal';
import { Product } from '../../../../store/products/models/Product';

export class RoundProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addProductModalOpen: false,
    };

    this.toggleProductSelectModal = this.toggleProductSelectModal.bind(this);
    this.addProductFromModal = this.addProductFromModal.bind(this);
    this.incrementProduct = this.incrementProduct.bind(this);
    this.decrementProduct = this.decrementProduct.bind(this);
  }

  toggleProductSelectModal() {
    this.setState({
      addProductModalOpen: !this.state.addProductModalOpen,
    });
  }

  addProductFromModal(product) {
    this.toggleProductSelectModal();
    const updatedProducts = addProduct(product, this.props.products);
    this.props.productsUpdateHandler(updatedProducts);
  }

  incrementProduct(product) {
    const updatedProducts = addProduct(product, this.props.products);
    this.props.productsUpdateHandler(updatedProducts);
  }

  decrementProduct(product) {
    const updatedProducts = removeProduct(product, this.props.products);
    this.props.productsUpdateHandler(updatedProducts);
  }

  renderListItems() {
    const products = getNamedProducts(this.props.products, this.props.bar.products);
    if (products.length > 0) {
      return products.map((product) => {
        return (
          <RoundProductListItem
            product={product}
            onIncrement={this.incrementProduct}
            onDecrement={this.decrementProduct}
            key={product.id}
            edit={this.props.edit}
          />
        );
      });
    }
    return [];
  }

  renderTotal() {
    const totalPrice = this.props.products.reduce((total, product) => {
        return total + (product.price * product.qty);
      }, 0
    );

    return (
      <List.Item align="center">
        <List.Content>
          <List.Header>Total</List.Header>
          £{totalPrice}
        </List.Content>
      </List.Item>
    );
  }

  render() {
    if (this.props.products) {
      return (
        <div>
          <List divided relaxed selection size="large">
            {this.renderListItems()}
            {this.renderTotal()}
            <RoundProductListControls
              done={this.props.doneHandler}
              add={this.toggleProductSelectModal}
              enabled={this.props.edit}
              canSubmit={this.props.products.length > 0}
            />
          </List>
          <ProductSelectModal
            open={this.state.addProductModalOpen}
            onClose={this.toggleProductSelectModal}
            onSelect={this.addProductFromModal}
            products={this.props.bar.products}
          />
        </div>
      );
    }
    return [];
  }
}

function getNamedProducts(products, barProducts) {
  return products.map((product) => {
    const barProduct = barProducts.find((productToTest) => {
      return productToTest.id === product.id;
    });
    return Object.assign({}, product, { name: barProduct.name });
  });
}

function addProduct(product, products) {
  const updatedProducts = Array.from(products);
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

  return updatedProducts;
}

function removeProduct(product, products) {
  let updatedProducts = Array.from(products);
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
  }
  return updatedProducts;
}

export default RoundProductList;
