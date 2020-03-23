import TodoListGroup from 'components/TodoListGroup';
import { connect } from 'react-redux';
import { incompleteToggleTodo, incompleteToggleAll, completedTodo } from 'actions';

const mapStateToProps = (state) => ({
  data: state.incompletedData,
  type: 'incomplete',
});

const mapDispatchToProps = (dispatch) => ({
  incompleteToggleTodo: (index) => dispatch(incompleteToggleTodo(index)),
  incompleteToggleAll: (status) => dispatch(incompleteToggleAll(status)),
  completedTodo: (moveData, keepData) => dispatch(completedTodo(moveData, keepData)),
});

const IncompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListGroup);

export default IncompleteContainer;