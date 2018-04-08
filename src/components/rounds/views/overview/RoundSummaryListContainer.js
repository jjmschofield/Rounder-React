import { connect } from 'react-redux';
import { RoundSummaryList } from './RoundSummaryList';
import { fetchRoundsForUser } from '../../../../store/rounds/actions/fetchRounds';

const mapStateToProps = (state) => {
  return {
    rounds: state.rounds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoundsFromApi: (userId) => {
      dispatch(fetchRoundsForUser(userId));
    },
  };
};

const RoundSummaryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundSummaryList);

export default RoundSummaryListContainer;
