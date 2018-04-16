import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                title: "dishes",
                description: "wash the dishes",
                isCompleted: 0
            },
            {
                title: "dog",
                description: "walk the dog",
                isCompleted: 0
            },
            {
                title: "laundry",
                description: "do the laundry",
                isCompleted: 0
            }]
        }
    }

    markCompleted(i) {
        this.setState((prevState) => {
            let newState = {...prevState}
            if(newState.todos[i].isCompleted === 0) {
                newState.todos[i].isCompleted = 1;
            } else {
                newState.todos[i].isCompleted = 0;
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
                <ul className="list-group text-center">
                    {this.state.todos.map((todo, i) => <Todo key={i} title={todo.title} description={todo.description} completionStatus={this.props.completionStatus[this.state.todos[i].isCompleted]} markCompleted={this.markCompleted.bind(this, i)} deleteTodo={this.deleteTodo.bind(this, i)} />)}
                </ul>
            </div>
        )
    }
}

TodoList.defaultProps = {
    completionStatus: ['none', 'line-through']
}

export default TodoList;