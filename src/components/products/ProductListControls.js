import React, { Component } from 'react';
import { List, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class ProductListControls extends Component {
  getControls() {
    const controls = [
      <Button onClick={this.props.add}>
        <Icon name="add"/>
        Add Product
      </Button>,
    ];

    if (this.props.canSubmit) {
      controls.push(<Button.Or/>);
      controls.push(
        <Button onClick={this.props.done} primary>
          To The Bar
          <Icon name="arrow right"/>
        </Button>);
    }
    return controls;
  }

  render() {
    if (this.props.enabled) {
      return (
        <List.Item align="center">
          <List.Content>
            <Button.Group fluid size="large">
              {this.getControls()}
            </Button.Group>
          </List.Content>
        </List.Item>
      );
    }
    return [];
  }
}

ProductListControls.defaultProps = {
  add: () => {},
  done: () => {},
  canSubmit: false,
  enabled: false,
};

ProductListControls.propTypes = {
  add: PropTypes.func,
  canSubmit: PropTypes.bool,
  enabled: PropTypes.bool,
  done: PropTypes.func,
};

export default ProductListControls;
