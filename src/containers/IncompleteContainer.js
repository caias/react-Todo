import ListBox from 'components/ListBox';
import { connect } from 'react-redux';
import { completeTodo } from 'actions';

const mapStateToProps = (state) => ({
  data: state.incompletedData,
  mode: 'incompleted',
});

const mapDispatchToProps = (dispatch) => ({
  completeTodo: (moveData, keepData) => dispatch(completeTodo(moveData, keepData)),
})

const IncompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListBox);

export default IncompleteContainer;