import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import List from './List';

const App = () => (
  <div className="App">
    <h1>Redux Todo</h1>
    <p>Now with 60% more unnecessarily powerful technology!</p>
    <Form />
    <List />
  </div>
)

export default App;
