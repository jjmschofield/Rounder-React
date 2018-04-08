import { connect } from 'react-redux';
import { RoundEdit } from './RoundEdit';
import { fetchBarById } from '../../../store/bars/actions/fetchBars';
import { fetchRoundsForUser } from '../../../store/rounds/actions/fetchRounds';

const mapStateToProps = (state) => {
  return {
    bars: state.bars,
    rounds: state.rounds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarById: (barId) => {
      dispatch(fetchBarById(barId));
    },
    fetchRoundsForUser: (userId) => {
      dispatch(fetchRoundsForUser(userId));
    },
  };
};

const RoundEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundEdit);

export default RoundEditContainer;
