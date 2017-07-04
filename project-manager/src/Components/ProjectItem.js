import React, { Component } from 'react';
// Only need to include the css in the main app component

class ProjectItem extends Component {

  deleteProject(id) {
    this.props.onDelete(id)
  }


  render() {
    console.log(this.props.properties)
    return (
      <li className="Project">
        {this.props.project.title} - {this.props.project.category}. <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
