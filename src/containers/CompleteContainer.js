import ListBox from 'components/ListBox';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.completedData,
  mode: 'completed',
});

const CompleteContainer = connect(
  mapStateToProps,
  null,
)(ListBox);

export default CompleteContainer;