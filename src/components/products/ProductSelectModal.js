import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Modal, Button, Icon } from 'semantic-ui-react';

import { toStandardCurrencyFormat } from '../../utils/currencyUtils';
import { Product } from '../../store/products/models/Product';

export class ProductSelectModal extends Component {
  render() {
    const inlineStyle = {
      modal: {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    };

    return (
      <Modal open={this.props.open} style={inlineStyle.modal} onClose={this.props.onClose}>
        <Modal.Header>Select a Product</Modal.Header>
        <Modal.Content>
          <List divided relaxed selection size="large">
            {getListItems(this.props.products, this.props.onSelect)}
          </List>
          <Button positive onClick={this.props.onClose}>Done</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

function getListItems(products, onSelect) {
  return products.map((product) => {
    return (
      <List.Item onClick={() => onSelect(product)}>
        <Icon name="plus" />
        <List.Content>
          <List.Header>{product.name}</List.Header>
          {toStandardCurrencyFormat(product.price)}
        </List.Content>
      </List.Item>
    );
  });
}

ProductSelectModal.defaultProps = {
  onClose: () => {},
  onSelect: () => {},
  open: false,
};

ProductSelectModal.propTypes = {
  products: PropTypes.arrayOf(Product).isRequired,
  onSelect: PropTypes.func,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ProductSelectModal;
