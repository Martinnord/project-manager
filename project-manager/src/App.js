// NOTES: Can output varibles from different files with '{this.props.test}'
// All of the data will be held in state, usually we fetch it from an API, but this will be put right in our state
// Have everything in the top of your application in state and then pass it down to other components with properties
// When having an array of objects like this, you usually wanna create a separate component for each individual item and then map over them(projects) and output the component

import React, { Component } from 'react';
import Projects from './Components/Projects' // Importing the files from projects
import './App.css';

class App extends Component {

  // Define initial state keys
  constructor() {
    super()
    this.state = {
      projects: [
        {
          title: "Bussnies Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "Ecommerce Shopping Chart",
          category: "Web Development"
        }
      ]
    }
  }

  render() {
    return (
      // Has to be within ONE element when inside of render
      // Use this as a placeholder for all of the other components
      <div className="App">
        My App

      <Projects projects={this.state.projects}/>
      </div>

    );
  }
}

export default App;
