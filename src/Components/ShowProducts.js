import React, { Component } from 'react'
import TaskList from "../TaskList/index"

class ShowProducts extends Component {
  render() {
    return (
      <div>
       <h2 className="my-3">Show Products</h2>
        <TaskList />
      </div>
    )
  }
}

export default ShowProducts;
