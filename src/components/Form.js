import React from 'react';
import { ADD_TODO } from '../actions/actions';
import { connect } from 'react-redux';

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(){
    this.props.handleAddTodo(this.state.input);
    this.setState({
      input: ""
    })
  }

  render(){
    return(
      <div className="Form">
        <input placeholder="Next on the list..." value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}></input>
        <button type="submit" onClick={this.handleAddTodo}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input: state.input
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (input) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        text: input
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);