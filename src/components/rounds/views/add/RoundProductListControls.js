import React, { Component } from 'react';
import { List, Button, Icon } from 'semantic-ui-react';

export class RoundProductListControls extends Component {

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

export default RoundProductListControls;
