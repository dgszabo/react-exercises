import React from 'react';

const Todo = ({ text }) => (
    <li className="list-group-item mx-auto text-left">
        <h3 className="todo-text">{text}</h3>
    </li>
)

export default Todo;