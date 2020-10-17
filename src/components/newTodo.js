import React from "react";
import TodoFrom from "./Todoform";
import Todo from "./Todo";
export default class newTodo extends React.Component {
  state = {
    todos: [],
    todosToShow: "tutti",
    toggleAll: true,
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  handleTodoToShow = (event) => {
    this.setState({
      todosToShow: event.target.firstChild.nodeValue,
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  deleteAllCompleteTodos = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  render() {
    let todos = [];

    if (this.state.todosToShow === "tutti") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "completi") {
      todos = this.state.todos.filter((todo) => todo.complete);
    } else if (this.state.todosToShow === "incompleti") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    }

    return (
      <div>
        <TodoFrom onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteTodo={() => this.deleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Attività rimanenti: {todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={(event) => this.handleTodoToShow(event)}>
            tutti
          </button>
          <button onClick={(event) => this.handleTodoToShow(event)}>
            completi
          </button>
          <button onClick={(event) => this.handleTodoToShow(event)}>
            incompleti
          </button>
        </div>
    
        <div>
          <button
            onClick={() => {
              this.setState({ toggleAll: !this.state.toggleAll,
                todos: this.state.todos.map(todo=>({...todo,complete:this.state.toggleAll})) 
              });
             
            }}
          >
            Spunta tutti: {this.state.toggleAll.toString()}
          </button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.deleteAllCompleteTodos}>
              Elimina le attività completate
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
