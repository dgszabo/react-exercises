import React, { Component } from 'react';

class EditTodoForm extends Component {
    handleEditSubmit(event) {
        event.preventDefault();
        this.props.editTodo({
            title: event.target.title.value,
            description: event.target.description.value,
        });
    }
    
    render() {
        return (
            <li className="list-group-item mx-auto">
                <form className="my-3 text-left edit-todo-form"  onSubmit={this.handleEditSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="mb-0">Title</label>
                        <div className="d-flex inline-flex">
                            <input type="text" className="form-control" id="title" name="title" placeholder="Edit title of todo" value={this.props.title} required />
                            <button type="submit" className="btn btn-warning d-inline ml-1" onClick={this.props.closeEditor}>Close</button> 
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="mb-0">Description</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Edit description of todo" value={this.props.description} />
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block d-inline">Edit todo</button>
                </form>
            </li>
        )
    }
}

export default EditTodoForm;