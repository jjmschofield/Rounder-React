import { connect } from 'react-redux';
import { RoundAdd } from './RoundAdd';
import { fetchBarById } from '../../../store/bars/actions/fetchBars';

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
  };
};

const RoundAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundAdd);

export default RoundAddContainer;
