import React from 'react';
import TodoView from './todoView';

export default ({todos, toggleTodo}) => (
  <div>
    <hr />
    <h3>TODO LIST!!!!!!!!!!!!!!</h3>
    <ul className="todo-list">
      {todos.map(todo =>
        <TodoView key={todo.id} todo={todo} toggle={toggleTodo} />
      )}
    </ul>
  </div>
);
