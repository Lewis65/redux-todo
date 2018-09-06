import React from 'react';

const Todo = (props) => (
  <div className="Todo">
    <div className={"Todo-toggle Todo-" + (props.status ? "complete" : "incomplete")}></div>
    <div className="Todo-text">{props.text}</div>
  </div>
)

export default Todo;