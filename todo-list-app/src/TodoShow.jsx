import React from 'react';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { Redirect } from 'react-router-dom';

const TodoShow = props => {
    let { todo, editTodo, deleteTodo, openEditor, markCompleted } = props;
    const idx = props.match.params.id; 
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
                <Todo key={idx} title={todo.title} description={todo.description} completionStatus={todo.isCompleted} markCompleted={markCompleted.bind(this, idx)} deleteTodo={deleteTodo.bind(this, idx)} openEditor={openEditor.bind(this, idx)} />
            </ul>
        </div>
    )
}

export default TodoShow;