import React, { Component } from 'react';
import { connect } from "react-redux";

import Task from "../Task/index"

class TaskList extends Component {
  render() {
    return (
      <div className="card">
       
        {this.props.tasks.map((task,index) => {
            return(<Task key={index} task={task}/>)
        })}
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);