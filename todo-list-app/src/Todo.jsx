import React from 'react';

const Todo = ({ title, description, deleteTodo, markCompleted }) => (
    <li className="list-group-item mx-auto">
        <div className="d-flex">
            <span>
                <h3 className="todo-title">{title}</h3>
            </span>
            <span className="ml-auto my-auto">
                <button className="btn btn-success btn-sm m-1" onClick={markCompleted}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="btn btn-warning btn-sm m-1" onClick={deleteTodo}>
                    <i className="fas fa-times"></i>
                </button>
            </span>
        </div>
        <div className="text-left">
            <h5 className="todo-description">{description}</h5>
        </div>
    </li>
)

export default Todo;