import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
// Only need to include the css in the main app component

class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id)
  }

  render() {
    let projectItems

    if(this.props.projects) {
      // Map through the arrar
      projectItems = this.props.projects.map(project => {
        //console.log(project)

      return (
        <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/> //ProjectItem component with each project. Assigning each project item to the 'projectItem' on line 12
      )

      })
    }

    return (
      // Has to be within ONE element when inside of render
      // Use this as a placeholder for all of the other components
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
