import React, { Component } from "react";

import "./App.css";
//import ToDoList from "./components/ToDoList";
import NewTodo from "./components/newTodo";





class App extends Component {
  render() {
    return  <div className="App">
         <NewTodo/>      
      </div>;
  }
}
export default App;
