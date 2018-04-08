import { connect } from 'react-redux';
import { RoundSummaryList } from './RoundSummaryList';
import { fetchRoundsForUser } from '../../../../store/rounds/actions/fetchRoundsForUserId';

const mapStateToProps = (state) => {
  return {
    rounds: state.rounds.roundsById,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(arguments);
  console.log(dispatch);
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
