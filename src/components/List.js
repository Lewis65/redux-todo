import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const List = (props) => (
  <div className="List">
  {console.log("List props:", props)}
    {
      props.todos.map((todo, index) => {
        return(
          <Todo id={index} text={todo.text} status="incomplete"  index={index} />
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

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleTodoClick: () => {
      console.log("You clicked todo #" + ownProps.index)
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          index: ownProps.index
        }
      });
    }
  }
}*/

export default connect(mapStateToProps, null)(List);