import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import AllTrucks from './AllTrucks'
import NewTruckForm from './NewTruckForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        trucks: [{
            name: "Trailer",
            url: "https://www.fleetboard.info/fileadmin/02_module_backgrounds/iconslider_background_trailer_03.jpg",
            awesomeness: 6
        }]
    }
    this.addTruck = this.addTruck.bind(this)
  }

  addTruck(newTruck) {
      this.setState(prevState => {
          let newState = {...prevState}
          newState.trucks = [newTruck, ...prevState.trucks];
          return newState;
      });
  }
  
  render() {
    return (
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <i className="fas fa-truck-moving"></i>
            <span className="ml-1">truckU</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/new" className="nav-link">add new truck</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">all trucks</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container"></div>

        {/* ROUTES */}
        <div className="container">
          <Route path="/" exact component={AllTrucks} />
          <Route path="/new" component={NewTruckForm} />
        </div>
        
      </div>
    );
  }
}

export default App;
