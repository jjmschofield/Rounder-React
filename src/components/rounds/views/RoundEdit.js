import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RoundEdit extends Component {
  render() {
    return (
      <div>
        <h1>Round Edit - {this.props.match.params.roundId}</h1>
      </div>
    );
  }
}

RoundEdit.defaultProps = {
  match: {
    params: {},
  },
};

RoundEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      roundId: PropTypes.string.isRequired,
    }),
  }),
};

export default RoundEdit;
