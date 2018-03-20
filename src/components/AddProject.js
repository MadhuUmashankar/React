import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      newProject : {}
    }
  }
static defaultProps = {
  categories : [ 'CSS', 'Javascript', 'React']
}
handleSubmit(e){
  if(this.refs.title.value === ''){
    alert('title is Required');
  }
  else{
    console.log('inside handle Submit', this.refs)
    this.setState({
      newProject:{
        id:uuid.v4(),
        title:this.refs.title.value,
        category:this.refs.category.value
      }
    }, function () {
    //  console.log('this.state', this.state)
        this.props.addProject(this.state.newProject);
    })
  }
  e.preventDefault();
}
  render() {
    let categoryOptions = this.props.categories.map((category) => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>
          <form onSubmit={(e)=> {this.handleSubmit(e)}}>
            <div>
              <label>Title</label><br/>
              <input type="text" ref='title' />
            </div>
            <div>
              <label>Category</label><br/>
              <select ref='category'> {categoryOptions}</select>
            </div>
            <br/>
            <input type="submit" value="Submit" /><br/><br/>
          </form>
      </div>
    );
  }
}


AddProject.propTypes = {
  category : PropTypes.array,
  addProject : PropTypes.func
}

export default AddProject;