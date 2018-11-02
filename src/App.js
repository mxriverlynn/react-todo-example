import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import AddTodo from './addTodo';
import TodoList from './todoList';
import Filter from './filter';

import './App.css';

const store = createStore(rootReducer);

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
