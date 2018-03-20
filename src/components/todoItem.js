import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
  handleDeleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className='Todo'>
    <strong>  {this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItems.propTypes = {
  todo : PropTypes.object
}


export default TodoItems;
