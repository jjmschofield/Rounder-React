import { connect } from 'react-redux';
import { RoundCreate } from './RoundCreate';
import { fetchBarsNearby } from '../../../store/bars/actions/fetchBars';

const mapStateToProps = (state) => {
  return {
    bars: state.bars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarsNearby: () => {
      dispatch(fetchBarsNearby());
    },
  };
};

const RoundCreateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundCreate);

export default RoundCreateContainer;
