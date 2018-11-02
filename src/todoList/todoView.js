import React from 'react';

export default class TodoView extends React.Component {
  
  render() {
    const { todo, toggle } = this.props;

    return (
      <li className={todo.completed ? "item-done" : "item"}>
        {todo.text}: 
        <button onClick={() => { return toggle(todo.id); }}>Done!</button>
      </li>
    );
  }

}
