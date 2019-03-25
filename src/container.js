import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header";

class Container extends Component {
  render() {
    return (
    <Router>
         <Header />
        {this.props.children}
    </Router>
)
  }
}

export default Container;
