import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        Hello from TodoList
        <h2>todo list</h2>
        <Item />
      </div>
    )
  }
}
