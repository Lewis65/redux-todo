import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {
  render() {
    return (
      <div className="List">
            <Todo />
      </div>
    );
  }
}

export default List;