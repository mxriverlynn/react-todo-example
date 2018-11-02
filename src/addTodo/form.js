import React from 'react';

export default class AddTodoForm extends React.Component {

  render() {
    const { doIt, inputNode } = this.props;
    return (
      <form onSubmit={doIt}>
        <hr />
        <h2>ADD TO DO ITEM</h2>
        <input type="text" ref={inputNode} />
        <button type="submit">I'm a button!</button>
      </form>
    );
  }
}
