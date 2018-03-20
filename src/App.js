import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import Todo from './components/todos';
import TodoItems from './components/todoItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
      $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos',
        dataType:'json',
        cache:false,
        success: function(data){
      this.setState({todos:data}, function(){
        console.log('this.stATE',this.state)
      })
        }.bind(this),
        error: function(xhr, status, err){
          console.log('error', err)
        }
    });
  }


  getProjects() {
    this.setState({
      projects:[
        {
          id:uuid.v4(),
          title: 'Web designing principles',
          category: 'CSS'
        },
        {
          id:uuid.v4(),
          title: 'JavaScript fundamentals',
          category: 'Javascript'
        },
        {
          id:uuid.v4(),
          title: 'React Fundamentals',
          category: 'React'
        }
      ]
    })
  }

  componentWillMount(){
    this.getProjects()
    this.getTodos();
  }

componentDidMount() {
  this.getTodos();
}

handleAddProject(project) {
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects})
}

handleRemoveProject(id) {
  let projects = this.state.projects;
  let index= projects.findIndex(x => x.id === id);
  projects.splice(index,1);
  this.setState({projects: projects})
}
  render() {
    return (
      <div className="App">
      <AddProject addProject={(project)=>{this.handleAddProject(project)}} />
      <Projects project={this.state.projects} onDelete={(id)=>{this.handleRemoveProject(id)}} />
      <hr />
      <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
