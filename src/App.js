import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'stretch',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'get food',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'meet with James',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'create individual WMSLayers',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'grab packages from Amazon Hub',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'drink water',
        completed: false
      }
    ]
  }

  // Toggle completion
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( (todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,  // is the same as "title: title,"
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter( todo => todo.id !== id)]
    });
  }

  render() {
    //console.log(this.state.todos)
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={ this.addTodo }/>
            <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo }/>
            <About />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
