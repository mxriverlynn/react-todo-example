const todos = (state = [], action) => {
  switch (action.type) {

    case "ADD_TODO": 
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case "TOGGLE_TODO": 
      return state.map((original) => {  
        let todo;
        if (original.id === action.id) {
          todo = {...original};
          todo.completed = !todo.completed;
        } else {
          todo = original;
        }
        return todo;
      });

    default:
      return state;
  }
}

export default todos;
