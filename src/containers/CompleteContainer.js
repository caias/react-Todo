import TodoListGroup from 'components/TodoListGroup';
import { connect } from 'react-redux';
import { completeToggleTodo, completeToggleAll, incompletedTodo } from 'actions';

const mapStateToProps = (state) => ({
  data: state.completedData,
  type: 'complete',
});

const mapDispatchToProps = (dispatch) => ({
  completeToggleTodo: (index) => dispatch(completeToggleTodo(index)),
  completeToggleAll: (status) => dispatch(completeToggleAll(status)),
  incompletedTodo: (moveData, keepData) => dispatch(incompletedTodo(moveData, keepData))
});

const CompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListGroup);

export default CompleteContainer;