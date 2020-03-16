import ListBox from 'components/ListBox';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.incompletedData,
  mode: 'incompleted',
});

const IncompleteContainer = connect(
  mapStateToProps,
  null,
)(ListBox);

export default IncompleteContainer;