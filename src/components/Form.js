import React from 'react';
import { ADD_TODO } from '../actions/actions';
import { connect } from 'react-redux';

const Form = () => (
  <div className="Form">
    <input placeholder="Next on the list..." value={this.props.input}></input>
    <button type="submit" onClick={this.props.handleAddTodo}>Submit</button>
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
    const { input } = ownProps.input;
    dispatch({
      type: ADD_TODO,
      payload: {
        text: input
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);