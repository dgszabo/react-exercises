import React from 'react';
import Truck from './Truck'

const AllTrucks = ({trucks}) => {
    return (
        <div className="row all-trucks my-3 d-flex justify-content-center">
            {trucks.map((truck, i) => <Truck key={i} name={truck.name} url={truck.url} awesomeness={truck.awesomeness} />)}
        </div>
    )
}

export default AllTrucks;