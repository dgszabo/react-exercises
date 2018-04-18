import React from 'react';

const Truck = ({name, url, awesomeness}) => {
    return (
        <div className="card mx-3 my-auto align-items-center" style={{width: "20rem"}}>
            <div className="card-title text-center">
                <h5 className="card-title mt-4">{name}</h5>
            </div>
            <img className="card-img" src={url} alt="truck" />
            <div className="card-body text-left">
                <p className="card-text">The {name} is {awesomeness} of 10 awesome!</p>
            </div>
        </div>
    )
}

export default Truck;