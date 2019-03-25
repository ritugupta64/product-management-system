import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from "./container";
import Error from "./Components/Error";
//import AddProducts from "./Components/AddProducts";
import ShowProducts from "./Components/ShowProducts";

import TaskBar from "./TaskBar/index";


class App extends Component {
  render() {
    return (
      <div className = "container">
       
      <Container>
          <Switch>
            <Route path="/" exact component={TaskBar}></Route> 
            <Route path="/showproducts" exact component={ShowProducts}></Route>
            <Route component={Error}></Route>
          </Switch>
       </Container>
    </div>
    );
  } 
}

export default App;







