import React, { Component } from 'react';
import TodoForShow from './TodoForShow';
import EditTodoForm from './EditTodoForm';
import { Redirect } from 'react-router-dom';

class TodoShow extends Component {
    render() {
        let { todo, editTodo, deleteTodo, goToEdit, markCompleted } = this.props;
        const idx = this.props.match.params.id; 
        if(!todo) {
            if(JSON.parse(localStorage.getItem('todos'))[idx]) {
                todo = JSON.parse(localStorage.getItem('todos'))[idx];
            } else {
                return <Redirect to="/todos" />
            }
        }

        return (
            <div className="container mt-2 mx-auto">
                <ul className="list-group text-center">
                    <TodoForShow key={idx} title={todo.title} description={todo.description} completionStatus={todo.isCompleted} markCompleted={markCompleted.bind(this, idx)} deleteTodo={deleteTodo.bind(this, idx)} goToEdit={goToEdit.bind(this, idx)} />
                </ul>
            </div>
        )
    }
}

export default TodoShow;