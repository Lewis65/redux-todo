import React from 'react';

const Todo = ({ onClick, status, text }) => (
  <div className="Todo" onClick={onClick}>
    <div className={"Todo-toggle " + status}></div>
    <div className="Todo-text">{text}</div>
  </div>
)

export default Todo;