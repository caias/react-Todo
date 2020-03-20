import ListBox from 'components/ListBox';
import { connect } from 'react-redux';
import { incompletedTodo } from 'actions';

const mapStateToProps = (state) => ({
  data: state.completedData,
  mode: 'completed',
});

const mapDispatchToProps = (dispatch) => ({
  incompletedTodo: (moveData, keepData) => dispatch(incompletedTodo(moveData, keepData)),
})

const CompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListBox);

export default CompleteContainer;