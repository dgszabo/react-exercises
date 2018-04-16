import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                title: "dishes",
                description: "wash the dishes"
            },
            {
                title: "dog",
                description: "walk the dog"
            },
            {
                title: "laundry",
                description: "do the laundry"
            }]
        }
    }

    markCompleted(event) {
        event.target.closest('.list-group-item').style.textDecoration = 'line-through';
    }
    
    deleteTodo(i) {
        let newTodos = [...this.state.todos];
        newTodos.splice(i, 1);
        this.setState({todos: newTodos});
    }

    render() {
        return (
            <div className="container m-1">
                <ul className="list-group text-center">
                    {this.state.todos.map((todo, i) => <Todo key={i} title={todo.title} description={todo.description} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo.bind(this, i)} />)}
                </ul>
            </div>
        )
    }
}

export default TodoList;