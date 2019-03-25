import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { addTask } from "../Actions/index" ;
import TaskList from '../TaskList';

class TaskBar extends Component {

    constructor(props) {
        super(props)
        
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
        this.textInput3 = React.createRef();
      }

     add = (e) =>{
        e.preventDefault();
       
        this.props.addTask("Name: " + this.textInput1.current.value)
        this.props.addTask("Description: " + this.textInput2.current.value)
        this.props.addTask("Price: " + this.textInput3.current.value)
       
    }
   
    



  render() {
      
    return (
    <React.Fragment>
        <h2 className="my-3">Add Product</h2>
            <form onSubmit={this.add} className="form-group">
                <label htmlFor="productName">Product Name:</label>
                <input 
                        type="text" 
                        className="form-control  mb-3" 
                        id="productName"
                        placeholder="Product Name..." 
                        ref={this.textInput1}
                />
                <label htmlFor="description">Product Description:</label>

                <input 
                        type="text" 
                        className="form-control mb-3" 
                        id="description" 
                        placeholder="Product Description..." 
                        ref={this.textInput2}
                />

                <label htmlFor="price">Product Price:</label>

                <input 
                        type="number" 
                        className="form-control mb-3" 
                        id="price" 
                        placeholder="Product Price..."  
                        ref={this.textInput3}
                />
                <button type="submit" className="btn btn-primary my-2">Add Product</button>
        </form>
        <div className="product-wrapper">
        <TaskList />
        </div>
           
        </React.Fragment>     
                

       
             )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(TaskBar);
