import React, { Component } from 'react';
import Truck from './Truck'

class NewTruckForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            url: "",
            awesomeness: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //       title: nextProps.todo.title,
    //       description: nextProps.todo.description,
    //     }
    // }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTruck({
            title: this.state.name,
            url: this.state.url,
            awesomeness: this.state.awesomeness,
        });
    }
    
    render() {
        return (
            <form className="my-5 mx-auto text-left new-truck-form"  onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="mb-0">truck name</label>
                    <div className="d-flex inline-flex">
                        <input type="text" className="form-control" id="name" name="name" placeholder="enter name of truck" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label className="mb-0">truck image location</label>
                    <input type="text" className="form-control" id="url" name="url" placeholder="enter url of truck image" value={this.state.url} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label className="mb-0">awesomeness of truck</label>
                    <input type="number" className="form-control" id="awesomeness" name="awesomeness" placeholder="enter awesomeness of truck" value={this.state.awesomeness} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-secondary btn-block d-inline">add new truck</button>
            </form>
        )
    }
}

export default NewTruckForm;