import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: ["wash the dishes", "walk the dog", "do the laundry"]
        }
    }

    render() {
        return (
            <div className="container">
                <ul className="list-group text-center">
                    {this.state.todos.map((txt, i) => <Todo key={i} text={txt} />)}
                </ul>
            </div>
        )
    }
}

export default TodoList;