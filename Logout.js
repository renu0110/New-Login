import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Login from "./Login";



class Logout extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default Logout;
