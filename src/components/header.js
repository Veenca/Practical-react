import React from "react";

import logo from "../logo.svg";

export class Header extends React.Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.title}
            <br /> {this.props.num} <br />
            {this.props.saluto}
          </p>
         
        </header>
      );
    }
  }
