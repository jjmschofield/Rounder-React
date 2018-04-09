import { connect } from 'react-redux';
import { RoundAdd } from './RoundAdd';
import { fetchBarById } from '../../store/bars/actions/fetchBars';
import { putRound } from '../../store/rounds/actions/putRound';

const mapStateToProps = (state) => {
  return {
    bars: state.bars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarById: (barId) => {
      return dispatch(fetchBarById(barId));
    },
    putRound: (round) => {
      return dispatch(putRound(round));
    },
  };
};

const RoundAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundAdd);

export default RoundAddContainer;
