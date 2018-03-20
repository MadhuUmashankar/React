import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  handleDeleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    let id= this.props.project.id
    return (
      <li className='Project'>
    <strong>  {this.props.project.title}</strong> : {this.props.project.category}
    <a href='#'onClick={(id)=>{this.handleDeleteProject(id)}}>Delete</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project : PropTypes.object,
  onDelete : PropTypes.func
}


export default ProjectItem;
