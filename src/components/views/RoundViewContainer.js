import { connect } from 'react-redux';
import { RoundView } from './RoundView';
import { fetchBarById } from '../../store/bars/actions/fetchBars';
import { fetchRoundById } from '../../store/rounds/actions/fetchRounds';

const mapStateToProps = (state) => {
  return {
    bars: state.bars,
    rounds: state.rounds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarById: (barId) => {
      return dispatch(fetchBarById(barId));
    },
    fetchRoundById: (roundId) => {
      return dispatch(fetchRoundById(roundId));
    },
  };
};

const RoundViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundView);

export default RoundViewContainer;
