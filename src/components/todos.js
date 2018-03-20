import React, { Component } from 'react';
import TodoItems from './todoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    var todoItems;
    if(this.props.todos){
      todoItems=this.props.todos.map(todo => {
        return <TodoItems key={todo.title} todo={todo} />
      })
    }
    return (
      <div className="Todo">
      <h3>Todo List</h3>
      {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  project : PropTypes.array
}

export default Todos;
