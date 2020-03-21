import AddTodoForm from 'components/AddTodoForm';
import { connect } from 'react-redux';
import { addTodo } from 'actions';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title, date) => dispatch(addTodo(title, date)),
})

const FormContainer = connect(
  null,
  mapDispatchToProps,
)(AddTodoForm);

export default FormContainer;