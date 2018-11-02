import { connect } from 'react-redux';
import { toggleTodo } from './actions';
import TodoListView from './listView.js';

function getFilteredList(todos, filter){
  switch (filter) {
    case "COMPLETE":
      return todos.filter(todo => todo.completed);
    case "INCOMPLETE":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getFilteredList(state.todoList.items, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoListView);
