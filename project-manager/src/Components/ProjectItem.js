import React, { Component } from 'react';
// Only need to include the css in the main app component

class ProjectItem extends Component {

  render() {
    console.log(this.props.properties)
    return (
      <li className="Project">
        My Projects
      </li>
    );
  }
}

export default ProjectItem;
