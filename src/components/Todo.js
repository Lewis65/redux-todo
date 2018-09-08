import React from 'react';
import { connect } from 'react-redux';
import {TOGGLE_TODO, DELETE_TODO} from '../actions/actions'

const Todo = (props) => (
  <div className={"Todo Todo-" + props.status}>
    <div className="Todo-toggle">
      <div className="Todo-toggle-check">✓</div>
      <div className="Todo-toggle-delete" onMouseUp={props.handleTodoDelete}>X</div>
    </div>
    <div className="Todo-text" index={props.index} onMouseUp={props.handleTodoClick}>{props.text}</div>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleTodoClick: () => {
      document.getElementById("input").focus();
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          index: ownProps.index
        }
      });
    },
    handleTodoDelete: () => {
      document.getElementById("input").focus();
      dispatch({
        type: DELETE_TODO,
        payload: {
          index: ownProps.index
        }
      })
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Todo);