import React, { Component } from 'react';
import { List, Modal, Button, Icon } from 'semantic-ui-react';

export class ProductSelectModal extends Component {
  getListItems() {
    return this.props.products.map((product) => {
      return (
        <List.Item onClick={() => this.props.onSelect(product)}>
          <Icon name="plus" />
          <List.Content>
            <List.Header>{product.name}</List.Header>
            £{product.price}
          </List.Content>
        </List.Item>
      );
    });
  }

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
            {this.getListItems()}
          </List>
          <Button positive onClick={this.props.onClose}>Done</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ProductSelectModal;
