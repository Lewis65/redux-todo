import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const List = ({ todos }) => (
  <div className="List">
    {todos.map((todo, id) => (
      <Todo id={id} {...todo} onClick={handleTodoClick(id)} />
    ))}
  </div>
);

connect(List, {todos});

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTodoClick: id =>
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          id: id
        }
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);