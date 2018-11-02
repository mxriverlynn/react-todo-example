import { connect } from 'react-redux';
import FilterList from './filterList';
import { showAll, showIncomplete, showComplete } from './actions';

const mapStateToProps = (state) => ({
  current: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  all: () => dispatch(showAll()),
  incomplete: () => dispatch(showIncomplete()),
  complete: () => dispatch(showComplete())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
