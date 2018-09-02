import React, { Component } from 'react';
import Todo from './Todo';

const List = ({ todos, onTodoClick }) => (
  <div className="List">
    {todos.map((todo, id) => (
      <Todo id={id} {...todo} onClick={() => onTodoClick(id)} />
    ))}
  </div>
);

export default List;