import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Todo</h1>
        <p>Now with 60% more unnecessarily powerful technology!</p>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
