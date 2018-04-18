import React, { Component } from 'react';
import Truck from './Truck'

class AllTrucks extends Component {
    render() {
        return (
            <div className="all-trucks">
                {this.state.trucks.map(truck => <Truck name={truck.name} url={truck.url} awesomeness={truck.awesomeness} />)}
            </div>
        )
    }
}

export default AllTrucks;