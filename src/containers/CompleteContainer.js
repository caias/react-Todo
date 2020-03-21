import TodoListGroup from 'components/TodoListGroup';
import { connect } from 'react-redux';
import { incompletedTodo } from 'actions';

const mapStateToProps = (state) => ({
  data: state.completedData,
});

const mapDispatchToProps = (dispatch) => ({
  incompletedTodo: (moveData, keepData) => dispatch(incompletedTodo(moveData, keepData)),
})

const CompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListGroup);

export default CompleteContainer;