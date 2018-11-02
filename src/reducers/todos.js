const defaultState = {
  lastId: 0,
  items: []
}

function toggleTodo(state, action){
  const items = state.items.map((original) => {  
    let todo;
    if (original.id === action.id) {
      todo = {...original};
      todo.completed = !todo.completed;
    } else {
      todo = original;
    }
    return todo;
  });

  return {
    lastId: state.lastId,
    items
  };
}

function addTodo(state, action){
  const todo = {
    id: state.lastId + 1,
    text: action.text,
    completed: false
  };

  return {
    lastId: todo.id,
    items: [ ...state.items, todo ],
  };
}

const todoList = (state = defaultState, action) => {
  let fn;

  switch (action.type) {
    case "ADD_TODO": 
      fn = addTodo;
      break;
    case "TOGGLE_TODO": 
      fn = toggleTodo;
      break;
    default:
      fn = state => state;
      break;
  }

  return fn(state, action);
}

export default todoList;
