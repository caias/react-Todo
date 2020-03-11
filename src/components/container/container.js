import Container from 'components/Container';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  incompletedData: state.incompletedData,
  completedData: state.completedData,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: () => dispatch(actions.addTodo(title, date)),
});

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default TodoContainer;