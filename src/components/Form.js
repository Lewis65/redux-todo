import React from 'react';
import { ADD_TODO } from '../actions/actions';
import { connect } from 'react-redux';

const Form = ({ handleAddTodo, input }) => (
  <div className="Form">
    <input placeholder="Next on the list..." value={input}></input>
    <button type="submit" onClick={handleAddTodo}>Submit</button>
  </div>
)

const mapStateToProps = state => {
  return {
    input: state.input
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleAddTodo: (e) => {
    e.preventDefault();
    const { input } = ownProps;
    dispatch({
      type: ADD_TODO,
      payload: {
        text: input
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);