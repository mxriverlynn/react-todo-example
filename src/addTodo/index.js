import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import AddForm from './form';

const AddTodo = ({dispatch}) => {
  let input;

  function doIt(e){
    e.preventDefault();
    dispatch(addTodo(input.value));
    input.value = "";
  }

  function inputNode(node){
    input = node;
  }

  return (
    <AddForm inputNode={inputNode} doIt={doIt} />
  );
}

export default connect()(AddTodo);
