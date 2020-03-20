import ListBox from 'components/ListBox';
import { connect } from 'react-redux';
import { completedTodo, sortTodo } from 'actions';

const mapStateToProps = (state) => ({
  data: state.incompletedData,
  mode: 'incompleted',
});

const mapDispatchToProps = (dispatch) => ({
  completedTodo: (moveData, keepData) => dispatch(completedTodo(moveData, keepData)),
  sortTodo: (sortData) => dispatch(sortTodo(sortData)),
})

const IncompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListBox);

export default IncompleteContainer;