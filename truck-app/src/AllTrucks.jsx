import React, { Component } from 'react';

class AllTrucks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trucks: [{
                name: "Trailer",
                url: "https://www.fleetboard.info/fileadmin/02_module_backgrounds/iconslider_background_trailer_03.jpg",
                awesomeness: 6
            }]
        }
    }

    render() {
        return (
            <div className="all-trucks">
                {this.state.trucks.map(el => <img src={el.url} alt="truck"/>)}
            </div>
        )
    }
}

export default AllTrucks;