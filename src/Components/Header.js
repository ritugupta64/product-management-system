import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header>
            <h1 className="float-left">Product Management System</h1>
            <ul className="nav justify-content-end float-right pt-1">
                    <li className = "nav-item">
                    <NavLink to = "/" exact strict className = "nav-link">Add Product</NavLink>
                    </li>
                    <li className = "nav-item">
                    <NavLink to = "/showproducts" exact className = "nav-link">Show Products</NavLink>
                    </li>
             </ul>
         </header>
       
    )
  }
}

export default Header



