import React, { Component } from 'react'

class Task extends Component {
  render() {
    //console.log(this.props)
    return (
        <div className="product-details">
        {this.props.task}
       </div>
    )
  }
}

export default Task;


