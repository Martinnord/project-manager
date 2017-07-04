import React, { Component } from 'react';
// Only need to include the css in the main app component

class Projects extends Component {

  render() {

    let projectItem;

    if(this.props.projects) {
      // Map through the arrar
      projectItem = this.props.projects.map(project => {
        console.log(project)
      })
    }

    return (
      // Has to be within ONE element when inside of render
      // Use this as a placeholder for all of the other components
      <div className="Projects">
        My Projects
      </div>
    );
  }
}

export default Projects;
