import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RoundView extends Component {
  render() {
    return (
      <div>
        <h1>Round View - {this.props.match.params.roundId}</h1>
      </div>
    );
  }
}

RoundView.defaultProps = {
  match: {
    params: {},
  },
};

RoundView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      roundId: PropTypes.string.isRequired,
    }),
  }),
};

export default RoundView;
