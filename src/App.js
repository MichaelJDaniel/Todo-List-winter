import React, { Component } from 'react';
import List from "./List";
import './App.css';
import TodoForm from "./TodoForm"

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn Rails", complete: true, },
      { id: 2, name: "Learn React", complete:false, },
      { id: 3, name: "Graduate DPL", complete: false, }
    ]
   };

   getUniqId = () => {
     return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1)
   }
   
   addItem = (name) => {
     const {todos, } = this.state;
     const todo = { name, id: this.getUniqId, complete: false, }
     this.setState({ todos: [todo, ...todos] })
   }

   handleClick = (id) => {
     const { todos } = this.state
     this.setState({
       todos: todos.map( todo => {
         if (todo.id === id) {
           return {
           ...todo,
           complete: !todo.complete
         }
        }
        return todo

       })
     })
  }
  
  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem} />
          <List name="Todo List" items={this.state.todos} todoClick={this.handleClick} />
      </div>
      );

  }

}
     

export default App;
