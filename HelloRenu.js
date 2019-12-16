import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Logout from './Logout';



class HelloRenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <h1>Renuka</h1>
        <NavLink exact to="/Logout">Logout</NavLink>
        <HashRouter history = {history}>
       

  <Route exact path="/Logout" component={Logout}/>

      
      </HashRouter>
      </div>
    );
  }
}

export default HelloRenu;
