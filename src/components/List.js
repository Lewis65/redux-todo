import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import {TOGGLE_TODO} from '../actions/actions'

const List = () => (
  <div className="List">
    {this.props.todos.map((todo, index) => (
      <Todo id={index} text={todo.text} status={todo.status} onClick={this.props.handleTodoClick(index)} />
    ))}
  </div>
);

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