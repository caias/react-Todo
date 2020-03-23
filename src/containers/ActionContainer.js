import TodoContent from 'components/TodoContent';
import { connect } from 'react-redux';
import { sortTodo, addTodo} from 'actions';

const mapDispatchToProps = (dispatch) => ({
  sortTodo: (sortType) => dispatch(sortTodo(sortType)),
  addTodo: (title, date) => dispatch(addTodo(title, date)),
})

const ActionContainer = connect(
  null,
  mapDispatchToProps,
)(TodoContent);

export default ActionContainer;