import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import AddTodo from './addTodo';
import TodoList from './todoList';
import Filter from './filter';

import './App.css';

const state = localStorage.getItem("todos") || "{}";
const store = createStore(rootReducer, JSON.parse(state));

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state));
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <section className="App-header">
            <Filter />
            <AddTodo />
            <TodoList />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
