import TodoContent from 'components/TodoContent';
import { connect } from 'react-redux';
import { sortTodo, addTodo, completedTodo, incompletedTodo } from 'actions';

const mapDispatchToProps = (dispatch) => ({
  sortTodo: (sortType) => dispatch(sortTodo(sortType)),
  addTodo: (title, date) => dispatch(addTodo(title, date)),
  completedTodo: (moveData, keepData) => dispatch(completedTodo(moveData, keepData)),
  incompletedTodo: (moveData, keepData) => dispatch(incompletedTodo(moveData, keepData)),
})

const ActionContainer = connect(
  null,
  mapDispatchToProps,
)(TodoContent);

export default ActionContainer;