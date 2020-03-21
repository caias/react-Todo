import TodoListGroup from 'components/TodoListGroup';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.incompletedData,
});

const IncompleteContainer = connect(
  mapStateToProps,
  null,
)(TodoListGroup);

export default IncompleteContainer;