import React, { Component } from 'react'
import uuid from 'uuid'

class AddProject extends Component {

  constructor() {
    super()
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', "Mobile Development"]
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Put something in the title')
    } else {
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        console.log(this.state.title)
        this.props.addProject(this.state.newProject)
      })
    }
    e.preventDefault() // Prevent the form for to actually submit
  }

  render() {
    let categoryOptions = this.props.categories.map(category => { // Mapping over the array above
      return <option key={category} value={category}>{category}</option>
    })
    return (

      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
