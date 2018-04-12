import React, {Component} from 'react';

class Person extends Component {
    render() {
        return <h1 style={{color: this.props.favColor}}>Hi, my name is {this.props.name}</h1>
    }
}

export default Person;