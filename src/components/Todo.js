import React from 'react';
import { connect } from 'react-redux';
import {TOGGLE_TODO} from '../actions/actions'

const Todo = (props) => (
  <div className="Todo" index={props.index} onClick={props.handleTodoClick}>
    <div className={"Todo-toggle Todo-" + (props.status)}></div>
    <div className="Todo-text">{props.text}</div>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => {
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
}

export default connect(undefined, mapDispatchToProps)(Todo);