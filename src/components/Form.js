import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <input defaultValue="Next on the list..."></input>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Form;