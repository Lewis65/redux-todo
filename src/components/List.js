import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import {TOGGLE_TODO} from '../actions/actions'

const List = (props) => (
  <div className="List">
  {console.log("List props:", props)}
    {
      props.todos.map((todo, index) => {
        return(
          <Todo id={index} text={todo.text} status="incomplete"  onClick={() => props.handleTodoClick(index)} />
        )
      })
    }
  </div>
);

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTodoClick: (index) => {
      console.log("You clicked todo #" + index)
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          index
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);