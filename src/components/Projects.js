import React, { Component } from 'react';
import ProjectItem from './projectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    var projectItems;
    if(this.props.project){
      projectItems=this.props.project.map(project => {
        return <ProjectItem onDelete={(id)=>{this.deleteProject(id)}} key={project.title} project={project} />
      })
    }
    return (
      <div className="Projects">
      <h3>Latest project</h3>
      {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  project : PropTypes.array,
  onDeleete : PropTypes.func
}

export default Projects;
