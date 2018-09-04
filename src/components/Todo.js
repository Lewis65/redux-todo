import React from 'react';

const Todo = () => (
  <div className="Todo">
    <div className={"Todo-toggle Todo-" + (this.props.status ? "complete" : "incomplete")}></div>
    <div className="Todo-text">{this.props.text}</div>
  </div>
)

export default Todo;