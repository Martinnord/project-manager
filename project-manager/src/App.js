// NOTES: Can output varibles from different files with '{this.props.test}'
// All of the data will be held in state, usually we fetch it from an API, but this will be put right in our state
// Have everything in the top of your application in state and then pass it down to other components with properties
// When having an array of objects like this, you usually wanna create a separate component for each individual item and then map over them(projects) and output the component

import React, { Component } from 'react';
import Projects from './Components/Projects' // Importing the files from projects
import AddProject from './Components/AddProject' // Importing the files from projects
import uuid from 'uuid'

class App extends Component {

  // Define initial state keys
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  // Lifecyclemethod - fires of everytime when the component is re-renderd
  componentWillMount() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Bussnies Website",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Chart",
        category: "Web Development"
      }
    ]})
  }

  handleAddProject(project) {
    // Will grab whats already there and push it
    const projects = this.state.projects
    projects.push(project)
    this.setState({projects:projects}) // Reset it
  }

  handleDeleteProject(id) {
    const projects = this.state.projects
    const index = projects.findIndex(x => x.id === id) // Finds all the ids and then match them to the current id thats being passed in
    projects.splice(index, 1)
    this.setState({projects:projects})
  }

  render() {
    return (
      // Has to be within ONE element when inside of render
      // Use this as a placeholder for all of the other components
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelte={this.handleDeleteProject.bind(this)}/>
      </div>

    );
  }
}

export default App;
