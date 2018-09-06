import React from 'react';
import { ADD_TODO } from '../actions/actions';
import { connect } from 'react-redux';

const Form = (props) => (
  <div className="Form">
    <input placeholder="Next on the list..." value={props.input}></input>
    <button type="submit" onClick={props.handleAddTodo}>Submit</button>
  </div>
)

const mapStateToProps = state => {
  return {
    input: state.input
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        text: e.target.value
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);