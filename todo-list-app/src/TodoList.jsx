import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                title: "dishes",
                description: "wash the dishes",
                isCompleted: false
            },
            {
                title: "dog",
                description: "walk the dog",
                isCompleted: false
            },
            {
                title: "laundry",
                description: "do the laundry",
                isCompleted: false
            }],
            isOpen: false,
        }
        this.addTodo = this.addTodo.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState(prevState => {
            let newState = {...prevState}
            if(newState.isOpen === true) {
                newState.isOpen = false;
            } else {
                newState.isOpen = true;
            }
            return {...newState}
        })
    }

    addTodo(newTodo) {
        newTodo.isCompleted = false;
        this.setState(prevState => {
            let newState = {...prevState}
            newState.isOpen = false;
            newState.todos = [newTodo, ...prevState.todos];
            return newState;
        });
    }

    markCompleted(i) {
        this.setState((prevState) => {
            let newState = {...prevState}
            if(newState.todos[i].isCompleted === false) {
                newState.todos[i].isCompleted = true;
            } else {
                newState.todos[i].isCompleted = false;
            }
            return newState;
        });
    }
    
    deleteTodo(i) {
        let newTodos = [...this.state.todos];
        newTodos.splice(i, 1);
        this.setState({todos: newTodos});
    }

    render() {
        return (
            <div className="container m-1">
                <button className="btn btn-secondary btn-lg form-opener" onClick={this.toggleForm}>{this.state.isOpen ? "Close todo form" : "Open todo form"}</button>
                <NewTodoForm isOpen={this.state.isOpen} addTodo={this.addTodo} />
                <ul className="list-group text-center">
                    {this.state.todos.map((todo, i) => <Todo key={i} title={todo.title} description={todo.description} completionStatus={this.state.todos[i].isCompleted} markCompleted={this.markCompleted.bind(this, i)} deleteTodo={this.deleteTodo.bind(this, i)} />)}
                </ul>
            </div>
        )
    }
}

export default TodoList;