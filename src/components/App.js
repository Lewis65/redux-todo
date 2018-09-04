import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import List from './List';

const App = () => (
  <div className="App">
    <h1>Redux Todo</h1>
    <Form />
    <List />
  </div>
)

export default App;
